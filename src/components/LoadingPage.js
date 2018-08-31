import React from 'react';
import LoadingGif from '../assets/images/loader.gif';

const LoadingPage = () => (
    <div className="loader">
        <img className="loader__image" src={LoadingGif} />
    </div>
);

export default LoadingPage;