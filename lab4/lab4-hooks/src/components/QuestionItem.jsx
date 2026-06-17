import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { Card, Form, Alert } from "react-bootstrap";

export default function QuestionItem({ item, qIndex }) {
    const { selectAnswer, selectedAnswers, showResults } = useContext(QuizContext);
    return (
        <Card className="mb-3 shadow-sm">
            <Card.Body>
                <Card.Title className="h5 text-dark mb-3">
                    Câu {qIndex + 1}: {item.question}
                </Card.Title>

                <Form>
                    {item.answers.map((answer, index) => (
                        <Form.Check
                            key={index}
                            type="radio"
                            id={`question-${qIndex}-answer-${index}`}
                            label={answer}
                            name={`question-${qIndex}`}
                            value={answer}
                            checked={selectedAnswers[qIndex] === answer}
                            onChange={() => selectAnswer(qIndex, answer)}
                            disabled={showResults}
                        />
                    ))}
                </Form>
                {showResults && (
                    <div className="mt-3">
                        {selectedAnswers[qIndex] === item.correctAnswer ? (
                            <Alert variant="success">
                                Correct
                            </Alert>
                        ) : (
                            <Alert variant="danger">
                                Incorrect. (Đáp án đúng: <strong>{item.correctAnswer}</strong>)
                            </Alert>
                        )}
                    </div>
                )}
            </Card.Body>
        </Card>
    )

}