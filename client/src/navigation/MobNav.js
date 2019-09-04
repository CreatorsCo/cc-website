import React from 'react'
import { stack as Menu } from 'react-burger-menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class MobNav extends React.Component {

    render() {
        return (
            <div className="hide-desk">
                <Menu>
                    <AnchorLink id="nav-home" className="menu-item" href="#landing-brief"> Home </AnchorLink>
                    <AnchorLink id="nav-services" className="menu-item" href="#landing-brief"> Services </AnchorLink>
                    <AnchorLink id="nav-team" className="menu-item" href="#landing-brief"> Team  </AnchorLink>
                    <AnchorLink id="nav-about" className="menu-item" href="#landing-brief"> About </AnchorLink>
                    <AnchorLink id="nav-hire" className="menu-item" href="#landing-brief"> Hire Us </AnchorLink>
                </Menu>
            </div>
        )
    }
};
