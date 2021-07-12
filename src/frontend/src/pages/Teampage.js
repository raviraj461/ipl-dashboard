import {React, useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { LastFourMatches } from '../components/LastFourMatches';
import {  Row, Col } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';

import 'bootstrap/dist/css/bootstrap.min.css';

import './TeamPage.scss';

export const TeamPage = () => {

	const  [team, setTeam] = useState({matches: []});
	const  {teamName}  = useParams(); 
 	
	useEffect(
	() => {
		const fetchMatches = async () => {
			const reqInput = `${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`;
			const response = await fetch(reqInput);
			const data = await response.json();
			setTeam(data);
			
		}
		fetchMatches();
        document.title = "IPL Dashboard";
 
	},[teamName]
   );

   if(!team || !team.teamName) {
	   return "";
   }
 return (
    <div className="TeamPage">
		<Row>
		<Col lg="4">
		  <Row>	
	      		<h1>{team.teamName}</h1>
		  </Row>
		  <Row>
			  <Col sm="6">
				 <div><strong>Total Matches</strong> : {team.totalMatches}</div>	
				 <div><strong>Wins/Loss</strong> : <span className="win-class">{team.totalWins}</span> / <span className="loss-class">{team.totalLost}</span></div>
			 	 <p><strong>Last Four Matches </strong></p>
				<div class="float-container">
					{team.matches.map(match => <LastFourMatches key={match.id} teamName={team.teamName} match={match}/>)}
				</div>	  
			  </Col>
			  <Col sm="6">
				<PieChart
				data={[
					{ title: 'Losses', value: team.totalLost, color: '#a34d5d', label: 'Losses' },
					{ title: 'Wins', value: team.totalWins, color: '#4da375', label: 'Wins' },
				]}
				/> 			  
			   </Col>
		  </Row>
		</Col>
		<Col lg="8">
			<Row>
				<Col lg="12">
					<MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
				</Col>
				<Row>
					{team.matches.slice(1).map(match => <Col lg="4"><MatchSmallCard key={match.id} teamName={team.teamName} match={match}/></Col>)}
				</Row>
				<Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}  className="pull-right ml-auto more-link">More </Link>
			</Row>
		</Col>	
		</Row>
	</div>	
  );
}