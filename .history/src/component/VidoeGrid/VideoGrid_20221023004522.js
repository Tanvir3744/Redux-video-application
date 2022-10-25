import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleVideo from './SingleVideo';
import { useEffect } from 'react';
import { fetchVidoesAsync } from '../../features/videos/videosSlice';
import Loading from '../Loading/Loading';

const VideoGrid = () => {
    const { videos, isError, isLoading, error } = useSelector(state => state.videos);
    const dispatch = useDispatch()

    //handle side effect
    useEffect(() => {
       dispatch(fetchVidoesAsync()) 
    }, [dispatch])

    //handle errors
    if (isLoading) {
        let content = <Loading />
    }
    return (
        <div>
            <section className="pt-12">
                <section className="pt-12">
                    <div
                        className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                    >
                        <SingleVideo />
                       {/*  <div className="col-span-12">some error happened</div> */}
                    </div>
                </section>
            </section>
        </div>
    );
};

export default VideoGrid;