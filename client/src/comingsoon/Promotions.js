import React from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom'


export default class PromotionalHeader extends React.Component {
    render() {
        return (
            <div>
                <Fade top delay={6000} duration={5000}>
                    <h4 className="safari_only" id="comingSoon"> Coming Soon </h4>
                </Fade>

                <div id="slogan">
                    <Fade bottom delay={200} duration={3500}>
                        <h5 id="landing-info"> From Websites & Logos, to Branding & Videos </h5>
                    </Fade>

                    <Fade bottom delay={3000} duration={4000}>
                        <h6 id="landing-brief"> Creating what you need, built to your brief </h6>
                    </Fade>
                </div>
            </div>
        )
    }
};
