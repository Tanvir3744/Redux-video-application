import React from 'react';

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
                            src="./assets/search.svg"
                            alt="Search"
                        />
        </div>
    );
};

export default Search;