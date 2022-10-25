import React from 'react';
import Pagination from '../component/Pagination/Pagination';
import Tags from '../component/Tags/Tags';
import VideoGrid from '../component/VidoeGrid/VideoGrid';

const Home = () => {
    return (
        <div>
            
            <Tags />
            <VideoGrid />
            <Pagination />
           
        </div>
    );
};

export default Home;