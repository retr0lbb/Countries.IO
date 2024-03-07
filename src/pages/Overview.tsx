import { Map, Table } from "lucide-react"
import {useNavigate} from "react-router-dom"

export const Overview: React.FC = () => {
    const navigator = useNavigate()
    return(
        <div className="w-screen grid place-items-center h-screen bg-zinc-950">
            <div className="text-zinc-200">
                <h1 className="text-8xl font-semibold font-mono">Countries.IO</h1>
                <div className="flex items-center justify-center gap-10 text-2xl p-4">
                    <button onClick={()=> navigator("/table")} className="bg-zinc-800 py-4 px-6 rounded-xl flex items-center group hover:bg-zinc-700 gap-3"><Table  className="group-hover:text-emerald-500"/> Tabela </button>
                    <button onClick={()=> navigator("/map")} className="bg-zinc-800 py-4 px-6 rounded-xl flex items-center group hover:bg-zinc-700 gap-3"><Map className="group-hover:text-emerald-500"/> Maps </button>
                </div>
            </div>
        </div>
    )
}