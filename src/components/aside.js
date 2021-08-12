import React from "react"

export const Aside = ({ children }) => {
    return (
        <aside className="px-4 mt-12 lg:w-1/4 lg:mt-0 xl:w-1/3">
            {children}
        </aside>
    );
}
