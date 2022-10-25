import React from 'react';

const Header = () => {
    return (
        <div>
            <nav classNanme="bg-slate-100 shadow-md">
                <div
                    classNanme="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
                >
                    <a href="/">
                        <img
                            classNanme="h-10"
                            src="./assets/lws.svg"
                            alt="Learn with Sumit"
                        />
                    </a>
                    <div
                        classNanme="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                    >
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
                </div>
            </nav>
        </div>
    );
};

export default Header;