import { Link } from 'gatsby'
import React from 'react'
import tw, { css } from 'twin.macro'

const styleHeader = tw`
    px-5
    lg:px-10
    py-24
`

const styleText = [
    tw`
        tracking-tight
        text-2xl
        hover:text-gray-500
        duration-200
        ease-in-out
        transition-colors
    `,
    css`
        font-family : Hahmlet;
    `
]

const Header = ({ siteName }) => (
    <header css={styleHeader}>
        <h1 css={styleText}>
            <Link to={"/"}>{siteName}</Link>
        </h1>
    </header>
);

export default Header;