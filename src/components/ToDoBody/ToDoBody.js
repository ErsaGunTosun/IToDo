import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setWindow } from '../../stores/sectionWindow'

import ToDoBar from '../ToDoBar/ToDoBar'

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
          <div className={`${sectionsStatus[0]} bg-gray-700 rounded-md cursor-pointer`} onClick={() => { dispatch(setWindow("first")) }}>
            <div className='w-full text-center mt-2'>
              <p className='text-gray-100 text-xl'>Yesterday</p>
            </div>
          </div>
          <div className={`${sectionsStatus[1]} bg-gray-700 rounded-md cursor-pointer `} onClick={() => { dispatch(setWindow("second")) }}>
            <div className='w-full text-center mt-2'>
              <p className='text-gray-100 text-xl'>Today</p>
            </div>
          </div>
          <div className={`${sectionsStatus[2]} bg-gray-700 rounded-md cursor-pointer`} onClick={() => { dispatch(setWindow("third")) }}>
            <div className='w-full text-center mt-2'>
              <p className='text-gray-100 text-xl'>Tomorrow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoBody