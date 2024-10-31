import React from "react";
import "./style.css";
import { useState } from "react";
import CloseBtn from "./imges/close.png";
import ToDo from "./imges/ToDo.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [inputValue, setInputValue] = useState(""); // State for input field
  const [tasks, setTasks] = useState([]); // State to keep track of tasks

  const addTask = () => {
    if (inputValue.trim() === "") return; // Prevent adding empty tasks

    setTasks([...tasks, inputValue]); // Add new task to the tasks array
    setInputValue(""); // Clear the input field
  };

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove)); // Remove the task from the array
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="content">
            <img src={ToDo} alt="img" />
            <div className="nav-text">
              <Link to="/">Home</Link>
              <Link className="Active" to="/about">
                About
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="main-header">
          <div className="container">
            <div className="content-main">
              <h1>Simple ToDo App</h1>
              <p>This todo app for test design.</p>
            </div>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="input">
              <input
                type="text"
                placeholder="Write Text here . . ."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Update input state
              />
              <button onClick={addTask}>+ Add New</button>
            </div>
            <div className="todo-list">
              {tasks.map((task, index) => (
                <div key={index} className="todo-item">
                  <p>{task}</p>
                  <img
                    src={CloseBtn}
                    alt="close"
                    onClick={() => removeTask(task)} // Call removeTask on click
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="container last-P">
          <p>Total List: {tasks.length}</p> {/* Display task count */}
        </div>
      </main>
    </div>
  );
};

export default Home;
