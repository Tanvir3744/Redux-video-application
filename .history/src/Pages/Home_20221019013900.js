import React from 'react';
import Header from '../component/Header/Header';
import Tags from '../component/Tags/Tags';
import VideoGrid from '../component/VidoeGrid/VideoGrid';

const Home = () => {
    return (
        <div>
            <Header />
            <Tags />
            <VideoGrid/>
        </div>
    );
};

export default Home;