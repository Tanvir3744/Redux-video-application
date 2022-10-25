import React from 'react';
import Search from '../../assets/search.svg'
const Search = () => {
    return (
        <div>
            <form>
                <input
                    classNanme="outline-none border-none mr-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                />
            </form>
            <img
                classNanme="inline h-4 cursor-pointer"
                src={Search}
                alt="Search"
            />
        </div>
    );
};

export default Search;