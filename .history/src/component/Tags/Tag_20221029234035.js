import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Tag = (props) => {
    const dispatch = useDispatch();
    const {tags: selectedTags} = useSelector (state => state.filter)
    return (
        <div class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full cursor-pointer">
            {props.singleTag.title}
        </div>
    );
};

export default Tag;