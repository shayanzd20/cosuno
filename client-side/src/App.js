import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Companies from './containers/Companies';

import './App.css';

function App() {
	// const username = prompt('Enter Github Username');
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/main" component={Companies} />
				<Redirect to={`/main`} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
