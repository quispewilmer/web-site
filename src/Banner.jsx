import React from 'react';

const Banner = ({image, title}) => {
    return (
        <div className="main-banner">
            <img src={image} alt={title} className="main-banner__image"/>
            <h1 className="main-banner__title">{title}</h1>
        </div>
    );
}

export default Banner;