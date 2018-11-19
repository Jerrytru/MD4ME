import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import Language from './components/Language';
import Ratings from './components/Ratings';

class Root extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<div>
					<div id="header">
						<Link to="/Language">Language</Link>
					</div>
					<div>
						<Link to="/Ratings">Ratings</Link>
					</div>
					<Route exact path="/Language" component={ Language } />
					<Route exact path="/Ratings" component={ Ratings } />
				</div>
			</BrowserRouter>
		)
	}
	
}
ReactDOM.render(<Root />, document.getElementById('root'));