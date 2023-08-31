import React, { useState } from "react";

function TodoForm() {
  const [newItem, setNewItem] = useState("ADD AN TODO");

  const [items, setItems] = useState([]);

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function addItem() {
    if (!newItem) {
      alert("Please enter an Item.");
    }

    const item = {
      id: Math.floor(Math.random() * 10000),
      value: newItem
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
    console.log(newItem);
  }
  return (
    <>
      <div className="container">
        <h1>Todo list Application</h1>
        <div className="body">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={() => addItem()}> Add Todos on Click</button>
        </div>

        <div className="output">
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}{" "}
                  <button onClick={() => deleteItem(item.id)}>
                    <span>❌</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoForm;
