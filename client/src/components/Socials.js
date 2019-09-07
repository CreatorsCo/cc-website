import React from 'react';
import ReactSVG from 'react-svg';


import SocialIcon from './SocialIcon';
import fb from '../assets/socials/facebook.svg';
import insta from '../assets/socials/insta.svg';
import twitter from '../assets/socials/twitter.svg';
import linked from '../assets/socials/linked.svg';

export default class Socials extends React.Component {

    constructor(props) {
        super();
        this.state = {}
    }
    render() {
        return (
            <div id="social-wrapper">

                <SocialIcon ImgURL={fb} />
                <a href="https://www.instagram.com/creatorscorner__/"><SocialIcon ImgURL={insta} /></a>
                <a href="https://twitter.com/_creatorscorner"><SocialIcon ImgURL={twitter} /></a>
               <SocialIcon ImgURL={linked} />

            </div>
        )
    }
};
