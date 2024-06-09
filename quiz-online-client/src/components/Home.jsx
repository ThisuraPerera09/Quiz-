import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './styles.css'; // Import custom styles

const Home = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz-stepper");
  };

  return (
    <main className="home-container">
      <div className="welcome-text text-center">
        <h2>Welcome to Online Quiz for Everyone</h2>
        <p className="lead">Test your knowledge across various subjects and have fun!</p>
        <button className="btn btn-primary btn-lg mt-4" onClick={handleStartQuiz}>
          Start a Quiz
        </button>
      </div>
    </main>
  );
}

export default Home;
