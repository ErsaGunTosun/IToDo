import React from 'react'
import { useDispatch } from "react-redux";

// Redux
import { setWindow } from '../../stores/sectionWindow'

//Components
import TodoItem from '../TodoItem/TodoItem';

function TodoWinow({ size, dateText, id, title, data = [] }) {
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
                            <TodoItem key={index} dateText={dateText} size={size} id={item.id} title={item.title} description={item.description} priority={item.priority} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default TodoWinow