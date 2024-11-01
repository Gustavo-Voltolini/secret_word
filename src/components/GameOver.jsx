import React from 'react'

const GameOver = ({ restartGame, score }) => {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <h2>A sua pontuação foi: {score}</h2>
      <button onClick={restartGame}>Jogar Novamente</button>
    </div>
  )
}

export default GameOver