import React, { useState } from "react";
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

    const [nextPlayerId, setNextPlayerId] = useState(5);
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
                id: nextPlayerId,
            },
        ]);
        setNextPlayerId((prevId) => prevId + 1);
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
                />
            ))}
            <AddPlayerForm addPlayer={handleAddPlayer} />
        </div>
    );
}

export default App;
