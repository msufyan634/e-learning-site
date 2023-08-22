import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './features.css'


function Features() {
    return (
        <div>
            <div className='cloud_main_main'>
                <div className='first_main'>
                    <h1 className='heading'><span className='one'>Our</span> Features</h1>
                </div>
                <div className='para_main'>
                    <p>This very extraordinary feature, can make learning activities more efficient</p>
                </div>
                <Container>
                    <Row className='mt-5 align-items-center'>
                        <Col xs={12} md={7}>
                            <img src='/assets/office.svg' width='80%' />
                        </Col>
                        <Col xs={12} md={5}>
                            <div className='left_sids_main'>
                                <h1 className='sdcw'>
                                    A<span className='first'> user interface </span> designed for the classroom
                                </h1>
                            </div>
                            <div className='d-flex align-items-center mt-4'>
                                <div className='wvcwev3v'>
                                    <img src='/assets/users 2.png' width='25px' height='25px' />
                                </div>
                                <div className='ms-3'>
                                    Teachers don’t get lost in the grid view and have a dedicated Podium space.
                                </div>
                            </div>
                            <div className='d-flex align-items-center mt-4 mb-4'>
                                <div className='wvcwev3v'>
                                    <img src='/assets/users 2.png' width='25px' height='25px' />
                                </div>
                                <div className='ms-3'>
                                    Teachers don’t get lost in the grid view and have a dedicated Podium space.
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='wvcwev3v'>
                                    <img src='/assets/users 2.png' width='25px' height='25px' />
                                </div>
                                <div className='ms-3'>
                                    Teachers don’t get lost in the grid view and have a dedicated Podium space.
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Features