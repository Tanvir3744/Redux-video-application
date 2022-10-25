import React from 'react';
import SearchImg from '../../assets/search.svg'
const Search = () => {
    return (
        <div className='flex align-middle'>
            <form >
                <input
                    classNanme="outline-none border-none  p-8"
                    type="search"
                    name="search"
                    placeholder="Search"
                />
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