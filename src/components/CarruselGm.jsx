import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarruselGm = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img 
                    className="d-block w-100" style={{height:'auto'}}
                    src="https://media.discordapp.net/attachments/1176712497668030486/1187230540584198287/Blue_Live_Stream_Game_Twitch_Banner.png?ex=6596219a&is=6583ac9a&hm=6f1b2a125438b542684084cffa985cab98a7b47e6530346fcb96a676fd5769a7&=&format=webp&quality=lossless"
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
                    src="https://media.discordapp.net/attachments/1176712497668030486/1187230541288845373/1600w-FTh2vkCRZio.webp?ex=6596219a&is=6583ac9a&hm=959b72e58f9daef4e5165ca334c23fd3c97b8d9461b34953c2befb3b484743f5&=&format=webp&width=1440&height=576"
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
