import { Link } from "gatsby";
import React from "react";
import { SiteHeader } from "../node-types";

const Header: React.FC<SiteHeader> = ({ siteName }) => (
  <header className="px-5 lg:px-20 py-10">
    <h1 className="font-['Hahmlet'] text-lg first-letter:text-2xl">
      <Link to={"/"}>
        <span className="hover:text-gray-400 duration-200 ease-in-out transition-colors">
          {siteName}
        </span>
      </Link>
    </h1>
  </header>
);

export default Header;
