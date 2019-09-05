import React from 'react'
import ReactSVG from 'react-svg';

import Fade from 'react-reveal/Fade';


import NBLogo from '../assets/NBLogo-mob.svg';
import LogoBorder from '../assets/LogoBorder-mob.svg';
import logomain from '../assets/DeskLogo.png';

export default class Logo extends React.Component {
    render() {
        return (

                <div className="safari_only">
                    <img src = {logomain} alt="web desgin logo" id="logo-wrapper"/>
                </div>

        )
    }
};


// <div className="safari_only" id="logo-wrapper">
                    
// <ReactSVG id="NBLogo-mob" src={NBLogo} alt="logo" />
// <ReactSVG id="logoBorder-mob" src={LogoBorder} alt="logo border" />
// </div>