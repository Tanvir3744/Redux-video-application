import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSliece';
import Loading from '../Loading/Loading';
import RelatedSingleVideo from './RelatedSingleVideo';

const RelatedVideo = ({ currentId, tags }) => {
    const { relatedVideos, loading, isError, error } = useSelector(state => state.relatedVideos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id: currentId }))
    }, [dispatch, tags, currentId])

    //decide what to render
    let content = null;

    //if the applicatoin facing any server side error and this will happen
    if (loading) {
        content = <Loading />
    }

    if (!loading && isError) {
        content = <div className='col-span-12'>{error}</div>
    }

    if (!loading && !isError && relatedVideos?.length === 0) {
        content = <div className="col-span-12"><strong>No Related Videos Found</strong></div>
    }

    if (!loading && !isError && relatedVideos > 0) {
        content = relatedVideos.map(video => <RelatedSingleVideo key={video.id} video={video} />)
    }


    return (
        <div>
            <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
                {content}
                {relatedVideos.map(video => <RelatedSingleVideo key={video.id} video={video} />)}
            </div>
        </div>
    );
};

export default RelatedVideo;