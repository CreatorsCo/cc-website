import React from 'react';
import ReactSVG from 'react-svg';


export default class SocialIcon extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <ReactSVG src={this.props.ImgURL} alt="social icons facebook"/>
            </div>
        )
    }
};
