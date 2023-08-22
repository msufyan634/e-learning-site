import React from 'react'
import './cloud.css'
import { Container, Row, Col, Button } from 'react-bootstrap';


const Cloud = () => {
    return (
        <div className='cloud_main_main'>
            <div className='first_main'>
                <h1 className='heading'><span className='one'>All-In-One</span> Cloud Software.</h1>
            </div>
            <div className='para_main'>
                <p>TOTC is one powerful online software suite that combines all the tools needed<br /> to run a successful school or office.</p>
            </div>
            <Container className='ascssd'>
                <Row className='align-items-center"'>
                    <Col xs={12} md={4}>
                        <div className='card_main'>
                            <div className='sdcd'>
                                <img className='' src='/assets/biilling.png' width='150px' height='150px' />
                            </div>
                            <h1 className='online_heading'>
                                Online Billing, <br />Invoicing, & Contracts
                            </h1>
                            <p className='paraaaaa'>
                                Simple and secure control of your <br /> organization’s financial and legal  <br />   transactions. Send customized  <br /> invoices and contracts
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='card_main'>
                            <div className='sdcd'>
                                <img className='' src='/assets/easy.png' width='150px' height='150px' />
                            </div>
                            <h1 className='online_heading'>

                                Easy Scheduling & <br /> Attendance Tracking
                            </h1>
                            <p className='paraaaaa'>
                                Simple and secure control of your <br /> organization’s financial and legal  <br />   transactions. Send customized  <br /> invoices and contracts
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='card_main'>
                            <div className='sdcd'>
                                <img className='' src='/assets/customer.png' width='150px' height='150px' />
                            </div>
                            <h1 className='online_heading'>
                                Customer Tracking
                            </h1>
                            <p className='paraaaaa'>
                                Simple and secure control of your <br /> organization’s financial and legal  <br />   transactions. Send customized  <br /> invoices and contracts
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cloud