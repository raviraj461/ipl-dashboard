
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TeamPage } from './pages/Teampage';
import { MatchPage } from './pages/MatchPage';
import { BannerComponent } from './components/BannerComponent';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return (
    <div className="App">
      <Container>
        <Row>
          <Col lg="12">
            <Router>
              <BannerComponent />
              <Switch>
                <Route path="/teams/:teamName/matches/:year">
                  <MatchPage/>
                </Route> 
                <Route path="/teams/:teamName">
                  <TeamPage/>
                </Route>
                <Route path="/teams/">
                  <HomePage/>
                </Route>
                <Route path="/">
                  <HomePage/>
                </Route>
              </Switch>       
            </Router>
           </Col> 
        </Row>    
      </Container>      
    </div>
  );
}

export default App;
