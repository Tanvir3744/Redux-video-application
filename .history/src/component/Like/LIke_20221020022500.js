import React from 'react';
import LikeImg from '../../assets/like.svg';
import UnLikeImg from '../../assets/unlike.svg'
const LIke = () => {
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
                        100K
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
                        100K
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LIke;