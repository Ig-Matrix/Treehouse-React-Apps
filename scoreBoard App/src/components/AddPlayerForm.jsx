import React, {useState} from 'react'

// controlled component is a component that renders a form element whose value is controlled by react 
function AddPlayerForm(props) {
    const [value, setValue] = useState('') //react uses this state to control value of the form element

    const handleSubmit =(e)=> {
        e.preventDefault();
        props.addPlayer(value);
        setValue('')
    }


  return (
    <form onSubmit={(e)=> handleSubmit(e)}>
        <input type="text" value={value} placeholder="Enter a player's name" onChange={(e) => setValue(e.target.value)}/>
        <input type="submit" value="Add Player"/>
    </form>
  )
}

export default AddPlayerForm