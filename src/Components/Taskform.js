import React, { useState } from 'react'
import {Button } from  'react-bootstrap'


function Taskform() {

const [input, setinput] = useState("create some task ")

const onchangehandler=(e) =>{
    console.log(e)
}

  return (
    <div>
        <form className='taskform'>
      
         <Button variant="warning">Create Task</Button>{' '}
         <input type='text' placeholder = "create a Task" value={input} name='text' className='task-input' onChange={onchangehandler} />
        </form>
    </div>
  )
}

export default Taskform