import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const fetchUrl = async () => {
        const response = await fetch(url)
        const users = await response.json()
        setData(users)
        setLoading(false)
    }

    useEffect(() => {
        fetchUrl()
    }, [url])

    return { loading, data }
}
