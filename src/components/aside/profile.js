import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const Profile = () => (
    <div>    
        <div className="text-center">
            <StaticImage alt="ponta image" src="../../images/profile/logo.png" />
        </div>
        <p className="text-center mt-4 font-bold">ponta</p>
        <p className="text-center md:text-left md:px-4 my-4 text-sm">
            都内に住む、しがないソフトウェアエンジニアです。ゲームをしたり音楽を聴いたり、
            コンピュータをいじることが好きです。ときどき紅茶を飲んだり、旅行に行ったりします。
        </p>
    </div>
)