import React, { useState } from "react";
import { Form, Button, Row, Col, InputGroup, Container } from "react-bootstrap";

function Contact() {
  // Trạng thái quản lý việc Form đã được nhấn Submit hay chưa
  const [validated, setValidated] = useState(false);

  // Hàm xử lý khi người dùng nhấn nút "Submit form"
  const handleSubmit = (event) => {
    const form = event.currentTarget;

    // Nếu Form kiểm tra thấy có trường nhập liệu chưa hợp lệ
    if (form.checkValidity() === false) {
      event.preventDefault(); // Ngăn chặn việc tải lại trang
      event.stopPropagation(); // Ngăn chặn sự kiện nổi bọt
    }

    setValidated(true); // Bật trạng thái đã kiểm tra lỗi để Bootstrap hiển thị màu sắc (Xanh/Đỏ)
  };

  return (
    <Container className="py-4">
      {/* noValidate: Tắt tính năng kiểm tra lỗi mặc định của trình duyệt để dùng của Bootstrap
        validated: Nhận giá trị true/false để kích hoạt hiển thị lỗi/thành công bằng CSS
      */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* Hàng 1: First name, Last name, Username */}
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="mb-3 mb-md-0"
          >
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom02"
            className="mb-3 mb-md-0"
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        {/* Hàng 2: City, State, Zip */}
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3 mb-md-0"
          >
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="3"
            controlId="validationCustom04"
            className="mb-3 mb-md-0"
          >
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* Hàng 3: Hộp kiểm Checkbox đồng ý điều khoản */}
        <Form.Group className="mb-3 text-start">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            className="text-danger-custom"
          />
        </Form.Group>

        {/* Nút gửi Form */}
        <div className="text-start">
          <Button type="submit" className="px-4 py-2 fw-semibold">
            Submit form
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Contact;
