import {useState,useEffect} from 'react' 

export const useFetch = (url)=> {
 const [data,setData] =useState(null)
 useEffect(()=> {
     const fetchData = async ()=> {
         const res = await fetch(url)
        const json = await res.json()
        setData(json)
     }
     fetchData()
     return{data}
 },[url])
}


// if you pass the async function inside the useEffect that is why you do not
// have to make it a dependancy in the dependacy array. 
// *** at 5 min 

//you cannot make the useEffect a async funtion but you can make a asnyc funtion
// inside the useEffect which is above. 
// passing in the url in as a dependacy will allow when the url changes the useEffect will re run
