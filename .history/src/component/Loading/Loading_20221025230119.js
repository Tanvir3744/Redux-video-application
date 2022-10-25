import React from 'react';

const Loading = () => {
    return (
        <div className='mx-auto relative'>
            <progress className="progress w-56 absolute top-50 left-50"></progress>
        </div>
    );
};

export default Loading;