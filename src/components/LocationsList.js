import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';


export default function LocationsList() {

    const [LocationsList, setLocationsList] = useState([]);
    
    useEffect(()=>{
        const getLocations = () => {
            axios.get('https://rickandmortyapi.com/api/location/')
            .then(res=>{
                const newRes = res.data.results
                console.log(newRes)
                setLocationsList(newRes);
            })
            .catch(err=>console.log(err))
        }
        getLocations ()
    }, [])
    
    return (
        <div>
            {LocationsList.map(location=>(
                <LocationCard key={location.id} location={location}/>
            ))}
        </div>
    )
};
