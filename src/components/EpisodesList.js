import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodesCard from './EpisodesCard';


export default function EpisodesList() {

    const [episodesList, setEpisodesList] = useState([]);
    
    useEffect(()=>{
        const getEpisodes = () => {
            axios.get('https://rickandmortyapi.com/api/episode/')
            .then(res=>{
                console.log(res.data.results)
                setEpisodesList(res.data.results);
            })
            .catch(err=>console.log(err))
        }
        getEpisodes()
    }, [])
    
    return (
        <div>
            {episodesList.map(episode=>(
                <EpisodesCard key={episode.id} episode={episode}/>
            ))}
        </div>
    )
};
