import {React } from 'react';
import { useHistory} from 'react-router-dom'

export const YearSelector = ({teamName, selectedYear}) => {

	let history = useHistory();
 	let years = [];
 	const startYear = process.env.REACT_APP_DATA_START_YEAR;
	const endYear = process.env.REACT_APP_DATA_END_YEAR;
	const selected = selectedYear;
console.log(selected);
	for(let i = startYear; i<= endYear; i++){
		years.push(i);
	}
	
	function handleChange(value){
		history.push(`/teams/${teamName}/matches/${value}`);
	}
	
	return (
	<select className="form-control" onChange={e => handleChange(e.target.value)} value={selected}>
		{years.map(year => (<option value={year}>{year}</option>))}
	</select>

//		<ul className="remove-disc">
//			{years.map(year => (
//				
//				<li key={year}>
//					<Link  key={year} to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
//				</li>
//			)
//			)}
//		</ul>
	);
}
