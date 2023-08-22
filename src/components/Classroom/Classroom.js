import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './classroom.css'


const Classroom = () => {
    return (
        <div className='main'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6}>
                        <div className='left_sids_main'>
                            <h1 className='sdcw'>
                                <span className='first'>Everything you can do in a physical classroom,</span> you can do with TOTC
                            </h1>
                            <p className='cssc'>
                                TOTC’s school management software helps traditional <br />
                                and online schools manage scheduling, attendance,
                                <br /> payments and virtual classrooms all in one secure cloud-<br />
                                based system.</p>
                            <div className='d-flex align-items-center mt-4'>
                                <Button className='learn'>
                                Learn more
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src='/assets/office.svg' width='100%' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Classroom