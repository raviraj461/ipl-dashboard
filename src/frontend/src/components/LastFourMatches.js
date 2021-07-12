import {React} from 'react';
import {  CheckCircle , XCircle} from 'react-bootstrap-icons';


export const LastFourMatches = ({teamName, match}) => {
	if(!match) return null;
	const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  return (
    <div className="LastFourMatches">
		{
			match.matchWinner === teamName && <CheckCircle className="win-class"></CheckCircle>
		}
		{
			match.matchWinner === otherTeam && <XCircle className="loss-class"></XCircle>
		}
     </div>
  );
}