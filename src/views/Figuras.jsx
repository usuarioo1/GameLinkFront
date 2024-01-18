import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react'
import { FunkoContext } from '../context/funkoPops/FunkoContext'
import { Link } from 'react-router-dom';
import  CartContext  from '../context/cart/CartContext';


const Figuras = () => {

  const {getFunkos, funkos} = useContext(FunkoContext);
  const [data, setData] = useState([]);
  const { addItemToCart, cartCount } = useContext(CartContext)
  console.log(addItemToCart, cartCount)


  const handleAdd = (event) => 
  { event.preventDefault(); 
    if ( cartCount < data[0].stock){addItemToCart(data[0])} else {
      console.log(cartCount);
    } 
  //! SE DEBE OBTENER DE FORMA DINAMICA EL ID DE PRODUCTO PARA CARGARLO EN PRODUCTOS LINEA 24 (DATA[0]) ** CORREGIR
  }

  useEffect(() => {
    const axiosFunkos = async () => {
      try {
        const funkos = await getFunkos();
        console.log(funkos);
        setData(funkos);
      } catch (error) {
        console.error("Error fetching funkos:", error);
      }
    };
    axiosFunkos();
  },[]);
  return (
    <Container className='justify-content-center mt-5'>
      <Container>
        <h1 className='text-left'>Nuestras Figuras</h1>
      </Container>
      <Container className='d-flex justify-content-around mt-5'>
      <Row>
        {data.map((product) => (
          <Col key={product._id} className="mb-4">
            <Link to={`/figuras/${product._id}`} className="card-link">
              <Card className="custom-card mt-5" style={{ width: '18rem', height: '23rem' }} as={'div'}>
                <Card.Img variant="top" src={product.img} alt="" />
                <Card.Body className="text-center custom-card-body">
                  <Card.Title>{product.nombre}</Card.Title>
                  <Card.Text>${product.valor}</Card.Text>
                  <Button variant="primary" className="custom-button" onClick={handleAdd} >Agregar al carro</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  </Container>
  );
};

export default Figuras
