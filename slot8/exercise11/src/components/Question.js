import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

export default class Question extends Component {
  render() {
    const { questionData, questionNumber, onAnswerSelect } = this.props;
    return (
      <div className="container mt-5">
        <h1 className="diplay-5 fw-bold mb-3">question: {questionNumber}</h1>
        <h3 className="fw-normal mb-4">{questionData.question}</h3>
        <Card className="shadow-sm">
          <ListGroup variant="flush">
            {questionData.options.map((option, index) => (
              <ListGroup.Item
                key={index}
                onClick={() => onAnswerSelect(option)}
                className="py-3 px-4 text-primary fs-5 border-bottem"
                style={{ cursor: "pointer" }}
              >
                {option}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
    );
  }
}
