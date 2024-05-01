import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

// Redux
import { setWindow } from '../../stores/sectionWindow'

// Components
import ToDoBar from '../ToDoBar/ToDoBar'
import TodoWinow from '../ToDoWindow/TodoWinow';
import { GetToDos } from '../../utils/todos';

function ToDoBody() {
  const dispatch = useDispatch();
  const [sectionsStatus, setsectionsStatus] = useState(["basis-3/12", "basis-6/12", "basis-3/12"])
  const [today, setToday] = useState([]);
  const [tomorrow, setTomorrow] = useState([]);
  const [yesterday, setYesterday] = useState([]);

  const sectionWindow = useSelector((state) => state.sectionWindow.value);

  useEffect(() => {
    sectionWindow.map((item, index) => {
      if (item === 0) {
        setsectionsStatus((prev) => {
          prev[index] = "basis-3/12"
          return [...prev]
        })
      } else if (item === 1) {
        setsectionsStatus((prev) => {
          prev[index] = "basis-4/12"
          return [...prev]
        })
      } else {
        setsectionsStatus((prev) => {
          prev[index] = "basis-6/12"
          return [...prev]
        })
      }
    })

  }, [sectionWindow])

  useEffect(() => {
    let date = new Date();
    let today = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
    let ToDos = GetToDos();
    setToday(ToDos[0][today])
  }, [])



  return (
    <div class="h-full w-full flex flex-col">
      <div class="h-44 md:h-28 flex justify-center">
        <ToDoBar />
      </div>
      <div class="w-full h-full flex-1 mx-auto text-lg  shadow-lg ">
        <div className='w-full h-full flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0 '>
          <TodoWinow size={sectionsStatus[0]} id="first" title="Yesterday" data={yesterday} />
          <TodoWinow size={sectionsStatus[1]} id="second" title="Today" data={today} />
          <TodoWinow size={sectionsStatus[2]} id="third" title="Tomorrow" data={tomorrow} />
        </div>
      </div>
    </div>
  )
}

export default ToDoBody