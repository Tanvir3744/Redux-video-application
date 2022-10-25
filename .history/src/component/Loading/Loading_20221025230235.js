import React from 'react';

const Loading = () => {
    return (
        <div className='mx-auto relative w-full'>
            <progress className="progress w-56 absolute top-2/4 left-2/4"></progress>
        </div>
    );
};

export default Loading;