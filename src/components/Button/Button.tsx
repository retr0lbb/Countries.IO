import React from "react"

interface ButtonProps{
    disable?: boolean,
    onClick?: () => void,
    children: React.ReactNode
}
export const Button: React.FC<ButtonProps> = ({children, disable, onClick}) => {
    return(
        <button
            className="hover:scale-110"
            disabled={disable}
            onClick={onClick}>
                {children}
        </button>
    )
}

// 
// 
// 
// () => setCurrentPage(prevPage => prevPage + 1)
// currentPage === totalNumberOfPages