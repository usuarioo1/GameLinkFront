import React, { Fragment } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const LoMasVendido = (props) => {
    const estilos = {
        //! */ Aqui generamos propiedades para el componente y darle estilos propios al bloque
        // eslint-disable-next-line react/prop-types
        ...props.estilos
    }
    return (
        <Fragment>
            <div style={estilos}>
                <Container>
                    <h1 className='text-left'>Lo Más Vendido</h1>
                </Container>
                <Container fluid className='d-flex justify-content-center flex-wrap'>
                    <Card className='mb-4 mx-2' style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1708704251/GameLink/ylzf69xcde5fmbcjviu8.jpg" />
                        <Card.Body className='text-center custom-card-body'>
                            <Card.Title>Call Of Duty III</Card.Title>
                            <Card.Text>
                                <i className="bi bi-tag-fill"></i> $35.000
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card className='mb-4 mx-2' style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1708704752/GameLink/craxergypr0nfkx26uzr.jpg" />
                        <Card.Body className='text-center custom-card-body'>
                            <Card.Title>TLOR: Returns To Moria</Card.Title>
                            <Card.Text>
                                <i className="bi bi-tag-fill"></i> $22.500
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card className='mb-4 mx-2' style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1708704752/GameLink/ecnm966k0lbefhin9xsb.jpg" />
                        <Card.Body className='text-center custom-card-body'>
                            <Card.Title>Red Dead Redemption</Card.Title>
                            <Card.Text>
                                <i className="bi bi-tag-fill"></i> $13.000
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card className='mb-4 mx-2' style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1708704752/GameLink/fhksrntyjodcgj7idlqz.jpg" />
                        <Card.Body className='text-center custom-card-body'>
                            <Card.Title>Risk of Rain</Card.Title>
                            <Card.Text className='custom-card-text'>
                                <i className="bi bi-tag-fill"></i> $3.000
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </Fragment>
    )
}

export default LoMasVendido
