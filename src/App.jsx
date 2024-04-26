import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route } from 'react-router'
import Navbarhappycake from './components/Navbarhappycake'
import Home from './views/Home'
import Contact from './views/Contact'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  return (
    <>
    <Container>
      <Row className='bg-info'>
        <Col className='text-black'>
          <Navbarhappycake/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
