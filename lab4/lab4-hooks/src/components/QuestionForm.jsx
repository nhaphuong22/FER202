import React, { useState, useContext } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { QuizContext } from '../context/QuizContext';

export default function QuestionForm() {
    const { addQuestion } = useContext(QuizContext);

    const [question, setQuestion] = useState('');
    const [opt1, setOpt1] = useState('');
    const [opt2, setOpt2] = useState('');
    const [opt3, setOpt3] = useState('');
    const [correctOpt, setCorrectOpt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!question || !opt1 || !opt2 || !opt3 || !correctOpt) {
            alert('Vui lòng điền đầy đủ thông tin và chọn đáp án đúng!');
            return;
        }

        addQuestion({
            question,
            answers: [opt1, opt2, opt3],
            correctAnswer: correctOpt
        });

        setQuestion(''); setOpt1(''); setOpt2(''); setOpt3(''); setCorrectOpt('');
    };

    return (
        <Card className="mb-4 shadow-sm">
            <Card.Body>
                <Card.Title className="mb-3 text-primary">Tạo Câu Hỏi Mới</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nội dung câu hỏi</Form.Label>
                        <Form.Control
                            type="text" value={question} onChange={e => setQuestion(e.target.value)} placeholder="Nhập câu hỏi..."
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} md={4} className="mb-2">
                            <Form.Label>Lựa chọn 1</Form.Label>
                            <Form.Control type="text" value={opt1} onChange={e => setOpt1(e.target.value)} placeholder="Đáp án A" />
                        </Form.Group>
                        <Form.Group as={Col} md={4} className="mb-2">
                            <Form.Label>Lựa chọn 2</Form.Label>
                            <Form.Control type="text" value={opt2} onChange={e => setOpt2(e.target.value)} placeholder="Đáp án B" />
                        </Form.Group>
                        <Form.Group as={Col} md={4} className="mb-2">
                            <Form.Label>Lựa chọn 3</Form.Label>
                            <Form.Control type="text" value={opt3} onChange={e => setOpt3(e.target.value)} placeholder="Đáp án C" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-4">
                        <Form.Label>Đáp án chính xác</Form.Label>
                        <Form.Select value={correctOpt} onChange={e => setCorrectOpt(e.target.value)}>
                            <option value="">-- Chọn đáp án đúng --</option>
                            {opt1 && <option value={opt1}>Lựa chọn 1: {opt1}</option>}
                            {opt2 && <option value={opt2}>Lựa chọn 2: {opt2}</option>}
                            {opt3 && <option value={opt3}>Lựa chọn 3: {opt3}</option>}
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Thêm Vào Bộ Đề Quiz
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}