import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tag from './Tag.js'
const Tags = () => {
    const tags = useSelector(state => state.tags)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch()
    },[])
    console.log(tags);
    return (
        <div>
            <Tag />
        </div>
    );
};

export default Tags;