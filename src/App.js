import { useState } from 'react';
import Flashcards from './Flashcards';
import WelcomeScreen from './WelcomeScreen';


function App() {
  const [display, setDisplay] = useState(true);

  if (display) {
    return (
      <WelcomeScreen changeScreen={setDisplay} />
    );
  } else {
    return (
      <Flashcards />
    )
  }
}

export default App;
