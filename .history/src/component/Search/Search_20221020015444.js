import React from 'react';
import SearchImg from '../../assets/search.svg'
const Search = () => {
    return (
        <div className='flex align-middle'>
            <form className='active:border-none' >
                <input type="text" placeholder='Search' className='border-none'/>
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