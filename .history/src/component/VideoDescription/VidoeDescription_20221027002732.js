import React from 'react';
import LIke from '../Like/LIke';

const VidoeDescription = (props) => {
    const {title , date } = props.video.data || {};
    console.log("single video object",props.video.data, date)
    return (
        <div>
            <div>
                <h1
                    class="text-lg font-semibold tracking-tight text-slate-800"
                >
                   {title}
                </h1>
                <div
                    class="pb-4 flex items-center space-between border-b"
                >
                    <h2
                        class="text-sm leading-[1.7142857] text-slate-600 w-full"
                    >
                        Uploaded on 23 Nov 2022
                    </h2>

                    <LIke />
                </div>

                <div
                    class="mt-4 text-sm text-[#334155] dark:text-slate-400"
                >
                    Some video description here
                </div>
            </div>
        </div>
    );
};

export default VidoeDescription;