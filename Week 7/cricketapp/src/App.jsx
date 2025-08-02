// src/App.js
import React from 'react';
import ListofPlayers from './Components/ListOfPlayers';
import Scorebelow70 from './Components/Scorebelow70';
import OddPlayers from './Components/OddPlayers';
import EvenPlayers from './Components/EvenPlayers';
import ListofIndianPlayers from './Components/IndianPlayers';

function App() {
  const flag = true;

  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 88 },
    { name: 'Dhoni', score: 67 },
    { name: 'Rahul', score: 45 },
    { name: 'Pant', score: 75 },
    { name: 'Jadeja', score: 65 },
    { name: 'Ashwin', score: 33 },
    { name: 'Shami', score: 70 },
    { name: 'Bumrah', score: 50 },
    { name: 'Gill', score: 77 },
    { name: 'Surya', score: 64 },
  ];

  const IndianTeam = ['Virat', 'Rohit', 'Gill', 'Pant', 'Bumrah', 'Dhoni'];

  // ES6 merging
  const T20players = ['Hardik', 'Rinku'];
  const RanjiTrophy = ['Shaw', 'Sarfaraz'];
  const IndianPlayers = [...T20players, ...RanjiTrophy];

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          {OddPlayers({ IndianTeam })}
          <hr />
          <h1>Even Players</h1>
          {EvenPlayers({ IndianTeam })}
        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      </div>
    );
  }
}

export default App;
