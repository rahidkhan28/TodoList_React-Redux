import React from 'react'
import Todos from './Components/Todos'
import './index.css'
import List from './Components/List'


const App = () => {
  return (
    <div className=' flex items-center m-[50px] flex-col'>
      <h1 className=' text-white text-[50px] font-bold mb-[30px]'>TODO's List</h1>
      <Todos/>
      <List/>
    </div>
  )
}

export default App
