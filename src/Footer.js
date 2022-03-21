import React from 'react'

export default function Footer({ completed, resultIconsArr, gotEverythingRight }) {
  if (completed < 8) {
    return (
      <footer>
        <h1>{completed}/8 concluidos</h1>
        <h2>
          {resultIconsArr}
        </h2>
      </footer>
    )
  }

  if (gotEverythingRight === true) {
    return (
      <div className='footer2'>
        <div className='footer-top'>
          <img alt='party' src='./assets/party.png'></img>
          <h1>Parabéns!</h1>
        </div>
        <h1>Você não esqueceu de <br /> nenhum flashcard!</h1>
        <h2>
          {resultIconsArr}
        </h2>
      </div>
    )
  }
  if (gotEverythingRight === false) {
    return (
      <div className='footer2'>
        <div className='footer-top'>
          <img alt='sad' src='./assets/sad.png'></img>
          <h1>Putz!</h1>
        </div>
        <h1>Ainda faltaram alguns...<br />
          Mas não desanime! </h1>
        <h2>
          {resultIconsArr}
        </h2>
      </div>
    )
  }
}
