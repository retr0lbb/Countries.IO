import React from "react"

interface HeadProps{
    children: React.ReactNode
}
export const Head: React.FC<HeadProps> = ({children}) => {
    return(
        <thead className="rounded">
            <tr className="w-full rounded-full">
                {children}
            </tr>
        </thead>
    )
}