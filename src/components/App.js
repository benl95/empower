import React from 'react';
import './app.css';
import Flevoland from '../data/flevoland.geo.json';
import FlevolandGemeentes from '../data/flevolandGemeentes.geo.json';
import ProductionData from '../data/productionFlevoland.json';
import Map from './Map';
import Navigation from './Navigation';
import SideBar from './SideBar';

class App extends React.Component {
	render() {
		return (
			<div className="mainContainer">
				<Navigation />
				<Map
					width={870}
					height={630}
					FirstButton="Municipalities"
					SecondButton="Provinces"
					MainData={FlevolandGemeentes}
					MinorData={Flevoland}
					ProductionData={ProductionData}
				/>
				<SideBar />
			</div>
		);
	}
}

export default App;
