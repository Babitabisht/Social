import './App.css';
import Users from './components/users/Users';
import { Row, Col } from 'react-bootstrap';
import {Fragment} from 'react';
import UserCards from './components/users/UserCards';

function App() {
  return (

    <Fragment>
      <Row>
           <Col>
                <Users />
           </Col>
      </Row>
      <Row>
           <Col>
                <UserCards />
           </Col>
      </Row>
     
    </Fragment>
  );
}

export default App;
