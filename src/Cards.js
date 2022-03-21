import React from 'react'
import Card from './Card'
const reactDeck = [
    {
        Question: 'O que é JSX?',
        Answer: 'Uma extensão de linguagem do JavaScript'
    },
    {
        Question: 'O React é __',
        Answer: 'uma biblioteca JavaScript para construção de interfaces'
    },
    {
        Question: 'Componentes devem iniciar com __',
        Answer: 'letra maiúscula'
    },
    {
        Question: 'Podemos colocar __ dentro do JSX',
        Answer: 'expressões'
    },
    {
        Question: 'O ReactDOM nos ajuda __',
        Answer: 'interagindo com a DOM para colocar componentes React na mesma'
    },
    {
        Question: 'Usamos o npm para __',
        Answer: 'gerenciar os pacotes necessários e suas dependências'
    },
    {
        Question: 'Usamos props para __',
        Answer: 'passar diferentes informações para componentes'
    },
    {
        Question: 'Usamos estado (state) para __',
        Answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
    }
]
const shuffledReactDeck = reactDeck.sort(() => Math.random() - 0.5);
console.log(shuffledReactDeck)

export default function Cards({ iconsPush, increaseCompleted, iForgotAnAnswer }) {
    return (
        <>
            {shuffledReactDeck.map(({ Question, Answer }, index) => (
                <Card
                    iForgotAnAnswer={iForgotAnAnswer}
                    increaseCompleted={increaseCompleted}
                    iconsPush={iconsPush}
                    key={index + 1}
                    Number={index + 1}
                    Question={Question}
                    Answer={Answer}
                />
            ))
            }
        </>
    )
}
