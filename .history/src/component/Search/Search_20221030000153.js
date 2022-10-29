import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchImg from '../../assets/search.svg'
const Search = () => {
    const {search} = useSelector(state => state.filter)
    const [input, setInput] = useState(search)
    return (
        <div className='flex align-middle'>
            <form className='active:border-none' >
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