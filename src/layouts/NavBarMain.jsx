import { Fragment } from "react"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"


const NavBarMain = () => {
    return (
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to='/'>GameLink</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/ofertas'>Ofertas</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/juegos'>Juegos</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/figuras'>
                                    Figuras
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to='/soporte'>Soporte</Nav.Link>
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Fragment>
    )
}

export default NavBarMain;
