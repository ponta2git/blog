import React from 'react'
import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { StaticImage } from 'gatsby-plugin-image'

const styleProfile = tw`
    text-center
    flex
    flex-col
    gap-y-2
`

const styleName = tw`font-bold`

const styleSNSLinkList = tw`
    flex
    flex-row
    items-center
    content-center
    justify-center
    gap-x-6
`
const styleSNSLink = tw`
    text-gray-500
`

const styleDescription = tw`
    text-sm
    w-2/3
    mx-auto
    lg:w-full
    lg:m-0
`

const Profile = () => (
    <div css={styleProfile}>
        <p><StaticImage src="../images/profile/logo.png" alt="ponta" /></p>
        <p css={styleName}>ponta</p>
        <ul css={styleSNSLinkList}>
            <li css={styleSNSLink}>
                <a aria-label="mail" href="mailto:coshun@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </li>
            <li css={styleSNSLink}>
                <a aria-label="twitter" href="https://twitter.com/ponta2twit">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
        </ul>
        <p css={styleDescription}>都内に住む、しがないソフトウェアエンジニアです。ゲームをしたり音楽を聴いたり、 コンピュータをいじることが好きです。ときどき紅茶を飲んだり、旅行に行ったりします。</p>
    </div>
)

export default Profile;