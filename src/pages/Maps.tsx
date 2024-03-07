import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {useDataContext} from "@/context/dataContext"
import AutoCompleteInput from '@/components/Datalist/Datalist';
import { useNavigate } from 'react-router-dom';

const key = import.meta.env.VITE_REACT_API_KEY;

const Maps: React.FC = () => {
    const {data} = useDataContext()
    const [zoom, setZoom] = useState(3)
    const [center, setCenter] = useState({ lat: 0, lng: 0 });
    const [countryName, setCountryName] = useState("")
    const navigator = useNavigate()
    useEffect(() => {
        const fetchCountryCords = async () => {
            try{
                setZoom(3)
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=${countryName}&key=${key}`
                )

                const data = await response.json()
                const { lat, lng } = data.results[0].geometry.location;
                setCenter({lat, lng})
                setZoom(6)
            }catch(err){
                if(err){
                    console.log(err)
                }
            }
        }
        fetchCountryCords()
    }, [countryName])
    return (
        <div className='w-screen h-screen flex flex-col bg-zinc-800'>
            <div className='flex items-center gap-4 px-8'>
                <button onClick={() => navigator("/")} className='text-zinc-200 bg-zinc-700 p-4 rounded-lg hover:bg-zinc-900 transition-all hover:text-zinc-50'>Go Back</button>
                <AutoCompleteInput value={countryName} onChange={(e) => {
                    setCountryName(e.target.value)
                }} data={data}/>
            </div>
        <LoadScript googleMapsApiKey={`${key}`}>
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={center}
                zoom={zoom}>
          </GoogleMap>
        </LoadScript>
        </div>
        
      );
};

export default Maps;