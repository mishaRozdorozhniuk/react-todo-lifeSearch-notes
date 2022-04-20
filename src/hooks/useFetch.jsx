import React, {useEffect, useCallback} from 'react'
import axios from 'axios'

export const useFetch = (setData, PostURL) => {
    const fetchData = useCallback(async () => {
        const posts = await axios(PostURL);
        setData(posts.data)
    }, [])

    useEffect(() => {
        fetchData()
    }, [])

    return fetchData
}