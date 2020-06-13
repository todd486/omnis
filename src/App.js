import React from 'react';
import { Switch, Route, Link, Redirect, BrowserRouter, useParams, useRouteMatch } from 'react-router-dom';
import './css/App.css';

import Frontpage 	from './components/Frontpage'	;
import Forum 		from './components/Forum'		;
import News 		from './components/News'		;
import Nav 			from './components/Nav'			;
import NotFound 	from './components/NotFound'	;

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
		this.changeTheme = this.changeTheme.bind(this);
		this.state = {
			user: null,
			theme: "darkMode",
		};
	}
	componentDidMount() {
		//TODO: fancy sql stuff here
		this.setState({
			user: {
				UUID: "0d497d95-8ab4-48b9-a26f-a75de72b6e0b",
				name: "whii",
				imgURI: "https://picsum.photos/500/300",
			}
		});
	}
	logout() {
		this.setState({ user: null });
	}
	changeTheme() {
		this.setState({ theme: this.state.theme !== "darkMode" ? "darkMode" : "lightMode" });
	}
	render() {
		return (
			<BrowserRouter>
				<div className={`App ${this.state.theme}`}>
					<Nav
						userdata={this.state.user !== null ? {
							UUID: this.state.user.UUID,
							name: this.state.user.name
						} : null}
						logout={this.logout} //logout callback
						changeTheme={this.changeTheme}
					/>
					<Switch>
						<Route exact path="/" component={Frontpage} />
						<Route path="/forum" component={Forum} />
						<Route path="/news" component={News} />
						<Route path="/about" component={About} />
						<Route path="/users::userID" component={Userpage} />
						<Route path="/register" component={Register} />
						<Route path="/login" 		><Login user={this.state.user} /></Route>
						<Route path="/dashboard" 	><Dashboard user={this.state.user} /></Route>
						<Route path="/history" 		><History user={this.state.user} /></Route>
						<Route component={NotFound} /> {/* 404 */}
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

class Expando extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		}
	}
	render() {
		return (
			<div className="expando">
				<div className="expandoTitle" onClick={() => { this.setState({ show: !this.state.show }); }}>
					<span>{this.props.title}</span><i className={`icon-medium fas fa-chevron-${this.state.show ? "down" : "right"}`} />
				</div>
				{this.state.show ? <div className="expandoContainer">{this.props.component}</div> : false}
			</div>
		);
	}
}
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
class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recentActivity: [
				//get most 4 most recent posts
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
						<section>
							<h3>Account</h3>
							<Expando
								title="Change username"
								component={
									<div>
										<h3>New username</h3>
										<input value={this.props.user.name} /> {/* no onChange implementation error */}
										<button>Apply</button>
									</div>
								}
							/>
							<Expando
								title="Change email adress"
								component={
									<div>
										<h3>New email adress</h3>
										<input type="email" />
										<button>Send verification email</button>
									</div>
								}
							/>
							<Expando
								title="Change password"
								component={
									<div>
										<h3>Old password</h3>
										<input type="password" />
										<h3>New password</h3>
										<input type="password" />
										<button>Apply</button>
									</div>
								}
							/>
							<Expando
								title="Delete my account"
								component={
									<div>
										todo
									</div>
								}
							/>
						</section>
					</div>
				</main>
				: <Redirect to="/login" /> //If not logged in, redirect to login page.
		);
	}
}
class History extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			this.props.user !== null ?
				<main>
					<h1>Your post history</h1>
				</main>
				: <Redirect to="/login" />
		);
	}
}

function Userpage() {
	let { userID } = useParams();
	return (
		<main>
			<h2>{userID}</h2>
			TODO: flesh this page out
		</main>
	);
}


function About() {
	return (
		<main>
			<h1>About</h1>
			<span>Quis irure irure et nisi ut exercitation cupidatat id velit fugiat elit. Est et commodo eiusmod dolore sunt sunt officia mollit reprehenderit aute magna mollit. Ad Lorem labore duis officia dolor proident sit cillum ut labore anim. Anim eiusmod laboris dolor proident dolore duis deserunt excepteur pariatur aute. Velit commodo eiusmod ex proident nulla cupidatat adipisicing eu aute laboris consectetur exercitation. Ea minim duis ipsum ea sint. Deserunt duis cillum Lorem aliquip.</span>
			<span>Deserunt aliqua Lorem sint do in ad aliqua ex in qui consequat. Dolor eiusmod deserunt occaecat esse officia aute sint ut et. Officia tempor incididunt commodo proident irure id aliqua ullamco duis do nulla occaecat qui. Cillum deserunt tempor quis duis ad dolore dolor occaecat veniam. Laboris nostrud laborum et anim pariatur laborum ex. Nostrud sunt duis labore ea culpa dolore irure et culpa cillum consectetur. Do veniam laborum velit laboris eu sunt.</span>
		</main>
	);
}

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<h3>Social Media</h3>
				{/* Links to social media here */}
				<ul id="socialMediaLinks">
					<li>Lorem</li>
					<li>Ipsum</li>
				</ul>
				<div>Website design by Isabelle Svahn 2020</div>
			</footer>
		);
	}
}