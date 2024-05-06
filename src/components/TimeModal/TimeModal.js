import React, { useState } from 'react'

function TimeModal({ active, setActive, setChangeDate }) {

    let todayDate = new Date();
    let todayText = `${todayDate.getFullYear()}/${todayDate.getMonth()}/${todayDate.getDate()}`
    let tomorrowDate = new Date(todayDate);
    tomorrowDate.setDate(todayDate.getDate() + 1);
    let tomorrowText = `${tomorrowDate.getFullYear()}/${tomorrowDate.getMonth()}/${tomorrowDate.getDate()}`

    const [date, setDate] = useState(todayText);
    const [startTime, setStartTime] = useState("00:00");
    const [endTime, setEndTime] = useState("00:00");

    const saveTime = () => {
        setChangeDate(date, [startTime, endTime]);
        setActive();
    }

    const handleTime = (e, name) => {
        if (name === "start") {
            setStartTime(e.target.value)
        } else {
            setEndTime(e.target.value)
        }
    }

    const handleSelect = (e) => {
        setDate(e.target.value)
    }


    return (
        <div id="popup-modal" tabindex="-1" className={`${active ? "flex" : "hidden"}  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-900/40`}>
            <div className="relative p-4 w-full max-w-md max-h-full">

                <div className="relative rounded-lg shadow bg-gray-700">
                    <button type="button" onClick={() => { setActive() }}
                        className="absolute top-1.5 end-1.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>

                    <div className="p-4 md:p-5 text-center flex flex-col">

                        <div className='basis-full md:basis-1/5 px-1  mt-5 mb-2'>
                            <select id="date"
                                onChange={(e) => { handleSelect(e) }}
                                className="w-full block py-4 px-2 m-0 text-sm text-gray-100 bg-gray-600 outline-none rounded-md">
                                <option defaultValue value={todayText}>Today</option>
                                <option value={tomorrowText}>Tomorrow</option>
                            </select>
                        </div>
                        <div class="flex space-x-2  justify-center">
                            <div className='flex'>
                                <input type="time" id="time" onChange={(e) => { handleTime(e, "start") }}
                                    class="rounded-lg text-gray-100 bg-gray-600  leading-none block flex-1 w-full text-sm p-2.5 outline-none" min="09:00" max="18:00" value={startTime} required />
                            </div>
                            <div className='flex'>
                                <input type="time" id="time" onChange={(e) => { handleTime(e, "end") }}
                                    class="rounded-lg text-gray-100 bg-gray-600 leading-none block flex-1 w-full text-sm p-2.5 outline-none" min="09:00" max="18:00" value={endTime} required />
                            </div>
                        </div>
                        <div className='flex mt-2'>
                            <button type="button" onClick={() => { saveTime() }}
                                className="w-full py-3 me-2 text-sm font-medium text-gray-100 bg-green-700 rounded-md"> Save </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default TimeModal