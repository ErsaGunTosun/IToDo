import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";

// Redux
import { setWindow } from '../../stores/sectionWindow'

//Components
import TodoItem from '../TodoItem/TodoItem';

function TodoWindow({ size, dateText, id, title, data = [] }) {
    const dispatch = useDispatch()
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    const { height, width } = useWindowDimensions();

    useEffect(() => {
        console.log(width);
    }, [width])

    return (
        <div className={`${size} bg-gray-700 rounded-md cursor-pointer flex flex-col flex-wrap`} >
            <div className='w-full text-center mt-2' onClick={() => { dispatch(setWindow(id)) }}>
                <p className='text-gray-100 text-xl'>{title}</p>
            </div>
            <div className='scroll-body w-full flex-grow p-2 space-y-1 md:h-36 overflow-y-scroll'>
                {
                    data.map((item, index) => {
                        if (width < 768) {
                            if (size != "basis-8/12") {
                                if (index <= 0) {
                                    return (
                                        <TodoItem
                                            key={index} dateText={dateText} todoStatus={item.finish}
                                            size={size} id={item.id} title={item.title}
                                            description={item.description} priority={item.priority} />
                                    )
                                }

                            }
                            else {
                                return (
                                    <TodoItem
                                        key={index} dateText={dateText} todoStatus={item.finish}
                                        size={size} id={item.id} title={item.title}
                                        description={item.description} priority={item.priority} />
                                )
                            }

                        } else {
                            return (
                                <TodoItem
                                    key={index} dateText={dateText} todoStatus={item.finish}
                                    size={size} id={item.id} title={item.title}
                                    description={item.description} priority={item.priority} />
                            )
                        }

                    })
                }

            </div>
        </div>
    )
}

export default TodoWindow