import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchImg from '../../assets/search.svg'
import {searched} from '../../features/filter/filterSlice'
const Search = () => {
    const {search} = useSelector(state => state.filter)
    const [input, setInput] = useState(search)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searched(input))

        setInput('')
    }
    return (
        <div className='flex align-middle'>
            <form className='active:border-none' onSubmit={handleSubmit} >
                <input type="text" onChange={(e) => setInput(e.target.value)} placeholder='Search' className='border-none outline-none text-base font-sans text-slate-500'/>
            </form>
            <img
                classNanme="inline h-4 cursor-pointer"
                src={SearchImg}
                alt="Search"
            />
        </div>
    );
};

export default Search;