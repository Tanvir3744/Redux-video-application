import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center align-center'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default Loading;