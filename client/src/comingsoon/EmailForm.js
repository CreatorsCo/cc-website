import React from 'react'

export default class EmailForm extends React.Component {
    render() {
        return (
            <div>
                <form id="reg-form-landing">
                    <div id="input-wrapper">
                        <input id="input-landing" type="text" placeholder="Register your email early for exclusive discounts" />
                        <button id="submit-landing" type="submit"> Submit </button>
                    </div>

                </form>
            </div>
        )
    }

};
