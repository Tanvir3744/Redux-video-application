import React from 'react';
import LikeImg from '../../assets/like.svg';
import UnLikeImg from '../../assets/unlike.svg'
const LIke = ({likes, unlikes}) => {
    return (
        <div>
            <div className="flex gap-10 w-48">
                <div className="flex gap-1">
                    <div className="shrink-0">
                        <img
                            className="w-5 block"
                            src={LikeImg}
                            alt="Like"
                        />
                    </div>
                    <div
                        className="text-sm leading-[1.7142857] text-slate-600"
                    >
                        {likes}
                    </div>
                </div>
                <div className="flex gap-1">
                    <div className="shrink-0">
                        <img
                            className="w-5 block"
                            src={UnLikeImg}
                            alt="Unlike"
                        />
                    </div>
                    <div
                        className="text-sm leading-[1.7142857] text-slate-600"
                    >
                        {unlikes}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LIke;