import { Fragment } from "react"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"


const NavBarMain = () => {
    return (
        <Fragment>
            <Navbar expand="lg" className="custom-nav">
                <Container>
                    <Navbar className="">
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src="https://cdn.discordapp.com/attachments/1176712497668030486/1190529227984994364/logo_1.png?ex=65a221be&is=658facbe&hm=da33736fb34b949ad0ce07c4e4e671219f9d144daaf1782570e341a0e5944e39&"
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
                            <Nav.Link as={Link} to='/ofertas'>Ofertas</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/juegos'>Juegos</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/figuras'>
                                    Figuras
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to='/soporte'>Soporte</Nav.Link>
                            <Nav.Link as={Link} to='/login'>Iniciar Sesión <i className="bi bi-person-circle custom-login"></i></Nav.Link>
                            <Nav.Link as={Link} to='/registrate'>Registrate</Nav.Link>
                            <Nav.Link as={Link} to='/login'><i className="bi bi-cart custom-cart"></i></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Fragment>
    )
}

export default NavBarMain;
