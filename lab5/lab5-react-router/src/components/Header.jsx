import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#" onClick={() => navigate("/")}>
          React Router
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={() => navigate("/")}>
              Home
            </Nav.Link>
            <Nav.Link href="#" onClick={() => navigate("/about")}>
              About
            </Nav.Link>
            <Nav.Link href="#" onClick={() => navigate("/news")}>
              News
            </Nav.Link>
            <Nav.Link href="#" onClick={() => navigate("/quiz")}>
              Quiz
            </Nav.Link>
            <Nav.Link href="#" onClick={() => navigate("/contact")}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
