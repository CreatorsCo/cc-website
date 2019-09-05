import React from 'react'


import DeskNav from '../navigation/DeskNav';
import MobNav from '../navigation/MobNav';
import Logo from '../components/Logo';
import PromotionalHeader from './Promotions.js';
import EmailForm from './EmailForm.js';
import Socials from '../components/Socials.js';

export default class HoldingPage extends React.Component {
    render() {
        return (
            <div id="holdingpage-wrapper">

                <header>
                    <MobNav />
                </header>


                <div id="landing-container">
                <DeskNav />
                    <Logo />

                    <div id="sub-sec-wrapper">
                        <PromotionalHeader />
                        <EmailForm />
                    </div>

                    <div id="landing-footer">
                        <Socials />
                    </div>
                </div>


            </div >
        )
    }
};
