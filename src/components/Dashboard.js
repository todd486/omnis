import React from 'react';
import { Redirect } from 'react-router-dom';

import '../css/Dashboard.css';

export default class Dashboard extends React.Component {
    render() {
        return (
            this.props.user !== null ?
                //Logged in
                <main id="dashboard">
                    <h1>{`Welcome to your dashboard, ${this.props.user.name}!`}</h1>
                    <div id="dashboardAtAGlance">
                        <div id="dashboardUserInfo">
                            <img src={this.props.user.imgURI} alt="Profile pic" id="dashboardProfilePic"/>
                            <span>UUID: {this.props.user.UUID}</span> {/* dont actually display this, duh */}
                            <span>Username: {this.props.user.name}</span>
                        </div>
                        <div id="dashboardActivity">
                            <h2>Recent Activity:</h2>
                            blahblah blah
                        </div>
                    </div>
                </main>
                : <Redirect to="/login" /> //If not logged in, redirect to login page.
        );
    }
}