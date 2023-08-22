import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


const Banner = () => {
    return (
        <div className=''>
            <Container>
                <Row className='align-items-center viewport-height"'>
                    <Col xs={12} md={6}>
                        <div>
                            <h1 className='ceeevre'>
                                <span className='studying'>Studying</span> Online is now <br /> much easier
                            </h1>
                            <p className='para'>TOTC is an interesting platform that will teach<br /> you in more an interactive way</p>
                            <div className='d-flex align-items-center mt-4'>
                                <Button className='sign_up'>
                                    Join for free
                                </Button>
                                <Button className='play ml-5'>
                                    <img src='/assets/play.svg' className='img-fluid' height='80px' width='80px' />
                                </Button>
                                <p className='ml-3'>
                                    Watch how it works
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src='/assets/girl.png' width='100%' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner