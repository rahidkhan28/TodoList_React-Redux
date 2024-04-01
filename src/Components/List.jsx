import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

const List = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


    return (
        <div className=' flex flex-col m-[50px]'>
         <label className=' font-bold text-[30px] text-[#EAF2EF]'>Your Tasks</label>
            <ul className=' flex gap-[20px] m-[5px] flex-col'>
            {todos.map((todo) => (
                <div className=' flex gap-[10px]'>
                <li
          className=' text-black font-bold bg-[#EAF2EF] w-[80rem] p-[10px] rounded-[5px]'
            key={todo.id}
          >
            <div className='text-black'>{todo.text}</div>
            
          </li>
          <button
             onClick={() => dispatch(removeTodo(todo.id))}
             className=' font-bold bg-red-700 w-[80px] p-[10px] rounded-[5px] text-white hover:bg-red-900'
            >
                DELETE
            </button>
                </div>
          
        ))}
            </ul>
        </div>

    )
}

export default List
