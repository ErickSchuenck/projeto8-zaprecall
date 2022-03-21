import React, { useState } from 'react'

export default function Card
  (
    {
      Number,
      Question,
      Answer,
      iconsPush,
      increaseCompleted,
      iForgotAnAnswer
    }
  ) {

  const [card, setCard] = useState(false);
  const [cardAnswer, setCardAnswer] = useState(false);
  const [answered, setAnswered] = useState(false);

  function changeCardDisplay() {
    setCard(true);
  }
  function checkAnswer(color) {
    setAnswered(color);
  }
  function turnToAnswer() {
    setCardAnswer(true);
  }

  if (card === false && cardAnswer === false) {
    return (
      <div onClick={changeCardDisplay} className='question'>
        <h1>Pergunta {Number}</h1>
        <ion-icon name="play-outline"></ion-icon>
      </div>
    )
  }
  if (card === true && cardAnswer === false) {
    return (
      <div className='open-card'>
        <h1>{Question}</h1>
        <ion-icon name="reload-outline" onClick={turnToAnswer}></ion-icon>
      </div>
    )
  }
  if (cardAnswer === true && answered === false) {
    return (
      <div className='open-card'>
        <h1>{Answer}</h1>
        <div className='answer-buttons'>

          <button
            onClick={() => {
              increaseCompleted();
              iconsPush(<ion-icon class='red-font' name="close-circle"></ion-icon>);
              checkAnswer('red')
              iForgotAnAnswer()
            }
            } className='red'><h1>Não lembrei</h1>
          </button>

          <button onClick={() => {
            increaseCompleted();
            iconsPush(<ion-icon class='orange-font' name="help-circle"></ion-icon>);
            checkAnswer('orange')
          }
          } className='orange'><h1>Quase não lembrei</h1>
          </button>

          <button onClick={() => {
            increaseCompleted();
            iconsPush(<ion-icon class='green-font' name="checkmark-circle"></ion-icon>);
            checkAnswer('green')
          }
          } className='green'><h1>Zap!</h1>
          </button>
        </div>

      </div >
    )
  }
  if (answered === 'red') {

    return (
      <div className='question red-font'>
        <h2>Pergunta {Number}</h2>
        <ion-icon name="close-circle"></ion-icon>
      </div>
    )
  }
  if (answered === 'orange') {
    return (
      <div className='question orange-font'>
        <h2>Pergunta {Number}</h2>
        <ion-icon name="help-circle"></ion-icon>
      </div>
    )
  }
  if (answered === 'green') {
    return (
      <div className='question green-font'>
        <h2>Pergunta {Number}</h2>
        <ion-icon className='red' name="checkmark-circle"></ion-icon>
      </div>
    )
  }
}
