import React from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recentActivity: [
                { title: "thread title", short_data: "Velit sit ipsum voluptate voluptate anim commodo dolore ut." },
                { title: "thread 2", short_data: "Ad reprehenderit ad occaecat fugiat adipisicing anim elit amet irure eu velit duis laboris." },
            ]
        };
    }
    render() {
        return (
            this.props.user !== null ?
                //Logged in
                <main id="dashboard">
                    <h1>{`Welcome to your dashboard, ${this.props.user.name}!`}</h1>
                    <div id="dashboardAtAGlance">
                        <section id="dashboardUser">
                            <img src={this.props.user.imgURI} alt="Profile pic" id="dashboardProfilePic" />
                            <div id="dashboardUserInfo">
                                <h3>{this.props.user.name}</h3>
                                <i>{this.props.user.UUID}</i> {/* dont actually display this, duh */}
                                <div>Member since: date</div>
                                <div>Posts: 12</div>
                            </div>
                        </section>
                        <section id="dashboardActivity">
                            <h3>Recent Activity:</h3>
                            <div id="dashboardRecentContainer">
                                {this.state.recentActivity.map((data, index) => (
                                    <div key={index} className="dashboardRecentPreview"> {/* TODO: make link */}
                                        <div>
                                            <b>{data.title}</b>
                                            <i className="icon-medium fas fa-arrow-right" />
                                            <i>{data.short_data}</i>
                                        </div>
                                        <div>Posted on: date</div>
                                    </div>
                                ))}
                            </div>
                            <Link to="/history">See complete history...</Link>
                        </section>
                    </div>
                    <div id="dashboardSettings">
                        <h2>Settings</h2>
                        <section>
                            <h3>Theme</h3>
                            <div>TODO: let user input colours for own themes</div>
                        </section>
                    </div>
                </main>
                : <Redirect to="/login" /> //If not logged in, redirect to login page.
        );
    }
}