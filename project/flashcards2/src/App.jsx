import './App.css';
import Flashcard, {flashcards} from './components/Flashcard';
import { useState } from 'react';

const App = () => {

  const [cards, setCards] = useState(flashcards);

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  return (
    <div className='App'>
      <div className='header'>
        <h1 className='title'>Let's Have a Math Off!</h1>
        <p className='description'>Are you really a math enthusiast? Test your knowledge here!</p>
        <p className='total'>Total Cards: {flashcards.length}</p>

        <br></br>
        <p className='description'>Difficulty: <span style={{color: 'green'}}>Easy</span>, <span style={{color: 'yellow'}}>Medium</span>, <span style={{color: "red"}}>Hard</span></p>
        <br></br>
        {/* randomization button */}
        <button className='random-btn' onClick={shuffleCards}>Shuffle Cards</button>
      </div>
      <br></br>
      
      <Flashcard flashcards={cards} />
    </div>
  );
}

export default App;