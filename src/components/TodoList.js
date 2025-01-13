import React from 'react'

function TodoList (props)  {
  return (
    <>
        {/* here we will make the component and display it  */}
        <li className="list-item">
        {props.item}  <i className="fa-solid fa-trash-can icon-delete" onClick={() => props.del(props.index)}></i>
        </ li>
    </>
  )
}

export default TodoList