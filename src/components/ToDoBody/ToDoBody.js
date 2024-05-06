import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

// Redux
import { setWindow } from '../../stores/sectionWindow'
import { addTodo } from '../../stores/todos'

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
  const todos = useSelector((state) => state.todos.value);


  let todayDate = new Date();
  let todayText = `${todayDate.getFullYear()}/${todayDate.getMonth()}/${todayDate.getDate()}`

  let yesterdayDate = new Date(todayDate - (24 * 60 * 60 * 1000));
  let yesterdayText = `${yesterdayDate.getFullYear()}/${yesterdayDate.getMonth()}/${yesterdayDate.getDate()}`

  let tomorrowDate = new Date(todayDate);
  tomorrowDate.setDate(todayDate.getDate() + 1);
  let tomorrowText = `${tomorrowDate.getFullYear()}/${tomorrowDate.getMonth()}/${tomorrowDate.getDate()}`


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
    let ToDos = GetToDos();

    Object.keys(ToDos[0]).map((item) => {
      ToDos[0][item].map((todo, index) => {
        dispatch(addTodo([item, todo]))
      })
    })

    setToday(ToDos[0][todayText])
    setTomorrow(ToDos[0][tomorrowText])
    setYesterday(ToDos[0][yesterdayText])

  }, [])

  useEffect(() => {
    let ToDos = GetToDos();

    setToday(ToDos[0][todayText])
    setTomorrow(ToDos[0][tomorrowText])
    setYesterday(ToDos[0][yesterdayText])

  }, [todos])




  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-44 md:h-28 flex justify-center">
        <ToDoBar />
      </div>
      <div className="w-full h-full flex-1 mx-auto text-lg  shadow-lg ">
        <div className='w-full h-full flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0 '>
          <TodoWinow size={sectionsStatus[0]} id="first" title="Yesterday" dateText={yesterdayText} data={yesterday} />
          <TodoWinow size={sectionsStatus[1]} id="second" title="Today" dateText={todayText} data={today} />
          <TodoWinow size={sectionsStatus[2]} id="third" title="Tomorrow" dateText={tomorrowText} data={tomorrow} />
        </div>
      </div>
    </div>
  )
}

export default ToDoBody