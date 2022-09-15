import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Task from './Components/Task';
import Taskform from './Components/Taskform';
import { useState } from 'react';



function App() {

  const [Task, setTask] = useState([ ])

  function handlesubmit(e){
    e.preventDefault ()

const newTask ={
  id: new Date().getTime(),
  text : task,

  completed: false

}

  }



  return (
    <div className="App">
   
<form  onSubmit={handlesubmit}>
  <button type='submit' >Add Task</button>
  <input type='text'  onChange={(e)=>(setTask(e.target.value))} value={Task}/>


</form>



    </div>
  );
}

export default App;
