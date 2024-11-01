import React, { useRef, useState } from 'react'
import './Game.css'
const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score }) => {


  const [letter, setLetter] = useState('')
  const letterInputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    verifyLetter(letter)
    setLetter('')
    letterInputRef.current.focus()
  }
  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação : {score}</span>
      </p>
      <h1>
        Advinhe a palavra
      </h1>
      <h3>Dica sobre a palava: <span>{pickedCategory}</span></h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className='wordContainer'>
        {letters.map((letters, i) => (
          guessedLetters.includes(letters) ? (
            <span key={i} className='letter'>{letters}</span>
          ) : (
            <span key={i} className='blankSquare'></span>
          )
        ))}
      </div>
      <div className='letterContainer'>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength='1'
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef} />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default Game