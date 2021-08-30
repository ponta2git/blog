import React from 'react'
import tw from 'twin.macro'

const styleFooter = tw`
    absolute
    bottom-0
    bg-gray-800
    text-gray-500
    w-full
    p-6
    text-center
    border-t-2
    border-gray-500
`

const Footer = () => (
    <div css={styleFooter}>
        <p>(C)2021 ponta.</p>
    </div>
)

export default Footer