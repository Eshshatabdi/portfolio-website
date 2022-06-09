import React from 'react';
import NabBar from '../../Shared/NabBar';

import Header from '../Header';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <NabBar></NabBar>
            <Header></Header>
            <Projects></Projects>

        </div>
    );
};

export default Home;