import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Player from '../component/Player/Player';
import VidoeDescription from '../component/VideoDescription/VidoeDescription';
import RelatedSingleVideo from '../component/VideoList/RelatedSingleVideo';
import { getVideo } from '../features/video/videoApi';

const Videos = () => {
    const dispatch = useDispatch()
    const { videoId } = useParams();
    useEffect(() => {
        dispatch(getVideo(videoId))
    }, [dispatch])
    

    return (
        <div>
           
            <section class="pt-6 pb-20">
                <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    <div class="grid grid-cols-3 gap-2 lg:gap-8">
                        <div class="col-span-full w-full space-y-8 lg:col-span-2">
                            <Player />
                            <VidoeDescription />
                        </div>

                        <RelatedSingleVideo />
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Videos;