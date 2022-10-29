import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagSelected, tagRemoved } from '../../features/filter/filterSlice'
const Tag = (props) => {
    const dispatch = useDispatch();
    const { tags: selectedTags } = useSelector(state => state.filter)
    const isSelected = selectedTags.includes(props.singleTag.title)  //target the tags which we want to make selected;
    console.log(tags)

    //dynamic class to visulize the effect when we select tags with colors
    const style = isSelected ?
        "bg-blue-600 text-blue-600 px-3 py-1 rounded-full cursor-pointer text-slate-100"
        : "bg-blue-100 text-blue-600 px-3 py-1 rounded-full cursor-pointer";


    
    //select or remove tag functionality
    const handleSelect = () => {
        if (isSelected) {
            dispatch(tagRemoved(props.singleTag.title))
            console.log('removed')
        } else {
            dispatch(tagSelected(props.singleTag.title))
            console.log('selected')
        }
    }
    return (
        <div class={style} onClick={handleSelect}>
            {props.singleTag.title}
        </div>
    );
};

export default Tag;