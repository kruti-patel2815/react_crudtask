import React from 'react'
import { useContext } from 'react'
import { dataContext } from './Usecontexttask1'

const Task1first = () => {
    const {data,increment,decrement} = useContext(dataContext)

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={increment}>+++</button>
      <button onClick={decrement}>---</button>
    </div>
  )
}

export default Task1first

