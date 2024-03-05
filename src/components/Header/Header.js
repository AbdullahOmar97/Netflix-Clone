import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/FavList">FavList</Nav.Link>
            <Nav.Link href="/MovieList">MovieList</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
