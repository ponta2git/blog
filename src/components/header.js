import { Link } from "gatsby"
import React from "react"

export const Header = ({ title }) => {
    return <header className="px-4">
        <h1 className="text-3xl text-gray-900 py-16"><Link to="/">{title}</Link></h1>
    </header>
}