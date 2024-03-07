import React from "react"

interface BodyProps{
    children: React.ReactNode
}

export const Body: React.FC<BodyProps> = ({children}) => {
    return(
        <tbody className="rounded">
            {children}
        </tbody>
    )
}