import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Player from '../component/Player/Player';
import VidoeDescription from '../component/VideoDescription/VidoeDescription';
import RelatedSingleVideo from '../component/VideoList/RelatedSingleVideo';
import { fetchVideo } from '../features/video/video_slice';
import Loading from '../component/Loading/Loading';
const Videos = () => {
    const { loading, isError, video, error } = useSelector(state => state.video)
    const { link, title, description } = video;
    console.log(video)
    const dispatch = useDispatch()
    const { videoId } = useParams();
    useEffect(() => {
        dispatch(fetchVideo(videoId))
    }, [dispatch, videoId])

    //decide what to render in the ui
    let content = null;
    if (loading) {
        content = <Loading />
    }

    if (loading && isError) {
        content = <div className="col-span-12"><srong>{error}</srong></div>
    }

    if (!loading && !isError && video?.id) {
        content = <div className="col-span-12"><srong>{error}</srong></div>
    }

    if (!loading && !isError && video?.id) {
        content = <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
            <div class="grid grid-cols-3 gap-2 lg:gap-8">
                <div class="col-span-full w-full space-y-8 lg:col-span-2">
                    <Player link={link} />
                    <VidoeDescription />
                </div>
                <RelatedSingleVideo />
            </div>
        </div>
    }

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