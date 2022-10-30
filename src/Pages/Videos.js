import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Player from '../component/Player/Player';
import VidoeDescription from '../component/VideoDescription/VidoeDescription';
import { fetchVideo } from '../features/video/video_slice';
import Loading from '../component/Loading/Loading';
import RelatedVideo from '../component/VideoList/RelatedVideo';
const Videos = () => {
    const {loading, isError, video, error } = useSelector(state => state.video)
    const { id, link, title , tags} = video|| {};
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
        content = <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
            <div className="grid grid-cols-3 gap-2 lg:gap-8">
                <div className="col-span-full w-full space-y-8 lg:col-span-2">
                    <Player link={link} title={title} />
                    <VidoeDescription video={video} />
                </div>
                <RelatedVideo currentId={id} tags={tags} />
            </div>
        </div>
    }

    return (
        <div>
            <section className="pt-6 pb-20">
                {/* <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    <div className="grid grid-cols-3 gap-2 lg:gap-8">
                        <div className="col-span-full w-full space-y-8 lg:col-span-2">
                            <Player link={link} title={title} />
                            <VidoeDescription video={video} />
                        </div>
                        <RelatedVideo />
                    </div>
                </div> */}
                {content}
            </section>

        </div>
    );
};

export default Videos;