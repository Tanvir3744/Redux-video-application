import React from 'react';
import LIke from '../Like/LIke';

const VidoeDescription = (props) => {
    const {title , date, description , likes, unlikes} = props.video || {};
    return (
        <div>
            <div>
                <h1
                    className="text-lg font-semibold tracking-tight text-slate-800"
                >
                   {title}
                </h1>
                <div
                    className="pb-4 flex items-center space-between border-b"
                >
                    <h2
                        className="text-sm leading-[1.7142857] text-slate-600 w-full"
                    >
                        Uploaded on {date}
                    </h2>

                    <LIke likes={likes} unlikes={unlikes} />
                </div>

                <div
                    className="mt-4 text-sm text-[#334155] dark:text-slate-400"
                >
                    {description}
                </div>
            </div>
        </div>
    );
};

export default VidoeDescription;