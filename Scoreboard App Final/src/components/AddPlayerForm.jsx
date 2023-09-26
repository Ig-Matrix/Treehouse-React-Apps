import React, { useRef } from "react";
import PropTypes from "prop-types";

// controlled component is a component that renders a form element whose value is controlled by react
function AddPlayerForm({ addPlayer }) {
   const playerInput = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();
      if (playerInput.current.value !== "") {
         addPlayer(playerInput.current.value);
      }
      // playerInput.current.value='' or
      e.currentTarget.reset();
   };

   return (
      <form onSubmit={(e) => handleSubmit(e)}>
         <input
            type="text"
            ref={playerInput}
            placeholder="Enter a player's name"
         />
         <input type="submit" value="Add Player" />
      </form>
   );
}

AddPlayerForm.propTypes = {
   addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerForm;
