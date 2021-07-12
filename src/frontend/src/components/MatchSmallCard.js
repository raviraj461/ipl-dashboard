import {React} from 'react';
import { Link } from 'react-router-dom'
import {  Card } from 'react-bootstrap';
import {  CheckCircle , XCircle} from 'react-bootstrap-icons';


export const MatchSmallCard = ({teamName, match}) => {
	if(!match) return null;
	const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
	const otherTeamRout = '/teams/'+otherTeam
	if(otherTeam == null){
		<div>
			{teamName} did not play this year.
		</div>
	}
  return (
    <div className="MatchSmallCard">
		<Card className={otherTeam}>
			<Card.Body>
				<Card.Title>
				  	<span className="small">vs</span>  <Link to={otherTeamRout}>{otherTeam}</Link>
				</Card.Title>
				<Card.Text>
					{
						match.matchWinner === teamName && <CheckCircle className="win-class"></CheckCircle>
					}
					{
						match.matchWinner === otherTeam && <XCircle className="loss-class"></XCircle>
					}&nbsp;
					{match.matchWinner} won by {match.resultMargin} {match.result}

				</Card.Text>
			</Card.Body>
		</Card>
     </div>
  );
}