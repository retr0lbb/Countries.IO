import { useState, useEffect } from "react";
import axios from "axios";

export interface CountryData{
    altSpellings: string[],
    capital: string[],
    continents: string[],
    flags: {
        png: string,
        svg: string
        alt: string
    },
    maps: {
        googleMaps: string,
        openStreetMaps: string
    },
    name: {
        common: string
    },
    currencies: {
        name: string
    }
}

export function useData(){
    const [data, setData] = useState<CountryData[]>();
    const [isFetching, setIsfetching] = useState(true);
    const [hasError, setHasError] = useState(false)
    
    useEffect(()=> {
        axios.get("https://restcountries.com/v3.1/all")
        .then(response =>{
            setData(response.data);
        }).catch(err => {
            setHasError(true);
            console.log(err);
        }).finally(()=> {
            setIsfetching(false);
        })
    }, [])
    
    
    return{ data, isFetching, hasError}
}