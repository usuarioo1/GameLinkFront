

import { Card } from 'react-bootstrap'

const JuegoId = (product) => {

    const {nombre, precio, img, descripcion, } = product
  return (
    <Link to={`/product/`}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          Precio: ${precio}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default JuegoId
