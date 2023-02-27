import React,{useState} from 'react';
import './App.css';
import { TaskList } from './components/tasklist/tasklist';
import {v1} from 'uuid'

export type filterValuetype = "all" | "completed" | "active" 

function App() {

    let [tasks, setTasks] = useState(
      [ {id: v1(), text: 'Undone Sample', isDone: false },
        {id: v1(), text: 'Undone Sample', isDone: false },
        {id: v1(), text: 'Done Sample', isDone: true },
] );
    let [filter, filtred ] = useState<filterValuetype>("all");
    
    function changeFilter(value: filterValuetype) {
      filtred(value);
    }

    function removeTask(id: string) {
      let filteredTasks = tasks.filter (t => t.id !== id)
      setTasks(filteredTasks);
    }

    function addNote(note1: string) {
      let newTask = { id: v1(), text: note1, isDone: false};
      let newTasks = [newTask, ...tasks];
      setTasks(newTasks);
    }

    let tasksForShow = tasks;
    if (filter === "completed") {
      tasksForShow = tasks.filter(t => t.isDone === true);
    }
    if (filter === "active") {
      tasksForShow = tasks.filter(t => t.isDone === false);
    }

  return (
   <div className='appBody'>
      <TaskList tasks={tasksForShow}
                removeTask={removeTask}
                addNote={addNote}/>
    <div>
      <button onClick={ () => {changeFilter("all")}}>Все задачи</button>
      <button onClick={ () => {changeFilter("active")}}>Активно</button>
      <button onClick={ () => {changeFilter("completed")}}>Выполненно</button>
    </div>
   </div>
  

  );
}

export default App;
