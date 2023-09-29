import type { StorybookConfig } from "@storybook/react-webpack5";
import React from "react"

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    ({
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [{
      test: /\.css$/,
      sideEffects: true,
      use: [
          require.resolve("style-loader"),
          {
              loader: require.resolve("css-loader"),
              options: {
                  
                  importLoaders: 1,
              },
          },{
    loader: require.resolve("postcss-loader"),
    options: {
    implementation: require.resolve("postcss"),
    },
    },
      ],
    },],
      }
    })
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    //@ts-ignore
    config.module.rules[2].exclude = [/node_modules\/(?!(gatsby|gatsby-script)\/)/]

    // Remove core-js to prevent issues with Storybook
    //@ts-ignore
    config.module.rules[2].exclude= [/core-js/]
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    //@ts-ignore
    config.module.rules[2].use[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries")
    )

    //@ts-ignore
    config.resolve.mainFields=["browser", "module", "main"]
    return config
  },
};
export default config;
