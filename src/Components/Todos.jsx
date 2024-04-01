import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const Todos = () => {
    let [input, setInput] = useState("")

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


    return (
        <form className=' flex gap-[20px] flex-col' onSubmit={addTodoHandler}>
            <label className=' font-bold text-[30px] text-[#EAF2EF]'>Enter Your Task</label>
            <div className=' flex gap-[10px]'>
                <input type="text" className=' w-[80rem] p-[10px] border-[#EAF2EF] rounded-[5px]' value={input} onChange={(e) => { setInput(e.target.value) }} />
                <button type='submit' className=' font-bold bg-[#EAF2EF] w-[80px] p-[10px] rounded-[5px] hover:bg-gray-400'>ADD</button>
            </div>
        </form>
    )
}

export default Todos
