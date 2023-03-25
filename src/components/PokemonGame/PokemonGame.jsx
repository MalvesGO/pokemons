import React, { useState } from 'react';
import './styles.css';
import Logo from '../../assets/pokemons.png';

const PokemonGame = () => {

  const [moves, setMoves] = useState('');
  const [capturedPokemons, setCapturedPokemons] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (moves.trim() === '') {
      console.log('Please enter your moves!');
      return;
    }

    const result = capturePokemons(moves);

    if (result === undefined) {
      setCapturedPokemons(0);
    } else {
      setCapturedPokemons(result);
    }
  }

  const capturePokemons = (moves) => {
    const capturedPokemons = new Set();
    let x = 0;
    let y = 0;

    for (let i = 0; i < moves.length; i++) {
      let move = moves[i];

      if (move !== 'N' && move !== 'S' && move !== 'E' && move !== 'O') {
        console.log('Invalid move!');
        return;
      }

      switch (move) {
        case 'N':
          y++;
          break;
        case 'S':
          y--;
          break;
        case 'E':
          x++;
          break;
        case 'O':
          x--;
          break;
      }

      const currentPos = `${x},${y}`;
      capturedPokemons.add(currentPos);
    }

    return capturedPokemons.size;
  }

  return (
    <div>
      <div className='pokemons'>
        <img src={Logo} alt="" />
      </div>
      <div className='formGame'>
        <form onSubmit={handleSubmit}>

          <span className='title'>Pokemon Game - You can use the commands N, S, E, O to move the character.</span>

          <label> Enter your moves:  </label>
          <input type="text" value={moves} onChange={(e) => setMoves(e.target.value)} />
          <button type="submit">Capture Pokemons</button>
        </form>
        {capturedPokemons > 0 && (
          <p className='message'>You captured {capturedPokemons} Pokemons!</p>
        )}
      </div>
    </div>
  );
}

export default PokemonGame;