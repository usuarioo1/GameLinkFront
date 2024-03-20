import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarruselGm = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img 
                    className="d-block w-100" style={{height:'auto'}}
                    src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1710900779/GameLink/xe3rbd2jelcpxc4vm6rd.webp"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Solo por pocos días</h3>
                    <p>Hasta 50% de descuento en toda la tienda</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" style={{height:'auto'}}
                    src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1710900778/GameLink/beffyx50seiq5cup4ahk.webp"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Explora nuevos limites</h3>
                    <p>Conoce las nuevas tendencias del Gaming actual, solo acá en GameLink</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarruselGm;
