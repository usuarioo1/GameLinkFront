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
                        <Card.Img variant="top" src="https://res.cloudinary.com/dpbpyzl96/image/upload/c_crop,g_face,h_240,w_288/GameLink/ycfxvsgsrquxzefxv9ae.jpg" />
                        <Card.Body className='text-center custom-card-body'>
                            <Card.Title>Call Of Duty III</Card.Title>
                            <Card.Text>
                                <i className="bi bi-tag-fill"></i> $35.000
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card className='mb-4 mx-2' style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/1176712497668030486/1200699865051701379/Diseno_sin_titulo_10.png?ex=65c721e3&is=65b4ace3&hm=37be5ce036b6e5c19b08a6fbc5b8262bbfc3ee1aff4a963431dde17298205d51&=&format=webp&quality=lossless" />
                        <Card.Body className='text-center custom-card-body'>
                            <Card.Title>TLOR: Returns To Moria</Card.Title>
                            <Card.Text>
                                <i className="bi bi-tag-fill"></i> $22.500
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card className='mb-4 mx-2' style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/1176712497668030486/1200699864758091868/Diseno_sin_titulo_11.png?ex=65c721e3&is=65b4ace3&hm=5e0da2ca886bb5addddd83c0fc8bc255e640e4bdd80f56c79427c88a7eebd6ee&=&format=webp&quality=lossless" />
                        <Card.Body className='text-center custom-card-body'>
                            <Card.Title>Red Dead Redemption</Card.Title>
                            <Card.Text>
                                <i className="bi bi-tag-fill"></i> $13.000
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card className='mb-4 mx-2' style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/1176712497668030486/1200699863839539210/Diseno_sin_titulo_14.png?ex=65c721e3&is=65b4ace3&hm=49e033838dace9f83b8aa7119e83598ec474f6057ba5a063d09458fa93a19e20&=&format=webp&quality=lossless" />
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
