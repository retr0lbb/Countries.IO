import React from "react"

interface TableChildren{
    children: React.ReactNode
}
export const Table: React.FC<TableChildren> = ({children}) => {
    return(
        <table className="rounded-md w-[1000px] h-[800px] overflow-hidden">
            {children}
        </table>
    )
}