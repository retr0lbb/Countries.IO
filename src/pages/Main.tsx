import { useDataContext } from "@/context/dataContext"; 
import { useState } from "react";
import Table from "@/components/DataTable"
import {ChevronLeft, ChevronRight, FileBarChart, Trash2 } from "lucide-react"
import { Button } from "@/components/Button/Button";
import * as XLSX from "xlsx"

export const Main: React.FC = () => {
    const { data, isFetching } = useDataContext();
    const [inputVal, setInputVal] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [countrysSelected, setCountrysSelected] = useState<string[]>([])
    const totalPerPage = 10;

    const filteredData = data.filter(item =>item.name.common.toLocaleLowerCase().includes(inputVal.toLocaleLowerCase() || ""));
    const totalNumberOfPages = Math.ceil(filteredData.length / totalPerPage);

    function exportToExel(){
        const selectedData = filteredData.filter(item => countrysSelected.includes(item.name.common))
        const userDecision = confirm(`Deseja exportar para uma tabela execel os seguintes items: ${selectedData.length}`)
        if(userDecision !== true){ return }

        const workSheet = XLSX.utils.json_to_sheet(selectedData.map(item => ({
            "Nome": item.name.common,
            "Capital": item.capital ? (Array.isArray(item.capital) ? item.capital.join(', ') : item.capital) : 'N/A',
            "População Atual": item.population,
            "Moeda Local": getObjectKeys(item.currencies).name,
            "Idioma Nativo": getObjectKeys(item.languages)
        })));
        const workBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workBook, workSheet, "Paises");
        XLSX.writeFile(workBook, "paises.xlsx")
    }

    function toggleSelected(name: string){
        setCountrysSelected(prevSelected => {
            if(prevSelected.includes(name)){
                return prevSelected.filter(country=> country !== name)
            }else{
                return [...prevSelected, name]
            }
        })
    }

    function getObjectKeys(object: any){

        try {
            const items = object;
            const keyCode = Object.keys(items)[0];
            const name = items[keyCode];
            return name
        } catch (error) {
            if(error){
                console.log(error)
                return false;
            }
        }  

    }
    const renderData = () => {
        const startIndex = (currentPage - 1) * totalPerPage;
        const endIndex = Math.min(startIndex + totalPerPage, filteredData.length);
        console.log(filteredData[1])

        if (currentPage > totalNumberOfPages) {
            return (
                <Table.row
                selected={false}
                onSelected={() => {}}
                    flag="none"
                    isOdd={false}
                    key={-1}
                    populatio={0}
                    capital={[""]}
                    currency={""}
                    lenguage={""}
                    name={"Não há mais dados"}
                />
            );
        }
    
        if (filteredData.length === 0) {
            return (
                <Table.row
                selected={false}
                onSelected={() => {}}
                    flag="none"
                    isOdd={false}
                    key={-1}
                    populatio={null}
                    capital={["Não encontrada"]}
                    currency={"Não encontrada"}
                    lenguage={"Não encontrada"}
                    name={"Não encontrada"}
                />
            );
        }
    
        return filteredData.slice(startIndex, endIndex).map((item, index) => {
            const currencyName = getObjectKeys(item.currencies).name
            const languageName = getObjectKeys(item.languages)
            return (
                <Table.row
                selected={countrysSelected.includes(item.name.common)}
                onSelected={() => {
                    toggleSelected(item.name.common)
                }}
                    flag={item.flags.svg}
                    isOdd={index % 2 === 0}
                    key={index}
                    populatio={item.population}
                    capital={item.capital? item.capital: ["não definido"]}
                    currency={currencyName? currencyName : "não definido"}
                    lenguage={languageName? languageName: "não definido"}
                    name={item.name.common}
                />
            );
        });
    };
    

    return (
        <main className="w-screen h-screen overflow-x-hidden flex flex-col justify-center items-center bg-zinc-950">
            <div>
                <div className="text-zinc-200 flex items-center gap-2 w-full p-2">
                    <h1>Paises</h1>
                    <input
                        type="text"
                        className="bg-zinc-700"
                        value={inputVal}
                        onChange={(e) => {
                            setInputVal(e.target.value);
                            setCurrentPage(1)
                        }}
                    />
                    <div className="flex items-center justify-center">
                        <Button disable={currentPage === 1} onClick={() => setCurrentPage(prevPage => prevPage - 1)}>
                            <ChevronLeft />
                        </Button>
                        <span>
                            {currentPage} de {totalNumberOfPages}
                        </span>
                        <Button onClick={() => setCurrentPage(prevPage => prevPage + 1)} disable={currentPage === totalNumberOfPages}>
                            <ChevronRight />
                        </Button>
                    </div>
                    <button className="flex font-bold items-center gap-2 bg-zinc-800 py-2 px-4 rounded-md" onClick={exportToExel}> Exportar com Exel<FileBarChart /></button>
                    <div className="flex items-center gap-4">
                        <span>{filteredData.filter(item => countrysSelected.includes(item.name.common)).length} items Selecionados</span>
                        <button className="flex items-center justify-center gap-2 hover:scale-105" onClick={()=> {setCountrysSelected([])}}>Clear<Trash2 /></button>
                    </div>
                </div>
                <Table.root>
                    <Table.head>
                        <Table.colum ColumnValue="select" />
                        <Table.colum ColumnValue="Bandeira" />
                        <Table.colum ColumnValue="Nome" />
                        <Table.colum ColumnValue="Capital" />
                        <Table.colum ColumnValue="População Atual" />
                        <Table.colum ColumnValue="Moeda Local" />
                        <Table.colum ColumnValue="Idioma Nativo" />
                    </Table.head>
                    <Table.content>
                        {isFetching ? "" : renderData()}
                    </Table.content>
                </Table.root>
            </div>
        </main>
    );
};
