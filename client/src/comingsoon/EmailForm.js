import React from 'react'
import axios from 'axios';

export default class EmailForm extends React.Component {

    //Contructors for
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
    };

    changeEmailHandler(event) {
        this.setState({ email: event.target.value });
    }

    sumbitHandler = event => {

        event.preventDefault();

        const email = this.state.email;

        let data = JSON.stringify({
            email
        });

        axios.post(`https://creatorscorner.herokuapp.com/api/add`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(email);
            })

        this.ClearEmail();

    }

    ClearEmail() {
        let emailbox = document.getElementById('input-landing');
        emailbox.value = `Woohoo! you're officially on our 20% off list! `;
        emailbox.style.color = 'green';
    }

    render() {
        return (
            <div>
                <form id="reg-form-landing" onSubmit={this.sumbitHandler}>
                    <div id="input-wrapper">
                        <input id="input-landing"
                            type="text"
                            value={this.state.email}
                            name="email"
                            placeholder="Register your email early for exclusive discounts"
                            onChange={this.changeEmailHandler}
                        />
                        <button id="submit-landing"
                            type="submit"
                            value="submit"> Submit </button>
                    </div>

                </form>
            </div>
        )
    }

};
