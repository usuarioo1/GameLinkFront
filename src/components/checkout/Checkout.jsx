import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';

const Checkout = () => {
 const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 },
 ];

 const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price, 0);
 };

 return (
    <Card>
      <Card.Header>
        <strong>Resumen de Productos</strong>
      </Card.Header>
      <ListGroup variant="flush">
        {products.map((product) => (
          <ListGroup.Item key={product.id}>
            <strong>{product.name}</strong> - ${product.price}
          </ListGroup.Item>
        ))}
        <ListGroup.Item>
          <strong>Total:</strong> ${calculateTotal()}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary" type="submit">
          Confirmar Compra
        </Button>
      </Card.Body>
    </Card>
 );
};

export default Checkout;

// se debe setear desde BD