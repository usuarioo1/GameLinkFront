import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { GamesContext } from '../context/games/GamesContext';
import { Link } from 'react-router-dom';
import CartContext from '../context/cart/CartContext';
import '../css/juegosId.css';
import Swal from 'sweetalert2';
import Skeleton from 'react-loading-skeleton';

const Juegos = () => {
  const { getGames, games } = useContext(GamesContext);
  const { addItemToCart, cartCount } = useContext(CartContext);

  // Declarar el estado antes de su uso
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Cantidad de elementos en el carrito:", cartCount);
  }, [cartCount]);

  useEffect(() => {
    console.log("Games from context:", games);
  }, [games]);

  useEffect(() => {
    console.log("Cart count from context:", cartCount);
  }, [cartCount]);

  useEffect(() => {
    const axiosGames = async () => {
      try {
        // Guardar los productos en el estado data
        const gamesData = await getGames();
        setData(gamesData);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    axiosGames();
  }, [getGames]);  // Agregado dependencia a getGames

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);  // Dependencia vacía ya que solo se ejecuta una vez

  const handleAdd = (product) => {
    if (cartCount < product.stock) {
      addItemToCart(product);
    }
  };

  const showSuccessToast = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-start",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    Toast.fire({
      icon: "success",
      title: "Agregado al carrito"
    });
  };

  const loader = () => (
    <Container className='justify-content-center mt-5'>
      <Container>
        <h1 className='text-left'>Nuestro Catálogo</h1>
      </Container>
      <Container className='d-flex justify-content-space-between mt-5'>
        <Row>
          {Array.from({ length: 28 }).map((_, index) => (
            <Col key={index} className='mb-4'>
              <Card className='custom-card mt-5' style={{ width: '18rem', height: '23rem' }} as={'div'}>
                <Skeleton height={150} />
                <Card.Body className='text-center custom-card-body'>
                  <Skeleton height={20} style={{ marginBottom: '10px' }} />
                  <Skeleton height={15} width={100} style={{ marginBottom: '10px' }} />
                  <Skeleton height={15} width={80} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );

  if (loading) {
    return loader();
  }

  return (
    <Container className='justify-content-center mt-5'>
      <Container>
        <h1 className='text-left'>Nuestro Catálogo</h1>
      </Container>
      <Container className='d-flex justify-content-around mt-5'>
        <Row>
          {data.map((product) => (
            <Col key={product._id} className="mb-4">
              <Card className="custom-card mt-5" style={{ width: '18rem', height: '23rem' }} as={'div'}>
                <Link to={`/juegos/${product._id}`} className="card-link">
                  <Card.Img variant="top" src={product.img} alt="" />
                </Link>
                <Card.Body className="text-center custom-card-body">
                  <Card.Title className='card-title'>{product.nombre}</Card.Title>
                  <Card.Text>${product.precio}</Card.Text>
                  {product.stock === 0 ? (
                    <h4>sin stock</h4>
                  ) : (
                    <Button
                      variant="primary"
                      className="custom-button"
                      onClick={() => {
                        handleAdd(product);
                        showSuccessToast();  // Llama a showSuccessToast después de agregar al carrito
                      }}
                    >
                      Agregar al carrito
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Juegos;
