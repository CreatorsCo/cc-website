import React from 'react';
import ReactSVG from 'react-svg';


import SocialIcon from './SocialIcon';
import fb from '../assets/socials/facebook.svg';
import insta from '../assets/socials/insta.svg';
import twitter from '../assets/socials/twitter.svg';
import linked from '../assets/socials/linked.svg';

export default class Socials extends React.Component {

    constructor(props){
        super();
        this.state = {}
    }
    render() {
        return (
            <div id="social-wrapper">
                <SocialIcon ImgURL={fb}/>
                <SocialIcon ImgURL={insta}/>
                <SocialIcon ImgURL={twitter}/>
                <SocialIcon ImgURL={linked}/>

            </div>
        )
    }
};
