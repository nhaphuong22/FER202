import { Component } from "react";
import Score from "./Score";
import Question from "./Question";

export default class QuizApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          id: 2,
          question: "What is the largest plannet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter",
        },
        {
          id: 3,
          question: "Which chemical element has the symbol 'O'?",
          options: ["Gold", "Oxygen", "Osmium", "Iron"],
          answer: "Oxygen",
        },
        {
          id: 4,
          question: "Who painted the Mona Lisa?",
          options: [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Michelangelo",
          ],
          answer: "Leonardo da Vinci",
        },
        {
          id: 5,
          question: "Which country is home to the kangaroo?",
          options: ["Australia", "South Africa", "Canada", "Austria"],
          answer: "Australia",
        },
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    };

    // Bind các phương thức xử lý sự kiện
    this.handleAnswerSelection = this.handleAnswerSelection.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  handleAnswerSelection(selectedOption) {
    const { questions, currentQuestion, score } = this.state;
    const correctAnswer = questions[currentQuestion].answer;

    let newScore = score;
    // Nếu đáp án chính xác thì tăng điểm user
    if (selectedOption === correctAnswer) {
      newScore += 1;
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      this.setState({
        score: newScore,
        currentQuestion: nextQuestion,
      });
    } else {
      this.setState({
        score: newScore,
        quizEnd: true,
      });
    }
  }

  handleRestart() {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    });
  }

  render() {
    const { questions, currentQuestion, score, quizEnd } = this.state;

    if (quizEnd) {
      return <Score score={score} onRestart={this.handleRestart} />;
    }

    return (
      <Question
        questionNumber={currentQuestion + 1}
        questionData={questions[currentQuestion]}
        onAnswerSelect={this.handleAnswerSelection}
      />
    );
  }
}
