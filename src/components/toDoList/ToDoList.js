import React, { useState } from "react";

function ToDoList() {
  const [items, setItems] = useState([]);

  function addItem(description) {
    setItems([...items, { description }]);
  }

  function deleteItem(index) {
    setItems(items.filter((item, i) => i !== index));
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addItem(e.target.item.value);
          e.target.item.value = "";
        }}
      >
        <input
          className="peer h-10 w-96 rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          name="item"
        />
        <button
          className="rounded-lg ml-6 px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300"
          type="submit"
        >
          Add
        </button>
      </form>
      <ul>
        {items.map((item, index) => (
          <ToDoItem
            key={index}
            index={index}
            description={item.description}
            onDelete={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

function ToDoItem({ index, description, onDelete }) {
  return (
    <li>
      {description}
      <button onClick={() => onDelete(index)}>Delete</button>
    </li>
  );
}

export default ToDoList;
