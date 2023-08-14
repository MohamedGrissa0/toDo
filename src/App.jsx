import React, { useState } from "react";
import Todoelement from "./Todoelement";
import Inputarea from "./Inputarea";


function App() {
  const [inputText, setInputText] = useState([])
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteitem(id)
  {
    setItems((prev)=>{ 
        return prev.filter((item,index)=>
        { 
            return index!==id
             
        })
    })
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     <Inputarea change={handleChange} 
                text = {inputText}
                Add = {addItem}
      />
      <div>
        <ul>
          {items.map((todoItem,index) => (
            <Todoelement key={index} id={index} text={todoItem} oncheck={deleteitem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App ;
