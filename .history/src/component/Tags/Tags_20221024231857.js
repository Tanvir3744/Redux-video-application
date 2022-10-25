import React from 'react';
import { useSelector } from 'react-redux';
import Tag from './Tag.js'
const Tags = () => {
    const tags = useSelector(state => state)
    return (
        <div>
            <Tag />
        </div>
    );
};

export default Tags;