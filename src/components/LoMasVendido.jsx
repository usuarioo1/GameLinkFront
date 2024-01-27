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
                    <Card className='mb-4 mx-2' style={{ width: '18rem', height:'22rem' }}>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/1176712497668030486/1182142685528727613/imagen_3.png?ex=6596142b&is=65839f2b&hm=bf57c356bba754f3c7c9887cddd13dd264404efc9b06cd0c6fd36d948b6142c6&=&format=webp&quality=lossless" />
                        <Card.Body className='text-center custom-card-body'>
                            <Card.Title>Call Of Duty III</Card.Title>
                            <Card.Text>
                                <i className="bi bi-tag-fill"></i> $35.000
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>

                    <Card className='mb-4 mx-2' style={{ width: '18rem', height:'22rem' }}>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/1176712497668030486/1182143216087220344/imagen_11.png?ex=659614a9&is=65839fa9&hm=b2ef80946fef5df87fac27cf8cddcaa4f1fd2691aab5740a1d58a8e130385cac&=&format=webp&quality=lossless" />
                        <Card.Body className='text-center custom-card-body'>
                            <Card.Title>TLOR: Returns To Moria</Card.Title>
                            <Card.Text>
                                <i className="bi bi-tag-fill"></i> $22.500
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>

                    <Card className='mb-4 mx-2' style={{ width: '18rem', height:'22rem' }}>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/1176712497668030486/1182143216561172600/imagen_16.png?ex=659614a9&is=65839fa9&hm=f6c402b1a487ef3370308f5147326ca8cbeb60bf5261c26320048e82a46dc688&=&format=webp&quality=lossless" />
                        <Card.Body className='text-center custom-card-body'>
                            <Card.Title>Red Dead Redemption</Card.Title>
                            <Card.Text>
                                <i className="bi bi-tag-fill"></i> $13.000
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>

                    <Card className='mb-4 mx-2' style={{ width: '18rem', height:'22rem' }}>
                        <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1176712497668030486/1182143217823645796/imagen_13.png?ex=659f4f2a&is=658cda2a&hm=14cbcd737dccd573f53b6300101ee858ddb6c045739dd206b7f7d324575b19bb&" />
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
