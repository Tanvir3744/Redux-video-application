import React from 'react';
import { useSelector } from 'react-redux';
import Tag from './Tag.js'
const Tags = () => {
    const tags = useSelector(state => state.tags)
    console.log(tags);
    return (
        <div>
            <Tag />
        </div>
    );
};

export default Tags;