import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

// Redux
import { setWindow } from '../../stores/sectionWindow'

// Components
import ToDoBar from '../ToDoBar/ToDoBar'
import TodoWinow from '../ToDoWindow/TodoWinow';

function ToDoBody() {
  const dispatch = useDispatch();
  const [sectionsStatus, setsectionsStatus] = useState(["basis-1/9", "basis-7/9", "basis-1/9"])

  const sectionWindow = useSelector((state) => state.sectionWindow.value);

  useEffect(() => {
    sectionWindow.map((item, index) => {
      if (item === 0) {
        setsectionsStatus((prev) => {
          prev[index] = "basis-1/9"
          return [...prev]
        })
      } else if (item === 1) {
        setsectionsStatus((prev) => {
          prev[index] = "basis-4/9"
          return [...prev]
        })
      } else {
        setsectionsStatus((prev) => {
          prev[index] = "basis-7/9"
          return [...prev]
        })
      }
    })

  }, [sectionWindow])


  return (
    <div class="h-full w-full flex flex-col">
      <div class="h-44 md:h-28 flex justify-center">
        <ToDoBar />
      </div>
      <div class="w-full h-full flex-1 mx-auto text-lg  shadow-lg ">
        <div className='w-full h-full flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0 '>
          <TodoWinow size={sectionsStatus[0]} id="first" title="Yesterday" />
          <TodoWinow size={sectionsStatus[1]} id="second" title="Today" />
          <TodoWinow size={sectionsStatus[2]} id="third" title="Tomorrow" />
        </div>
      </div>
    </div>
  )
}

export default ToDoBody