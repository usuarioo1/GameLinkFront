import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react'
import { FunkoContext } from '../context/funkoPops/FunkoContext'
import { Link } from 'react-router-dom';


const Figuras = () => {

  const {getFunkos, funkos} = useContext(FunkoContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const axiosFunkos = async () => {
      try {
        const funkos = await getFunkos();
        setData(funkos);
      } catch (error) {
        console.error("Error fetching funkos:", error);
      }
    };
    axiosFunkos();
  },[]);
  return (
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
                  <Button variant="primary" className="custom-button">Agregar al carro</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Figuras
