import { Component } from "react";
import { Button } from "react-bootstrap";

export default class Score extends Component {
  render() {
    const { score, onRestart } = this.props;
    return (
      <div className="container mt-5 text-left" style={{ maxWidth: "600px" }}>
        <h1>Quiz ended</h1>
        <h2>Your score: {score}</h2>

        <div className="d-flex gap-2 justify-content-center">
          <Button
            variant="primary"
            size="lg"
            onClick={onRestart}
            className="mt-2 px-4"
          >
            Again
          </Button>

          <Button variant="danger" size="lg" className="mt-2 px-4">
            Share
          </Button>
        </div>
      </div>
    );
  }
}
