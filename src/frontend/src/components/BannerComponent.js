import {React} from 'react';
import { Link } from 'react-router-dom'
import {  Row, Col } from 'react-bootstrap';
import IPLLogo from '../logos/IPL.jpeg';
import {  House } from 'react-bootstrap-icons';
//import { Menu } from './Menu'; 

export const BannerComponent = () => {

 
  return (
	  <Row className="banner-page">
		 <Col lg="9"><h1> <img src={IPLLogo} alt="IPL Logo" width="100px" height="100px"/>  Indian Premier League</h1></Col>  
   		 <Col lg="3"> 
			<div className="banner-link">
				<Link to={`/teams/`}>   
					<House color="white"/>
				</Link> | &nbsp;
				<Link to={`/teams/`}>Teams</Link>
			</div>
		</Col>	 
	  </Row>
  );
}