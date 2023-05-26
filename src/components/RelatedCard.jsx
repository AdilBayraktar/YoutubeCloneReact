import moment from 'moment'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const RelatedCard = ({ video }) => {


    return (
        <Link relative='path' reloadDocument='true' to={`/video/${video?.id?.videoId}`}>
            <div className='flex my-1 hover:bg-gray-50 transition w-full cursor-pointer space-x-2'>
                <img className='rounded-2xl' src={video?.snippet?.thumbnails?.default?.url} alt="" />
                <div>
                    <p className='font-bold text-sm'>{video?.snippet?.title}</p>
                    <p className='text-xs'>{video?.snippet?.channelTitle}</p>
                    <p className='text-xs'>{moment(video?.snippet?.publishedAt).startOf('day').fromNow()}</p>

                </div>
            </div>
        </Link>
    )
}

export default RelatedCard