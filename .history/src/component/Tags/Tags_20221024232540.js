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

    return (
        <div>
            <Tag />
        </div>
    );
};

export default Tags;