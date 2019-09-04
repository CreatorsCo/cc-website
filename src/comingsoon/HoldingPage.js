import React from 'react'


import DeskNav from '../navigation/DeskNav';
import MobNav from '../navigation/MobNav';
import Logo from '../components/Logo';
import PromotionalHeader from '../comingsoon/Promotions.js';
import EmailForm from '../comingsoon/EmailForm.js';
import Socials from '../components/Socials.js';

export default class HoldingPage extends React.Component {
    render() {
        return (
            <div id="holdingpage-wrapper">

                    <header>
                    <DeskNav />
                    <MobNav />
                    </header>


                <div id="landing-container">
                    <Logo />
                    <PromotionalHeader />
                    <EmailForm />
                    <div id="landing-footer">
                        <Socials/>
                    </div>
                </div>


            </div>
        )
    }
};
