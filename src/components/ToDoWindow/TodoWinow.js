import React from 'react'
import { useDispatch } from "react-redux";

// Redux
import { setWindow } from '../../stores/sectionWindow'

//Components
import TodoItem from '../TodoItem/TodoItem';

function TodoWinow({ size, id, title, data = [] }) {
    const dispatch = useDispatch()

    return (
        <div className={`${size} bg-gray-700 rounded-md cursor-pointer flex flex-col flex-wrap`} >
            <div className='w-full text-center mt-2' onClick={() => { dispatch(setWindow(id)) }}>
                <p className='text-gray-100 text-xl'>{title}</p>
            </div>
            <div className='w-full flex-grow p-2 space-y-1'>
                {
                    data.map((item, index) => {
                        return (
                            <TodoItem key={index} size={size} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default TodoWinow