
import React from 'react';

const EvenPlayers = (IndianTeam) => {
  const team = IndianTeam.IndianTeam;
  return (
    <ul>
      {team.filter((_, index) => index % 2 === 0).map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  );
};

export default EvenPlayers;
