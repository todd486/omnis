import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Nav.css';

export default class Nav extends React.Component {
	componentDidMount() {
		//load data 'n stuff
	}
	render() {
		return (
			<nav>
				<div id="logoContainer">
					<Link to="/"><img src="" alt="Omnis small logo" /></Link>
				</div>
				<div id="linkContainer">
					<Link to="/forum"	>Forums</Link>
					<Link to="/news"	>News</Link>
					<Link to="/about"	>About us</Link>
					{this.props.userdata !== null ?
						<span>
							<Link to="/dashboard">
								<i className="icon fas fa-user" />
								<span>Welcome <i>{`${this.props.userdata.name}`}</i>!</span>
							</Link>
							<Link to="/" id="logout" className="noselect" onClick={() => {
								this.props.logout();
							}}>Log Out</Link>
						</span> :
						<span>
							<i className="icon far fa-user" />
							<Link to="/register">Register</Link>
							<Link to="/login">Log In</Link>
						</span>
					}
				</div>
			</nav>
		);
	}
}