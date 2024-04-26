import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Contact = () => {
    return (
      <>
        <Form className="p-5">
          <Row>
            <Col className='text-center p-3'>
              <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
            </Col>
          </Row>
          <Row>
            <Col className='p-3'>
              <p><b>correo:</b> <input type="email" placeholder='name@example.com' className="w-50"/></p>
              <p><b className="text-right">Descripción:</b></p>
              <p><Form.Control as="textarea" style={{ height: '100px' }}/></p>
            </Col>
          </Row>
          <Row>
            <Col className='text-center p-3'>
              <Button variant="outline-primary" className='m-3'>Enviar</Button>
            </Col>
          </Row>

        </Form>
    </>
    )
}

export default Contact