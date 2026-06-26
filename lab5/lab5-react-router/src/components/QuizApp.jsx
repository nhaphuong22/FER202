import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

export default function QuizApp() {
    const [showForm, setShowForm] = useState(false);

    return (
        <Container className="py-5" style={{ maxWidth: '700px' }}>
            <Row>
                <Col md={12}>
                    <QuestionList />
                </Col>
            </Row>

            <hr className="mt-5 mb-4 text-muted" />
            <div className="d-flex justify-content-end">
                <Button
                    variant="link"
                    className="text-secondary text-decoration-none p-0"
                    style={{ fontSize: '0.875rem' }}
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? '← Back to Quiz' : '+ Manage/Add Questions'}
                </Button>
            </div>

            {showForm && (
                <Row className="mt-4">
                    <Col md={12}>
                        <QuestionForm />
                    </Col>
                </Row>
            )}
        </Container>
    );
}