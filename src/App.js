import React from 'react';
import { Switch, Route, Link, BrowserRouter, useParams, useRouteMatch } from 'react-router-dom';
import './css/App.css';

import Forum from './components/Forum';

import Banner from './img/omnis-wallpaper.png';
import Launcher from './img/OmnisWorld-Launcher.png';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: true,
			user: {
				UUID: null,
				name: "whii"
			}
		}
	}
	componentWillMount() {
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
					{this.state.loggedIn ?
						<span>
							<Link to="/dashboard">
								<i className="icon fas fa-user" />
								<span>Welcome <i>{`${this.state.user.name}`}</i>!</span>
							</Link>
							<Link to="/" id="logout" className="noselect" onClick={() => {
								this.setState({ loggedIn: false });
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



export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				<Switch>
					<Route exact path="/" component={Frontpage} />
					<Route path="/forum" component={Forum} />
					<Route path="/news" component={News} />
					<Route path="/about" component={About} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
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

function News() {
	return (
		<main>
			<h1>News</h1>
		</main>
	);
}

class Dashboard extends React.Component {
	render() {
		return (
			<main>
				<h1>Your Dashboard</h1>
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
						
					}}>Log In</button>
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