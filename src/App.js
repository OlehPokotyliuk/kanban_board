// kanban application
import React from 'react';
import './App.css';
import { TaskList } from './Components/TaskList/TaskList';
import { AddTask } from './Components/Search/AddTask';

function App() {
  
  return (
    <div className="App">
      <div className="wrapper">
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
