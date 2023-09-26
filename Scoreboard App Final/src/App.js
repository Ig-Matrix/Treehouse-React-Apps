import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";

function App() {
   const [players, setPlayers] = useState([
      {
         name: "IG",
         score: 0,
         id: 1,
      },
      {
         name: "Timothy",
         score: 0,
         id: 2,
      },
      {
         name: "Toochi",
         score: 0,
         id: 3,
      },
      {
         name: "Taiwo",
         score: 0,
         id: 4,
      },
   ]);

   const [highScore, setHighScore] = useState();
   const nextPlayerId = useRef(5);

   useEffect(() => {
      const scores = players.map((player) => player.score);
      setHighScore(Math.max(...scores));
   }, [players]);

   const handleRemovePlayer = (id) =>
      //returns a new array that will exclude the player whose id matches any id in the players array
      setPlayers((prevPlayer) => prevPlayer.filter((p) => p.id !== id));

   const handleScoreChange = (id, delta) =>
      setPlayers((prevPlayer) =>
         prevPlayer.map((player) => {
            if (player.id === id) {
               return {
                  name: player.name,
                  score: player.score + delta,
                  id: player.id,
               };
            } else {
               return player;
            }
         })
      );
   const handleAddPlayer = (name) => {
      setPlayers((prevPlayers) => [
         ...prevPlayers, //adds the previous players to the new array
         {
            name: name,
            score: 0,
            id: nextPlayerId.current++,
         },
      ]);
   };
   return (
      <div className="scoreboard">
         <Header title="Scoreboard" players={players} />

         {/* players list */}
         {players.map((player) => (
            <Player
               name={player.name}
               id={player.id}
               score={player.score}
               key={player.id.toString()}
               removePlayer={handleRemovePlayer}
               changeScore={handleScoreChange}
               isHighScore={player.score === highScore && highScore !== 0}
            />
         ))}
         <AddPlayerForm addPlayer={handleAddPlayer} />
      </div>
   );
}

export default App;
