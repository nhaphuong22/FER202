import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

export default function QuestionList() {
    const {
        displayedQuestions,
        selectedAnswers,
        showResults,
        currentQuestionIndex,
        selectAnswer,
        setShowResults,
        resetQuiz,
        setCurrentQuestionIndex,
        getScore
    } = useContext(QuizContext);

    if (displayedQuestions.length === 0) {
        return <div className="text-center py-5 text-muted">Không có câu hỏi nào trong bộ đề.</div>;
    }

    const isFinished = showResults || currentQuestionIndex >= displayedQuestions.length;

    if (isFinished) {
        return (
            <div className="py-4 text-start">
                <h1 className="display-4 fw-bold mb-3" style={{ color: '#d93838' }}>
                    Quiz Completed!
                </h1>
                <p className="fs-4 mb-4 text-dark">
                    Your score: {getScore()}
                </p>
                <button
                    onClick={resetQuiz}
                    className="btn px-4 py-2 text-white fw-semibold"
                    style={{ backgroundColor: '#d93838', border: 'none', borderRadius: '4px' }}
                >
                    Restart Quiz
                </button>
            </div>
        );
    }

    const currentQuestion = displayedQuestions[currentQuestionIndex];
    const isSelected = selectedAnswers[currentQuestionIndex] !== undefined;

    const handleNext = () => {
        if (currentQuestionIndex === displayedQuestions.length - 1) {
            setShowResults(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    return (
        <div className="py-4 text-start">
            <h1 className="display-5 fw-bold mb-2" style={{ color: '#d93838' }}>
                Question {currentQuestionIndex + 1}
            </h1>
            <p className="fs-5 mb-4 text-dark fw-normal">
                {currentQuestion.question}
            </p>

            <div className="list-group mb-4" style={{ maxWidth: '600px', borderRadius: '6px', overflow: 'hidden', border: '1px solid #dee2e6' }}>
                {currentQuestion.answers.map((answer, index) => (
                    <label
                        key={index}
                        className="list-group-item d-flex align-items-center gap-3 py-3 border-0"
                        style={{
                            cursor: 'pointer',
                            backgroundColor: selectedAnswers[currentQuestionIndex] === answer ? '#f8f9fa' : 'white',
                            borderBottom: index === currentQuestion.answers.length - 1 ? 'none' : '1px solid #dee2e6'
                        }}
                    >
                        <input
                            type="radio"
                            name={`question-${currentQuestionIndex}`}
                            checked={selectedAnswers[currentQuestionIndex] === answer}
                            onChange={() => selectAnswer(currentQuestionIndex, answer)}
                            className="form-check-input mt-0"
                            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        />
                        <span className="fs-6 text-dark">{answer}</span>
                    </label>
                ))}
            </div>

            <button
                onClick={handleNext}
                disabled={!isSelected}
                className="btn px-4 py-2 text-white fw-semibold"
                style={{
                    backgroundColor: isSelected ? '#d93838' : '#e0e0e0',
                    color: isSelected ? 'white' : '#9e9e9e',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isSelected ? 'pointer' : 'not-allowed'
                }}
            >
                Next
            </button>
        </div>
    );
}