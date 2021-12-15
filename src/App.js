import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import About from './components/pages/About';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Switch>
						<Route exact path='/' />
						<Route exact path='/about' component={About} />
						<Route exact path='/list' />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
