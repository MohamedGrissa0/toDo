import React from "react";


function Inputarea(props)
{
    return  <div className="form">
    <input onChange={props.change} type="text" value={props.text} />
    <button onClick={props.Add}>
      <span>Add</span>
    </button>
  </div>
}


export default Inputarea