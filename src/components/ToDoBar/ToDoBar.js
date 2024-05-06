import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid';

// Redux
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from '../../stores/todos';

import { CreateToDo } from '../../utils/todos';

function ToDoBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(0);

  let todayDate = new Date();
  let todayText = `${todayDate.getFullYear()}/${todayDate.getMonth()}/${todayDate.getDate()}`

  const addToDo = () => {
    if (title.length >= 7 && description.length > 0 && priority >= 0) {
      setTitle("");
      setDescription("");
      let id = uniqid();
      CreateToDo(id,title, description, priority)
      dispatch(addTodo([todayText, {id: id, title: title, description: description, priority: priority }]))
    }
    else {
      console.error("EK")
    }
  }

  const handleInput = (e, id) => {
    if (id == "title") {
      setTitle(e.target.value)
    }
    else if (id == "description") {
      setDescription(e.target.value)
    }
  }
  const handleSelect = (e) => {
    setPriority(e.target.value)
  }




  return (
    <div className='w-full md:w-6/7 h-full flex flex-wrap items-center px-1 md:px-0 '>

      {/* Add Task Input */}
      <div className='basis-full flex-1 md:basis-3/5 px-1'>
        <div className="relative">
          <input type="search" id="default-search" autoComplete='off' value={title} onChange={(e) => { handleInput(e, "title") }}
            className="w-full block text-sm p-3.5 text-gray-100 bg-gray-700 border border-1 border-gray-700 rounded-md  outline-none" placeholder="Task Title" required />
          <button type="submit" onClick={() => { addToDo() }}
            className="text-gray-100 absolute end-2.5 bottom-2 font-medium rounded-md text-sm px-4 py-2 bg-gray-600 ">
            Add
          </button>
        </div>
      </div>


      {/* Priority Dropdown */}
      <div className='basis-1/2 md:basis-1/5 px-1'>
        <select id="priority" onChange={(e) => { handleSelect(e) }}
          className="w-full block py-4 px-2 m-0 text-sm text-gray-100 bg-gray-700 outline-none rounded-md">
          <option defaultValue value="0">Task Priority</option>
          <option value="5">High Priority</option>
          <option value="4">Medium Priority</option>
          <option value="2">Low Priority</option>
          <option value="1">No Priority</option>
        </select>
      </div>

      {/* Date Picker */}
      <div className='basis-1/2  md:basis-1/5 px-1'>
        <button type="button" className="w-full px-5 py-4 me-2 text-sm font-medium text-gray-100 bg-gray-700 rounded-md"> Task Time</button>
      </div>

      {/* Description Input */}
      <div className='basis-full flex-1 px-1 mb-1'>
        <div>
          <input type="text" id="first_name" autoComplete='off' value={description} onChange={(e) => { handleInput(e, "description") }}
            className="w-full block p-3 text-sm text-gray-100 bg-gray-700 outline-none rounded-md" placeholder="Task Description" required />
        </div>
      </div>

    </div>
  )
}

export default ToDoBar