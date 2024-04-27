import React from 'react'

import ToDoBar from '../ToDoBar/ToDoBar'

function ToDoBody() {
  return (
    <div class="h-full w-full flex flex-col bg-yellow-500 ">
      <div class="h-20 flex justify-center bg-blue-500">
        <ToDoBar />
      </div>
      <div class="w-full h-full flex-1 mx-auto p-4 text-lg bg-red-500 shadow-lg ">
        ToDoBody
      </div>
    </div>
  )
}

export default ToDoBody