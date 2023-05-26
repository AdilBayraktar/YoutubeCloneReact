import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import detailsAction from '../redux/actions/VideoDetails'
import ReactPlayer from 'react-player'
import icons from '../assets/icons'
import moment from 'moment'
import relatedVideosAction from '../redux/actions/RelatedVideosData'
import RelatedCard from '../components/RelatedCard'

const Details = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { getVideo } = useSelector(state => state.getVideo)
    const { getRelatedVideos } = useSelector(state => state.getRelatedVideos)

    useEffect(() => {
        dispatch(detailsAction(id))
        dispatch(relatedVideosAction(id))

    }, [dispatch])
    // console.log(getVideo)
    // console.log(getRelatedVideos)

    return (
        <div className='m-5 flex justify-between'>
            <div className='max-w-[70%]'>
                {
                    getVideo?.items?.map((video, i) => (
                        <div key={i} className=''>
                            <ReactPlayer controls={true} url={`https://www.youtube.com/watch?v=${video?.id}`} />
                            <div className='font-bold text-2xl my-2'>{video?.snippet?.title}</div>
                            <div className='flex space-x-10'>
                                <span className='bg-gray-100 px-2 py-1 rounded-xl font-semibold'>{video?.snippet?.channelTitle}</span>
                                <div className='flex items-center space-x-1 bg-gray-100 rounded-xl px-2 py-1'>
                                    <span>{video?.statistics?.likeCount}</span>
                                    <icons.like className='icon' />
                                </div>
                            </div>
                            <div className='bg-gray-100 rounded-xl p-3 my-3'>
                                <div className="flex space-x-3 my-1">
                                    <span className='text-sm text-gray-600 bg-gray-200 p-1 rounded-xl'>{moment(video?.snippet?.publishedAt).format('D-MM-YYYY')}</span>
                                    <span className='text-sm text-gray-600 bg-gray-200 p-1 rounded-xl'>{video?.statistics?.viewCount} Views</span>
                                </div>
                                <p className='text-sm'>{video?.snippet?.description}</p>
                                {
                                    video?.snippet?.tags?.map((item, i) => (
                                        <span key={i} className='text-blue-600 mr-3 rounded-xl text-sm cursor-pointer'>#{item}</span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div >
            <div className='max-w-[30%] max-h-[100vh] m-3 border-l-2 p-3 overflow-y-scroll'>

                {
                    getRelatedVideos?.items?.map((video, i) => (
                        <RelatedCard key={i} video={video} />
                    ))
                }


            </div>
        </div >
    )
}

export default Details