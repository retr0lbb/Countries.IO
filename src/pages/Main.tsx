import { useDataContext } from "../context/dataContext"
import { useState } from "react"


export const Main: React.FC = () => {
    const { data, isFetching, hasError } = useDataContext()
    const [inputVal, setInputVal] = useState("")

    const renderData =(query?: string) => {
       return( 
        data.map((item, index)=> {
            return(
                <div>
                    {item.name.common}
                </div>
            )
        }))
    }
    return(
        <main className="w-screen h-screen">
            <input type="text" className="bg-zinc-700" value={inputVal} onChange={(e) => {
                setInputVal(e.target.value)
            }} />
            {renderData(inputVal)}
        </main>
    )
}