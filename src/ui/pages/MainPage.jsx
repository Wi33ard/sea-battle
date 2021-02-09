import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import BattleField from '../components/BattleField';
import { Row, Col } from 'react-bootstrap';


export default function MainPage() {
  return (
    <div>
      <Header />
      <Row className="main-area">
        <Col sm={12} md={3} className="dashboard">
          <Dashboard />
        </Col>
        <Col sm={12} md={9} className="battlefield">
          <BattleField />
        </Col>        
      </Row>
    </div>
  )
}