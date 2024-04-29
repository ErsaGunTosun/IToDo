import React from 'react'
import { useDispatch } from "react-redux";

// Redux
import { setWindow } from '../../stores/sectionWindow'

function TodoWinow({size,id,title}) {
    const dispatch = useDispatch()

    return (
        <div className={`${size} bg-gray-700 rounded-md cursor-pointer`} onClick={() => { dispatch(setWindow(id)) }}>
            <div className='w-full text-center mt-2'>
                <p className='text-gray-100 text-xl'>{title}</p>
            </div>
        </div>
    )
}

export default TodoWinow