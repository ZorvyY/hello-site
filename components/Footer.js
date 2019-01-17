import React from 'react';
import Social from './Social';

const Footer = () => (
    <div>
        <Social />
        {/* <span>
            I'm here to blow your mind.
        </span> */}
        <style jsx="true">{`
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            padding: 1rem;
            border-top: 1px solid #000;
            text-align: center;
        `}</style>
    </div>
);

export default Footer;