// == Import

import { Routes, Route } from 'react-router';
import Home from '../Home'
import Projects from '../Projects'
import './styles.css';

// == Composant

const App = () => {

	return (
		<div className="app">
		<Routes>	

		<Route path="/"  element={<Home/>}/>
		<Route path="/projects" element={<Projects/>}/>

		</Routes>
			
		</div>
	);
};

// == Export
export default App;
