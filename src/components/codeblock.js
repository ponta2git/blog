import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import github from "prism-react-renderer/themes/github"

const CodeBlock = ({ children, className }) => {
    const language = className.replace(/language-/, "");


    return <Highlight
            { ...defaultProps }
            code={children.trim()}
            language={language}
            theme={github}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <div className={className} style={style}>
                        {tokens.map((line, idx) => (
                            <div {...getLineProps({line, key: idx})}>
                                {line.map((token, key) => (
                                    <span { ...getTokenProps({token, key}) } />
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </Highlight> 
}

export default CodeBlock