import React, { PropsWithChildren } from "react";
import { Highlight, themes } from "prism-react-renderer";

type CodeBlockType = {
  className?: string;
  fileName?: string;
};

const CodeBlock: React.FC<PropsWithChildren<CodeBlockType>> = ({
  children,
  className,
  fileName,
}) => {
  const language = className ? className.replace(/language-/, "") : "";

  return (
    <>
      {fileName && (
        <div className="text-xs font-mono px-2 py-1 ml-2 bg-gray-200 inline-block rounded-t">
          <p>{fileName}</p>
        </div>
      )}
      <div
        className={`w-full rounded-lg bg-[${themes.okaidia.plain.backgroundColor}]`}
      >
        <Highlight
          code={children ? String(children).trim() : ""}
          language={language}
          theme={themes.okaidia}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <div
              className={`${className} text-xs font-mono overflow-x-auto rounded-lg p-3`}
              style={style}
            >
              {tokens.map((line, tokens_idx) => (
                <div key={tokens_idx} {...getLineProps({ line })}>
                  {line.map((token, lines_key) => (
                    <span key={lines_key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </div>
          )}
        </Highlight>
      </div>
    </>
  );
};

export default CodeBlock;
