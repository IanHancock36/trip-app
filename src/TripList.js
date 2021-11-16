import React, { useState, useEffect} from 'react'
import './TripList.css'
export default function TripList() {
    const [trips, setTrips] = useState([])
    const [url , setUrl] =useState("http://localhost:3000/trips")
    console.log(trips)
  useEffect(()=> {
    fetch(url)
    .then(response => response.json())
    .then(json => setTrips(json))
}, [url])
    return (
        <div className='trip-list'>
            <h2>Trips</h2>
            <ul className='trip-list ul'>
                {trips.map(trip =>(
                   <li className=" trip-list li"key={trip.id}>
                       <h3>{trip.title}</h3>
                       <p>{trip.price}</p>
                   </li> 
                ))}
            </ul>
            <div>
                <button onClick={()=> setUrl("http://localhost:3000/trips?loc=us")}>
                    Us Trip
                </button>
                <button>
                 All Trips 
                </button>
            </div>
        </div>
    )
}
