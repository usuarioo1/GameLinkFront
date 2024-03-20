import { Fragment, useContext } from "react"
import CartContext from "../context/cart/CartContext"
import { Container, Navbar, Nav } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import CartIcon from "../components/cartComponents/cartDropDawn/cartIcon/CartIcon"
import CartDropdown from "../components/cartComponents/cartDropDawn/CartDropDown"




const NavBarMain = () => {
    const { isCartOpen } = useContext(CartContext)
    console.log(isCartOpen);
    return (
        <Fragment>
            <Navbar expand="lg" className="custom-nav">
                <Container>
                    <Navbar className="">
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1710901075/GameLink/ekm2nom3uu6i1kcq9v5f.webp"
                                    width="auto"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="custom-justify">
                        <Nav className="">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/juegos'>Productos</Nav.Link>
                            <Nav.Link as={Link} to='/soporte'>Soporte</Nav.Link>
                            <Nav.Link as={Link} to='/login'><i className="bi bi-person-circle custom-login"></i></Nav.Link>
                            {/* <Nav.Link as={Link} to='/registrate'>Registrate</Nav.Link> */}
                            <CartIcon />
                            {isCartOpen && <CartDropdown />}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Fragment>
    )
}

export default NavBarMain;