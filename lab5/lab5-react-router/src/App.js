import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import News from "./components/News";
import QuizApp from "./components/QuizApp";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route
          path="/quiz"
          element={
            <QuizProvider>
              <QuizApp />
            </QuizProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
