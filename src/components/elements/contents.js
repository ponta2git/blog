import React from "react"
import tw from 'twin.macro'

const styleNodesWrapper = tw`
    flex
    flex-col
    gap-y-6
`

const Contents = ({ children }) => <div css={styleNodesWrapper}>{children}</div>

export default Contents
