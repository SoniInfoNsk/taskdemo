import React from 'react'
import {Button} from 'react-bootstrap'
function Task() {
  return (
    <div>
<Button onClick={()=>(alert("New task will be created"))} variant="primary" style={{width:150}} >Create Task </Button>{' '}
    </div>
  )
}

export default Task