import React, { useState } from 'react'
import Cards from './Cards'
import Footer from './Footer';

export default function Flashcards() {
  const [completed, setCompleted] = useState(0);
  const [gotEverythingRight, setGotEverythingRight] = useState(true);
  const [resultIconsArr, setResultIconsArr] = useState([]);

  function increaseCompleted() {
    setCompleted(
      prevCompleted => {
        return prevCompleted + 1
      }
    )
  }

  function iForgotAnAnswer() {
    setGotEverythingRight(false)
  }

  function iconsPush(icon) {
    resultIconsArr.push(icon)
  }

  return (
    <>
      <header onClick={() => window.location.reload()}>
        <img alt='logo raio pequeno' src='./assets/logo-pequeno.png'></img>
        <h1>ZapRecall</h1>
      </header>
      <Cards
        iForgotAnAnswer={iForgotAnAnswer}
        iconsPush={iconsPush}
        increaseCompleted={increaseCompleted}
      />
      <div className='footer-decoy'></div>
      <Footer
        completed={completed}
        resultIconsArr={resultIconsArr}
        gotEverythingRight={gotEverythingRight}
      />
    </>
  )
}
