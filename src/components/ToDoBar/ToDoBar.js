import React from 'react'

function ToDoBar() {
  return (
    <div className='w-5/6 h-full flex flex-wrap items-center bg-red-500'>

      {/* Add Task Input */}
      <div className='basis-3/5'>
        <div class="relative">
          <input type="search" id="default-search" class="block w-full p-3.5 border-1 border text-sm outline-0" placeholder="Task Title" required />
          <button type="submit" class="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-black ">Add</button>
        </div>
      </div>


      {/* Priority Dropdown */}
      <div className='basis-1/5'>
        <select id="priority" class="bg-gray-50 m-0 text-gray-900 text-sm  block w-full p-4 outline-none">
          <option selected>Choose a priority</option>
          <option value="5">High Priority</option>
          <option value="4">Medium Priority</option>
          <option value="2">Low Priority</option>
          <option value="1">No Priority</option>
        </select>
      </div>

      {/* Date Picker */}
      <div className='basis-1/5'>
        <button type="button" class="text-white w-full bg-gray-900 font-medium border-none  text-sm px-5 py-4 me-2 "> Task Last Time</button>
      </div>

      {/* Description Input */}
      <div className='basis-1 flex-1 mt-1'>
        <div>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm   block w-full p-3" placeholder="Task Description" required />
        </div>
      </div>

    </div>
  )
}

export default ToDoBar