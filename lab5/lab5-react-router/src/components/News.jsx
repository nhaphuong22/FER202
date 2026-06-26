import { Row, Col, Card, Container } from "react-bootstrap";
import { newLists } from "../data/homeData";
export default function News() {
  return (
    <Container className="py-4">
      {/* Tiêu đề trang đổi màu đỏ đậm (text-danger hoặc mã màu riêng) theo ảnh mẫu */}
      <h2 className="mb-4 fw-bold text-danger" style={{ color: "#b93846" }}>
        News Category
      </h2>

      {/* Hệ thống lưới: hiển thị 1 cột trên mobile, 2 cột trên tablet và 4 cột trên desktop */}
      <Row xs={1} sm={2} md={4} className="g-4">
        {newLists.map((item) => (
          <Col key={item.id}>
            <Card className="h-100 border border-light-subtle shadow-sm">
              {/* Hình ảnh tin tức */}
              <Card.Img
                variant="top"
                src={item.images}
                style={{ height: "220px", objectFit: "cover" }}
              />

              {/* Nội dung tin tức */}
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title
                    className="fs-5 fw-normal text-dark mb-2"
                    style={{ lineHeight: "1.4" }}
                  >
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-secondary small mb-3">
                    {item.description}
                  </Card.Text>
                </div>

                {/* Đường link giả lập ở dưới cùng giống như ảnh mẫu */}
                <a
                  href={`#news-${item.id}`}
                  className="text-primary text-decoration-underline small mt-auto text-start"
                  style={{
                    display: "-webkit-box",
                    WebKitLineClamp: 2,
                    WebKitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.title}
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
