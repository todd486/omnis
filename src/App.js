import React from 'react';
import { Switch, Route, Link, BrowserRouter, useParams, useRouteMatch, Redirect } from 'react-router-dom';
import './css/App.css';

import Frontpage from './components/Frontpage';
import Forum from './components/Forum';
import News from './components/News';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import { Login, Register } from './components/Userdata';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
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
	render() {
		return (
			<BrowserRouter>
				<div className={`App ${this.state.theme}`}>
					<button onClick={() => {
						this.setState({ theme: this.state.theme !== "darkMode" ? "darkMode" : "lightMode" });
					}}>
						<i className="fas fa-adjust" />
					</button>
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
						{/* TODO: handle /users:userID */}
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