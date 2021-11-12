import './App.css';
import TripList from './TripList';
import React,{useState} from 'react'
const [trips,setTrips] = useState([])

function App() {
  return (
    <div className="App">
 <TripList />
    </div>
  );
}

export default App;
