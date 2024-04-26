import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
    return (
      <>
        <Container className="text-center p-3">
          <Row>
            <Col className='p-5'>
              <h1 className='p-5'>Bienvenido a <b>Happy Cake</b></h1>
              <p><i>El lugar de los pasteles felices</i></p>
              <h1>🎂</h1>
            </Col>
          </Row>
        </Container>
      </>
    )
}

export default Home