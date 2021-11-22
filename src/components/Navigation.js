import {Nav, Navbar, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
const Navigation = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="flat" variant="dark">
        <Container>
        <Navbar.Brand href="/">Dresden Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/allbooks">All books</Nav.Link>
            <NavDropdown title="My Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/user/">Borrowed Items</NavDropdown.Item>
              <NavDropdown.Item href="/user/{username}">Edit Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
   
  export default Navigation;