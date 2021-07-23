import {React} from 'react';
import { Link } from 'react-router-dom'
import {  CheckCircle , XCircle} from 'react-bootstrap-icons';
import {  Row, Col } from 'react-bootstrap';
import '../components/MatchDetailCard.scss';
export const MatchDetailCard = ({teamName, match}) => {

  if(!match) return null;	
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRout = '/teams/'+otherTeam
//	console.log(match.date + '-'+match.playerOfMatch);
//	console.log({otherTeam});
	if(otherTeam === 'N/A'){
		return(

	   <div className="MatchDetailCard">
		  <div className={teamName}>
			<div className="margin-lg-card">
				<Row>
					<Col lg="12">
						<h2> &nbsp; {teamName}</h2> 
						<p className="pull-right ml-auto ">&nbsp; did not play this year</p>
					</Col>
				</Row>
				<Row>
					<Col lg="12">

					</Col>	
				</Row>
			</div>		
		  </div>
		</div>
		);
	}

  return (
    <div className="MatchDetailCard">
	  <div className={otherTeam}>
			<div className="margin-lg-card">
				<Row>
					<Col lg="8">

						<h2><span className="small">
							{
								otherTeam === "N/A" ? " " : "vs "
							} 								
							</span> &nbsp;
							<Link to={otherTeamRout}>{otherTeam}</Link>
						 </h2>
						<div className="image"/>
						<h3>
							{
								otherTeam === "N/A" ? " " : "on "
							} {match.date}</h3>
						<h4>
							{
								otherTeam === "N/A" ? " " : "at "
							} 						
							{match.venue}
						</h4>	
						<h5>
							{
								match.matchWinner === teamName && <CheckCircle className="win-class"></CheckCircle>
							}
							{
								match.matchWinner === otherTeam && <XCircle className="loss-class"></XCircle>
							} &nbsp;
							{match.matchWinner} 
								{
									otherTeam === "N/A" ? " " : " won by "
								} 						
							{match.resultMargin} {match.result}
						</h5>
					</Col>
					<Col lg="4 more-link">
						<p><strong>First Innings</strong> <br/>{match.team1} <br />
						   <strong>Second Innings</strong> <br/>{match.team2} <br />
						   <strong>Player of Match</strong>  <br />{ match.playerOfMatch}<br />
						   <strong>Umpires</strong> <br /> {match.umpire1} , {match.umpire2}
						</p>
					</Col>
				</Row>
				<Row>
					<Col lg="12">

					</Col>	
				</Row>
			</div>
		</div>	
      </div>
  );
}