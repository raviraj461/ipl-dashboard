import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard';
import {  Row, Col } from 'react-bootstrap';
import './MatchPage.scss';
import { YearSelector } from '../components/YearSelector';

export const MatchPage = () => {

	const  [matches, setMatches] = useState([]);
	const  {teamName, year}  = useParams(); 
  
	useEffect(
	() => {
		const fetchMatches = async () => {
			const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
			const data = await response.json();
			setMatches(data);

		}
		fetchMatches();
       document.title = "IPL Dashboard";
 	},[teamName, year]
   );

   if(!matches) {
	   return <h1>Matches Not Found</h1>
   }

  return (
    <div className="MatchPage">
		<Row>
		<Col lg="2" className="year-selector-class">
			<h3>Years</h3>
			<YearSelector key={matches.id} teamName={teamName} selectedYear={year}/>
		</Col>
		<Col lg="10">
		<h1>{teamName} in {year}</h1>
			{matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match}/>)}	
		</Col>
		</Row>
      </div>
  );
}