import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import okaidia from "prism-react-renderer/themes/okaidia"
import tw, { css } from "twin.macro"

const styleFileName = tw`
    text-xs
    font-mono
    px-2
    py-1
    ml-2
    bg-gray-200
    inline-block
`

const styleWrapper = [tw`
    w-full
    p-3
    rounded
`, css`
    background-color: ${okaidia.plain.backgroundColor}`
]

const styleCodeBlock = tw`
    text-sm
    font-mono
    overflow-x-auto
`


const CodeBlock = ({ children, className, fileName }) => {
    const language = className.replace(/language-/, '')

    return <>
            {!!fileName &&
                <div css={styleFileName}>
                    <p>{fileName}</p>
                </div>
            }
            <div css={styleWrapper}>
                <Highlight
                    { ...defaultProps }
                    code={children.trim()}
                    language={language}
                    theme={okaidia}>
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                            <div className={className} style={style} css={styleCodeBlock}>
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
            </div>
        </>
}

export default CodeBlock