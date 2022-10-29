import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RelatedSingleVideo from './RelatedSingleVideo';

const RelatedVideo = ({ currentId, tags }) => {
    const {relatedVideos, loading, isError, error} = useSelector(state => state.relatedVideos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({tags, id: currentId})
    },[dispatch, tags, currentId])
    return (
        <div>
            <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">                      
                       <RelatedSingleVideo />
                    </div>
        </div>
    );
};

export default RelatedVideo;