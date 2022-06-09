import React from 'react';
import NabBar from '../../Shared/NabBar';

import Header from '../Header';
import Projects from '../Projects/Projects';
import Contact from './Contact';


const Home = () => {
    return (
        <div>
            <NabBar></NabBar>
            <Header></Header>
            <Projects></Projects>
            <Contact></Contact>

        </div>
    );
};

export default Home;