import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class DeskNav extends React.Component {
    render() {
        return (
            <div className="hide-mob show-desk nav-wrapper safari_only ">
                <ul className="navbar">
                    <AnchorLink className="anch-link" href="#">  Home  </AnchorLink>
                    <AnchorLink className="anch-link" href="#">  Services  </AnchorLink>
                    <AnchorLink className="anch-link" href="#">  Team  </AnchorLink>
                    <AnchorLink className="anch-link" href="#">  About  </AnchorLink>
                    <AnchorLink className="anch-link" href="#">  HireUs  </AnchorLink>
                </ul>

            </div>
        )
    }
};
