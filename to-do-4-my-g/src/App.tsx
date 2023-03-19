import React,{useState} from 'react';
import './App.css';
import { TaskList } from './components/tasklist/tasklist';
import {v1} from 'uuid'
import { Grid, Button } from '@mui/material';

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
    
    const closeTask = (id: string) => {
      setTasks(
        [...tasks.map((tasks) => 
          tasks.id === id ? {...tasks, isDone: !tasks.isDone } : {...tasks})]
      )
    }

    let tasksForShow = tasks;
    if (filter === "completed") {
      tasksForShow = tasks.filter(t => t.isDone === true);
    }
    if (filter === "active") {
      tasksForShow = tasks.filter(t => t.isDone === false);
    }

  return (
  <div className='all'>
        <Grid container spacing={1}>
            
        <Grid item xs={3}>
            <div className='Sample1'>
            </div>
        </Grid>

        <Grid item xs={6}>
            <div className='appBody'>
                <TaskList tasks={tasksForShow}
                          removeTask={removeTask}
                          addNote={addNote}
                          closeTask={closeTask}/>
                
                <div className='btn-group'>
                  <Button   
                    sx={{margin: '15px'}}
                    variant="outlined" 
                    onClick={ () => {changeFilter("all")}}>Все задачи
                  </Button>
                  <Button
                    sx={{margin: '15px'}}
                    variant="outlined" 
                    onClick={ () => {changeFilter("active")}}>Активно
                  </Button>
                  <Button
                    sx={{margin: '15px'}}
                    variant="outlined" 
                    onClick={ () => {changeFilter("completed")}}>Выполненно
                  </Button>
                </div>
            </div>
        </Grid>

        <Grid item xs={3}>
              <div className='Sample2'>        
              </div>
        </Grid>

      </Grid>
  </div>
  );
}

export default App;
