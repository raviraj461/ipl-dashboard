import {React, useEffect, useState} from 'react';
import {  Row , Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import './HomePage.scss';
import { TeamTiles } from '../components/TeamsTiles';

export const HomePage = () => {

	const  [teams, setTeams] = useState([]);
 	
	useEffect(
	() => {
		const fetchAllTeams = async () => {
			const reqInput = `${process.env.REACT_APP_API_ROOT_URL}/team`;
			const response = await fetch(reqInput);
			const data = await response.json();
			setTeams(data);
		}
		fetchAllTeams();
       document.title = "IPL Dashboard";
 	},[teams]
   );

   return (
    <div className="HomePage">
		<Row>
			<Row>
				{ teams.map(team => <Col lg="4">  <TeamTiles  key={team.id} teamName={team.teamName} className={team.teamName}/></Col>)}
			</Row>
		</Row>
	</div>	
  );
}