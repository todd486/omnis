import React from 'react';
import { Switch, Route, Link, BrowserRouter, useParams, useRouteMatch } from 'react-router-dom';
import './css/App.css';

import Forum from './Forum';

import Banner from './img/omnis-wallpaper.png';
import Launcher from './img/OmnisWorld-Launcher.png';

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<div id="logoContainer">
					<img src="" alt="Omnis small logo"/>
				</div>
				<div id="linkContainer">
					<Link to="/"		>Home</Link>
					<Link to="/forum"	>Forums</Link>
					<Link to="/news"	>News</Link>
					<Link to="/about"	>About us</Link>
				</div>
			</nav>
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
			</footer>
		);
	}
}

export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				<Switch>
					<Route exact path="/" 	component={Frontpage} />
					<Route path="/forum" 	component={Forum} />
					<Route path="/news" 	component={News} />
					<Route path="/about" 	component={About} />
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