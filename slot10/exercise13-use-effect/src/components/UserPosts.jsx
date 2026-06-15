import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
export default function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, [userId]);
  return (
    <Container className="my-4">
      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map((post) => (
          <Col key={post.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-capitalize text-dark">
                  {post.title}
                </Card.Title>
                <Card.Text className="text-muted">{post.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
