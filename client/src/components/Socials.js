import React from 'react';


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
            <div id="footer-wrapper">
                <div id="social-wrapper">
                    <a href="https://www.facebook.com/creatorscorner__-107173380667529/"><SocialIcon ImgURL={fb} /></a>
                    <a href="https://www.instagram.com/creatorscorner__/"><SocialIcon ImgURL={insta} /></a>
                    <a href="https://twitter.com/_creatorscorner"><SocialIcon ImgURL={twitter} /></a>
                    <a href="https://www.linkedin.com/company/creators-corner-ltd"><SocialIcon ImgURL={linked} /></a>
                </div>

                <h4 id="email-footer"> Let's talk! creatorscornerstudio@gmail.com </h4>

            </div>

        )
    }
};
