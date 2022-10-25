import React from 'react';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import Pagination from '../component/Pagination/Pagination';
import Tags from '../component/Tags/Tags';
import VideoGrid from '../component/VidoeGrid/VideoGrid';

const Home = () => {
    return (
        <div>
            <Header />
            <Tags />
            <VideoGrid />
            <Pagination />
            <Footer />
        </div>
    );
};

export default Home;