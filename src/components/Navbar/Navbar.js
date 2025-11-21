import { Button, Form } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import logo from '../../logo.svg';
import cart from "../../assets/images/cart3.svg";
import Nav from 'react-bootstrap/Nav';

function MyNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary overflow-hidden">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    className="d-inline-block align-top img-fluid"
                    alt="React Bootstrap logo"
                    style={{ maxWidth: 170 }}
                />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-center">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#products">Products</Nav.Link>
                </Nav>
                <div className="d-flex align-items-center ms-auto flex-wrap">
                    <Form className="d-flex me-3">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </div>
                <Nav>
                    <Nav.Link href="#cart">
                        <img src={cart} alt="cart" />
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#profile">
                        Profile
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default MyNavbar;