import { React } from 'react';
import {  Card } from 'react-bootstrap';
import {  Link } from 'react-router-dom';

export const TeamTiles = ({teamName}) => {

	return (
		<Card className={teamName}>
			<Card.Body>
				<Card.Title>
					<h3><Link to={`/teams/${teamName}`}>{teamName}</Link></h3>
				</Card.Title>
			</Card.Body>
		</Card>

	);
}