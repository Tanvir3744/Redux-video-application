import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../../features/tags/tagsSlice.js';
import Loading from '../Loading/Loading.js';
import Tag from './Tag.js'
const Tags = () => {
    const { isError, error, tags, loading } = useSelector(state => state.tags)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])

    //handling errors if any errors occured for netowrk issue showing them into ui
    let tagContent;
    if (loading) { tagContent = <Loading /> }
    if (!loading && isError) { tagContent = <div className="col-span-12">{error}</div> }
    if (!loading && !isError && tags.length === 0) { tagContent = <div className="col-span-12"><srong>Nothing Is Found For Filtering</srong></div> }
    if (!loading && !isError && tags.length > 0) {
        tagContent = tags.map((singleTag) => <Tag key={singleTag.id} singleTag={singleTag} />)
    }
    return (
        <div class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
            { tagContent }
        </div >
    );
};

export default Tags;