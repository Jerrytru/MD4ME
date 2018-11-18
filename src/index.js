import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import Language from './components/Language';

class Root extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<div>
					<div id="select">
						<Link to="/Language">Language</Link>
					</div>
					<Route exact path="/" component={ Language } />
				</div>
			</BrowserRouter>
		)
	}
	
}

ReactDOM.render(<Root />, document.getElementById('root'));