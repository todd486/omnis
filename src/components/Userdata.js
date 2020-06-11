import React from 'react';
import { Redirect } from 'react-router-dom';

// class DataManager extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             inputs: this.props.inputs,
//             title: this.props.title
//         };
//     }
//     render() {
//         return (
//             <main>

//             </main>
//         );
//     }
// }

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordRepeat: "",
        };
    }
    render() {
        return (
            <main>
                <h1>Register</h1>
                <form>
                    <div className="inputContainer">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className="inputContainer">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <div className="inputContainer">
                        <label>Repeat Password</label>
                        <input type="password" />
                    </div>

                    <button type="submit" onClick={() => {

                    }}>Register</button>
                </form>
            </main>
        );
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    render() {
        return (
            this.props.user === null ?
                <main>
                    <h1>Login</h1>
                    <form>
                        <div className="inputContainer">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className="inputContainer">
                            <label>Password</label>
                            <input type="password" />
                        </div>

                        <button type="submit" onClick={() => {

                        }}>Log In</button>
                    </form>
                </main>
                : <Redirect to="/dashboard" /> //if logged in already, just redirect to their dashboard
        );
    }
}

export { Login, Register };