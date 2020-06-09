import React from 'react';
import { Switch, Route, Link, BrowserRouter, useParams, useRouteMatch, Redirect } from 'react-router-dom';
import './css/App.css';

import Forum from './components/Forum';
import News from './components/News';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';

import Banner from './img/omnis-wallpaper.png';
import Launcher from './img/OmnisWorld-Launcher.png';

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
				UUID: 	"0d497d95-8ab4-48b9-a26f-a75de72b6e0b",
				name: 	"whii",
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
						logout={this.logout}
					/>
					<Switch>
						<Route exact path="/" component={Frontpage} />
						<Route path="/forum" component={Forum} />
						<Route path="/news" component={News} />
						<Route path="/about" component={About} />
						<Route path="/register" component={Register} />
						<Route path="/login"><Login user={this.state.user} /></Route>
						<Route path="/dashboard"><Dashboard user={this.state.user} /></Route>
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

function Frontpage() {
	return (
		<main id="frontpage">
			<img src={Banner} alt="Banner" id="frontpageBanner" />
			<h1>Omnis World</h1>
			<h2>Do voluptate commodo est Lorem in enim excepteur sunt reprehenderit occaecat eu qui.</h2>
			<section id="blurb">
				<section>
					<div>
						Eu ad est eiusmod ut id id Lorem do ex fugiat deserunt nulla et. Mollit nulla nulla aliquip id anim veniam anim mollit exercitation excepteur qui tempor incididunt. Dolor laboris sunt aliquip cillum in labore ut reprehenderit elit consequat veniam ut qui.
					</div>
					<div>
						Duis cillum elit ea esse culpa reprehenderit mollit excepteur proident aliquip excepteur pariatur eu ut. Fugiat reprehenderit magna elit irure aliqua. Ut fugiat dolore aute pariatur voluptate deserunt est sint eu minim.
					</div>
				</section>
				<img src={Launcher} alt="Omnis World Launcher" id="frontpageLauncher" />
			</section>
			<section id="download">
				Ullamco est ipsum velit adipisicing cillum sit consectetur magna laborum cillum. Aute voluptate pariatur consequat ullamco. Labore excepteur deserunt tempor sunt ut amet anim magna consequat et culpa laborum.
			</section>
			<section id="news">
				<h2>Recent news</h2>
				<div id="newsContainer">

				</div>
			</section>
			<section id="forums">
				<h2>Recent forum posts</h2>
				<div id="forumContainer">

				</div>
			</section>
		</main>
	);
}

function About() {
	return (
		<main>
			<h1>About</h1>
		</main>
	);
}

class NotFound extends React.Component {
	render() {
		return (
			<main>
				<h1>404, that's an error.</h1>
				<h2>We couldn't find the requested page.</h2>
			</main>
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