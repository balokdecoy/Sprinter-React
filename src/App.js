import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Devs from './components/Devs/Devs'
import Employee from './components/Employees/Employee'
import Sprints from './components/Sprints/Sprints'

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Dashboard}/>
					<Route path='/employees' component={Employee}/>
					<Route path='/sprints' component={Sprints}/>
					<Route path='/devs' component={Devs}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
