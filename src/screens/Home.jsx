import React, { useEffect, useState } from 'react'
import HomeCard from '../components/HomeCard'
import FilterLayout from '../components/FilterLayout'
import { useDispatch, useSelector } from 'react-redux'
import homeAction from '../redux/actions/HomeData'

const Home = () => {
    const dispatch = useDispatch()
    const { getVideos } = useSelector(state => state.getVideos)
    const [filter, setFilter] = useState('')
    useEffect(() => {
        dispatch(homeAction(filter))
    }, [dispatch, filter])
    // console.log(getVideos)
    return (
        <div className='m-3'>
            <FilterLayout setFilter={setFilter} className="my-5" />
            <div className='flex flex-wrap justify-center'>
                {
                    getVideos?.items?.map((video, i) => (
                        <HomeCard key={i} video={video} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home