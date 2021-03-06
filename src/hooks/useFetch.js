import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            setIsPending(true)
            try {
                const res = await fetch(url, { signal: controller.signal })
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const json = await res.json()
                setIsPending(false)
                setData(json)
                setError(null)

            } catch (err) {
                if (err.name === "Abort Error") {
                    console.log('the fetch was aborted')
                } else {
                    setIsPending(false)
                    setError("Could not fetch the data")
                }
            }
        }
        fetchData()
        return () => {
            controller.abort()
        }
        return { data, isPending, error }
    }, [url])
}


// if you pass the async function inside the useEffect that is why you do not
// have to make it a dependancy in the dependacy array. 
// *** at 5 min 

//you cannot make the useEffect a async funtion but you can make a asnyc funtion
// inside the useEffect which is above. 
// passing in the url in as a dependacy will allow when the url changes the useEffect will re run
