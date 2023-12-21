import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const LoMasVendido = () => {
    return (
        <Fragment>
            <div>
                <Container>
                <h1 className='text-left'>Lo Más Vendido</h1>
                </Container>
            <Container className='d-flex justify-content-around'>
                <Card style={{ width: '18rem', height:'20rem' }}>
                    <Card.Img variant="top" src="https://media.discordapp.net/attachments/1176712497668030486/1182142685528727613/imagen_3.png?ex=6596142b&is=65839f2b&hm=bf57c356bba754f3c7c9887cddd13dd264404efc9b06cd0c6fd36d948b6142c6&=&format=webp&quality=lossless" />
                    <Card.Body className='text-center'>
                        <Card.Title>Call Of Duty III</Card.Title>
                        <Card.Text>
                        $35.000
                        </Card.Text>
                        <Button variant="primary">Agregar al carro</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', height:'20rem' }}>
                    <Card.Img variant="top" src="https://media.discordapp.net/attachments/1176712497668030486/1182143216087220344/imagen_11.png?ex=659614a9&is=65839fa9&hm=b2ef80946fef5df87fac27cf8cddcaa4f1fd2691aab5740a1d58a8e130385cac&=&format=webp&quality=lossless" />
                    <Card.Body className='text-center'>
                        <Card.Title>TLOR: Returns To Moria</Card.Title>
                        <Card.Text>
                            $22.500
                        </Card.Text>
                        <Button variant="primary">Agregar al carro</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', height:'20rem' }}>
                    <Card.Img variant="top" src="https://media.discordapp.net/attachments/1176712497668030486/1182143216561172600/imagen_16.png?ex=659614a9&is=65839fa9&hm=f6c402b1a487ef3370308f5147326ca8cbeb60bf5261c26320048e82a46dc688&=&format=webp&quality=lossless" />
                    <Card.Body className='text-center'>
                        <Card.Title>Red Dead Redemption</Card.Title>
                        <Card.Text>
                            $13.000
                        </Card.Text>
                        <Button variant="primary">Agregar al carro</Button>
                    </Card.Body>
                </Card>
                </Container>
            </div>
        </Fragment>
    )
}

export default LoMasVendido
