import React from 'react';
import LikeImg from '../../assets/like.svg';
import UnLikeImg from '../../assets/unlike.svg'
const LIke = ({likes, unlikes}) => {
    return (
        <div>
            <div class="flex gap-10 w-48">
                <div class="flex gap-1">
                    <div class="shrink-0">
                        <img
                            class="w-5 block"
                            src={LikeImg}
                            alt="Like"
                        />
                    </div>
                    <div
                        class="text-sm leading-[1.7142857] text-slate-600"
                    >
                        {likes}
                    </div>
                </div>
                <div class="flex gap-1">
                    <div class="shrink-0">
                        <img
                            class="w-5 block"
                            src={UnLikeImg}
                            alt="Unlike"
                        />
                    </div>
                    <div
                        class="text-sm leading-[1.7142857] text-slate-600"
                    >
                        {unlikes}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LIke;