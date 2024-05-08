import React, { useState, useEffect } from 'react'

// Redux
import { useDispatch } from "react-redux";
import { deleteTodo } from '../../stores/todos'

function TodoItem({ size, dateText, id, title, priority, description }) {
    const dispatch = useDispatch()
    const [finish, setFinish] = useState(false)

    const detecetedPriority = (priority) => {
        if (priority === '5') {
            return "High"
        } else if (priority === '4') {
            return "Medium"
        }
        else if (priority === '2') {
            return "Low"
        }
        else {
            return "None"
        }
    }

    const deleteItem = () => {
        dispatch(deleteTodo([dateText, id]))
    }
    const handleSelect = (e) => {
        setFinish(!finish)
    }

    return (
        <div className={`w-full flex ${size === "basis-3/12" ? "flex-col" : "flex-row"} items-center  ${finish ?  "bg-gray-600 shadow-sm shadow-gray-500/20": "bg-gray-500/50 "} border border-1 border-gray-500/50  p-2 rounded-md`}>

            <div className='flex flex-col grow '>
                <div className='basis-full flex flex-row items-center'>
                    <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="check">
                        <input type="checkbox"
                            onChange={(e) => { handleSelect(e) }} value={finish}
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-600 checked:bg-gray-600 checked:before:bg-gray-600 hover:before:opacity-10"
                            id="check" />
                        <span
                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                stroke="currentColor" strokeWidth="1">
                                <path fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                    {/* <input id="orange-checkbox" type="checkbox" value="" className="w-4 h-4 text-red-600 focus:ring-red-600 focus:ring-2 bg-gray-100 rounded outline-none " /> */}
                    <p className='ms-2 text-xl text-gray-100'>
                        <span className={`${finish ?"line-through": ""} me-2`}>
                            {title}
                        </span>
                        <span className='text-red-500 no-underline text-sm italic font-bold'>#{detecetedPriority(priority)}</span></p>
                </div>

                <p className={`basis-full ${size === "basis-3/12" ? "hidden" : "block"}  text-base text-gray-200 ps-6`}>{description}</p>
            </div>
            <div className='flex justify-end items-center space-x-1'>
                <button type="button" className="text-white bg-gray-600 font-medium rounded-lg text-sm px-3 py-2" onClick={() => { deleteItem() }}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem