import React, { useState, useEffect ,useCallback} from 'react'
import './TripList.css'
import { useFetch } from './hooks/useFetch'
export default function TripList() {
    const [url , setUrl] =useState("http://localhost:3000/trips")
    const {data :trips} =useFetch(url)
    // directly above you can call the data something else long as you specify
    return (
        <div className='trip-list'>
            <h2>Trips</h2>
            <ul className='trip-list ul'>
                {data.map(trip =>(
                   <li className=" trip-list li"key={trip.id}>
                       <h3>{trip.title}</h3>
                       <p>{trip.price}</p>
                   </li> 
                ))}
            </ul>
            <div>
                <button onClick={()=> setUrl('http://localhost:3000/trips?loc=us')}>
                    Us Trip
                </button>
                <button onClick={()=> setUrl("http://localhost:3000/trips")}>
                 All Trips 
                </button>
            </div>
        </div>
    )
}
