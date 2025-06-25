import React from "react";
import { useState } from "react";

//   flashcards
export const flashcards = [
    {
        question: "Start", answer: "Click the 'Next' button to start the flashcards", image: "src/assets/start.png"
    }, {
        question: "What is 2 + 2?", answer: "4", difficulty: "easy", image: "src/assets/math.png"
    }, {
        question: "What is the square root of 225?", answer: "15", difficulty: "medium", image: "src/assets/square-root.jpg"
    }, {
        question: "How many sides does a pentagon have?", answer: "5", difficulty: "easy", image: "src/assets/pentagon.png"
    }, {
        question: "How many faces does a cube have?", answer: "6", difficulty: "medium", image: "src/assets/cube.png"
    }, {
        question: "What is Pi to five decimal places?", answer: "3.14161", difficulty: "hard", image: "src/assets/pi.png"
    }, {
        question: "What number is even and also a prime number?", answer: "2", difficulty: "easy", image: "src/assets/prime.png"
    }, {
        question: "There is a two-digit number whose digits are the same, and has got the following property: When squared, it produces a four-digit number, whose first two digits are the same and equal to the original’s minus one, and whose last two digits are the same and equal to the half of the original’s. Find that number.", answer: "88", difficulty: "hard"
    }, {
        question: "What is the volume of a sphere with a radius of 3?", answer: "113.04", difficulty: "medium", image: "src/assets/sphere.png"
    }, {
        question: "How do you determine the area of a circle with a radius of 5?", answer: "A = π(5)²", difficulty: "medium", image: "src/assets/circle.png"
    }
];

const Flashcard = ({flashcards}) => {  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); // holds whether the card was flipped
  const [guess, setGuess] = useState(''); // the user's guess
  const [feedback, setFeedback] = useState('');

  const currentCard = flashcards[currentIndex];

  const general = str => str.toLowerCase().replace(/[^a-z0-9]/g, '');

//   difficulty level
  const difficultyLevel = (difficulty) => {
    switch (difficulty) {
        case "easy":
            return 'easy-card';
        case "medium":
            return 'medium-card';
        case "hard":
            return 'hard-card';
        default:
            return '';
    }
  };

  //   check the given answer
    const checkAnswer = () => {
        const generalGuess = general(guess);
        const generalAnswer = general(currentCard.answer);

        if (generalGuess && generalAnswer.includes(generalGuess)) {
            setFeedback('✅ Correct');
        } else {
            setFeedback('❎ Incorrect');
        }
    };

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
        setCurrentIndex(currentIndex + 1);
        resetCards();
    }
  };

  const handleBack = () => {
    if (currentIndex >= 0) {
        setCurrentIndex(currentIndex - 1);
        resetCards();
    }
  };

  const resetCards = () => {
    setIsFlipped(false);
    setGuess('');
    setFeedback('');
  };

  return (
    <div className="container">
        <div className="flashcard-container">
            <div className="flashcard-wrapper">
                <div className="card-body" onClick={handleCardFlip}>
                {/* <div className="card-body"> */}
                    <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
                    {/* <div className="card-inner"> */}

                        <div className={`card-front ${difficultyLevel(currentCard.difficulty)}`}>
                            {/* image */}
                            <img className="flashcard-img" src={currentCard.image} />
                            <p>{currentCard.question}</p>
                        </div>
                        <div className={`card-back ${difficultyLevel(currentCard.difficulty)}`}>
                            <p>{currentCard.answer}</p>
                        </div>
                    </div>
                </div>
                <br></br>

                {/* guessing section */}
                <div className="guess-section">
                    <input
                        type="text"
                        placeholder="Enter guess"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                    />
                    <br></br><br></br>

                    <button className="submit-btn" onClick={checkAnswer}>Submit</button>
                    {feedback && <p className="feedback">{feedback}</p>}
                </div>

                {/* buttons */}
                <div className="button-wrapper">
                    <button className={`prev-btn ${currentIndex <= 1 ? 'faded' : ''}`} onClick={handleBack} disabled={currentIndex === 0}>Back</button>
                    <button className={`next-btn ${currentIndex >= flashcards.length - 2 ? 'faded' : ''}`} onClick={handleNext} disabled={currentIndex === flashcards.length - 1}>Next</button>
                </div>
            </div>
        </div>
    </div> 
  );
}

export default Flashcard;