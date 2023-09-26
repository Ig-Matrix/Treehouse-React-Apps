import React, { memo } from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";
import Icon from "./Icon";

function Player({ id, name, score, changeScore, removePlayer, isHighScore }) {
   return (
      <div className="player">
         <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(id)}>
               ✖
            </button>
            <Icon isHighScore ={isHighScore}/>
            {name}
         </span>
         <Counter score={score} changeScore={changeScore} id={id} />
      </div>
   );
}

Player.propTypes = {
    id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
   score: PropTypes.number.isRequired,
   changeScore: PropTypes.func.isRequired,
   removePlayer: PropTypes.func.isRequired,
   isHighScore:PropTypes.bool.isRequired
};

const playerPropsAreEqual = (prevProps, nextProps) =>
   prevProps.score === nextProps.score && prevProps.isHighScore === nextProps.isHighScore;
//checks if the props that change are equal

export default memo(Player, playerPropsAreEqual);
