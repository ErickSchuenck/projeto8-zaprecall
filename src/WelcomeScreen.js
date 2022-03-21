import React from 'react'
import Cards from './Cards'

export default function WelcomeScreen({ changeScreen }) {
  function displayFlashcards() {
    changeScreen(false)
  }
  return (
    <>
      <div className='welcome-screen'>
        <img alt='logo raio amarelo' className='logo' src='./assets/logo.png'></img>
        <div className='title'>Zap Recall</div>
        <button onClick={displayFlashcards} className='start-recall'>Iniciar Recall</button>
      </div>
    </>
  )
}
