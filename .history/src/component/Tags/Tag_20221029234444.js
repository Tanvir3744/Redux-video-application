import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagSelected, tagRemoved} from '../../features/filter/filterSlice'
const Tag = (props) => {
    const dispatch = useDispatch();
    const { tags: selectedTags } = useSelector(state => state.filter)
    const isSelected = selectedTags.includes(props.singleTag.title)
    const handleSelect = () => {
        if (isSelected) {
            dispatch(tagRemoved(props.singleTag.title))
        } else {
            dispatch(tagSelected(props.singleTag.title))
        }
    }
    return (
        <div class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full cursor-pointer" onClick={handleSelect}>
            {props.singleTag.title}
        </div>
    );
};

export default Tag;