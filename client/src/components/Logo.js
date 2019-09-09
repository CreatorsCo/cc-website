import React from 'react'

import testerlogo from '../assets/newlogotester.png';

export default class Logo extends React.Component {
    render() {
        return (

                <div className="safari_only">
                    <img src = {testerlogo} alt="web desgin logo" id="logo-wrapper"/>
                </div>

        )
    }
};


// <div className="safari_only" id="logo-wrapper">
                    
// <ReactSVG id="NBLogo-mob" src={NBLogo} alt="logo" />
// <ReactSVG id="logoBorder-mob" src={LogoBorder} alt="logo border" />
// </div>