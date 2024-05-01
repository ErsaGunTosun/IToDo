import React from 'react'

function TodoItem({size}) {
    return (
        <div className={`w-full flex ${size === "basis-3/12" ? "flex-col" : "flex-row"} items-center bg-gray-500 p-2 rounded-md`}>

            <div className='flex flex-col grow '>
                <div className='basis-full flex flex-row items-center'>
                    <input id="checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                    <p className='ms-2 text-xl text-gray-100'>Do Homework <span className='text-red-500 text-sm italic font-bold'>#High Priority</span></p>
                </div>

                <p className={`basis-full ${size === "basis-3/12" ? "hidden" : "block"}  text-base text-gray-200 ps-6`}>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </div>
            <div className='flex justify-end items-center space-x-1'>
                <button type="button" class="text-white bg-gray-600 font-medium rounded-lg text-sm px-3 py-2">Delete</button>
                <button type="button" class="text-white bg-gray-600 font-medium rounded-lg text-sm px-3 py-2">Details</button>
            </div>
        </div>
    )
}

export default TodoItem