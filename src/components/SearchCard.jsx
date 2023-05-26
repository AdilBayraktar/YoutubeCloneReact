import React from 'react'
import imgs from '../assets/imgs/imgs'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

const SearchCard = ({ video }) => {
    const navigate = useNavigate()
    const navigateVideo = () => {
        navigate(`/video/${video?.id?.videoId}`)
    }
    return (
        <>
            {
                video?.id?.kind === "youtube#video" &&
                <div onClick={navigateVideo} className='flex space-x-5 m-5 cursor-pointer transition justify-center hover:bg-gray-50 p-5'>
                    <img className='rounded-xl' src={video?.snippet?.thumbnails?.medium?.url} alt="ss" />
                    <div className='w-2/3'>
                        <p className='font-bold text-xl'>{video?.snippet?.title}</p>
                        <p className='text-sm text-gray-500'>{moment(video?.snippet?.publishedAt).startOf('day').fromNow()}</p>
                        <p className='text-sm text-gray-500'>{video?.snippet?.channelTitle}</p>
                        <p className='text-sm text-gray-500'>{(video?.snippet?.description)}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default SearchCard