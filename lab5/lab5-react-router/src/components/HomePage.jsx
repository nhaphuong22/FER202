import { Container, Carousel, Row, Col, Image } from "react-bootstrap";
import { categories, sliderItems } from "../data/homeData";

export default function HomePage() {
  return (
    <Container fluid className="px-0">
      <Carousel className="mb-5">
        {sliderItems.map((item) => (
          <Carousel.Item key={item.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000",
                overflow: "hidden",
                maxHeight: "500px",
              }}
            >
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "contain",
                }}
              />
            </div>
            <Carousel.Caption
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Container className="text-center">
        <h1 className="display-4 fw-bold mb-5">This is Home Page</h1>
        <Row className="justify-content-center g-4">
          {categories.map((cat) => (
            <Col
              xs={6}
              md={3}
              key={cat.id}
              className="d-flex flex-column align-items-center"
            >
              <div
                className="mb-3 shadow-sm"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h5 className="text-secondary fw-semibold">{cat.name}</h5>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
