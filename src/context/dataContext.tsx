import { useData, CountryData } from '../hooks/useData';
import React, { createContext, useContext } from 'react';

interface DataContextType {
    data: CountryData[];
    hasError: boolean;
    isFetching: boolean;
}

interface dataProviderProps{
    children: React.ReactNode
}
const DataContext = createContext<DataContextType>({
    data: [],
    hasError: false,
    isFetching: false,
});


export const DataProvider: React.FC<dataProviderProps> = ({ children }) => {

    const { data, hasError, isFetching } = useData();
    if(!data){
        return;
    }

    return (
        <DataContext.Provider value={{ data, hasError, isFetching }}>
            {children}
        </DataContext.Provider>
    );
};

// Hook personalizado para consumir o contexto
export const useDataContext = () => useContext(DataContext);
