import React from 'react'
import axios from 'axios';

export default class EmailForm extends React.Component {

    //Contructors for
    constructor(props) {
        super(props);
        this.state = { email='' }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
    };

    changeEmailHandler(event) {
        this.setState({ email: event.target.value });
    }

    submitHandler = event => {
        event.preventDefault();
        alert(`Congrats! ` + this.state.usrname + ` your have now been logged to our 20% discount list. We will be in contact shortly`);
        const email = this.state.email;

        let data = JSON.stringify({
            email
        });

        axios.post('https://creatorscorner.herokuapp.com/api/add', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(email);
            })
    }

    render() {
        return (
            <div>
                <form id="reg-form-landing">
                    <div id="input-wrapper">
                        <input id="input-landing"
                            type="text"
                            placeholder="Register your email early for exclusive discounts"
                            value={this.state.email}
                            name="email"
                            onChange={this.changeEmailHandler}
                        />
                        <button id="submit-landing" type="submit"> Submit </button>
                    </div>

                </form>
            </div>
        )
    }

};
