import React from 'react'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'
const HomeCard = ({ video }) => {
    const fixedDate = moment(video?.snippet.publishedAt).startOf('day').fromNow()
    return (
        <Link to={`video/${video?.id.videoId}`}>
            <div className='w-[300px] m-3 cursor-pointer hover:bg-gray-50 transition'>
                <img src={video?.snippet.thumbnails.medium.url} alt="" className='rounded-lg' />
                <div className='font-bold mt-1'>{video?.snippet.title}</div>
                <div className='text-sm'>{video?.snippet.channelTitle}</div>
                <div className='text-xs tracking-wide'>
                    <span>500K </span>
                    <span>- {fixedDate}</span>
                </div>
            </div>
        </Link>
    )
}

export default HomeCard