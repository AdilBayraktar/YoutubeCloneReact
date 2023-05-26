import React, { useEffect } from 'react'
import SearchCard from '../components/SearchCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import homeAction from '../redux/actions/HomeData'

const Search = () => {
    const { searchInput } = useParams()
    const { getVideos } = useSelector(state => state.getVideos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(homeAction(searchInput))

    }, [dispatch, searchInput])
    console.log(getVideos)

    return (
        <div>
            {
                getVideos?.items?.map((video, i) => (
                    <SearchCard key={i} video={video} />
                ))
            }
        </div>
    )
}

export default Search