import React from 'react'
import PropTypes from 'prop-types';

function Counter({id, changeScore, score}) {
    
  return ( 
    <div className='counter'>
        <button className="counter-action decrement" onClick={()=>changeScore(id, -1)} >-</button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment" onClick={() => changeScore(id, 1)}>+</button>
    </div>
  )
}

//the propTypes objects contains the props being passed to in this case, the counter component and their data types accessed through the importedd PropTypes object
Counter.propTypes = {
  id: PropTypes.number,
  score:PropTypes.number,
  changeScore: PropTypes.func,
}

export default Counter;