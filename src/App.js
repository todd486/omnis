import React from 'react';
import { Switch, Route, Link, BrowserRouter, useParams, useRouteMatch, Redirect } from 'react-router-dom';
import './css/App.css';

import Frontpage from './components/Frontpage';
import Forum from './components/Forum';
import News from './components/News';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import NotFound from './components/NotFound';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
		this.state = {
			user: null,
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
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Nav
						userdata={this.state.user !== null ? {
							UUID: this.state.user.UUID,
							name: this.state.user.name
						} : null}
						logout={this.logout} //logout callback
					/>
					<Switch>
						<Route exact path="/" component={Frontpage} />
						<Route path="/forum" component={Forum} />
						<Route path="/news" component={News} />
						<Route path="/about" component={About} />
						<Route path="/register" component={Register} />
						<Route path="/login"><Login user={this.state.user} /></Route>
						<Route path="/dashboard"><Dashboard user={this.state.user} /></Route>
						<Route component={NotFound} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

function About() {
	return (
		<main>
			<h1>About</h1>
		</main>
	);
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