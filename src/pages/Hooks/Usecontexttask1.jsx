import React from 'react'
import { createContext,useState } from 'react'
import Task1first from './Task1first'

export const dataContext = createContext()

const Usecontexttask1 = () => {

    const[data,setData] = useState(0)

    const increment = ()=>{
        setData(data + 1)
    }

    const decrement = ()=>{
        setData(data - 1)
    }

  return (
    <div>
      <dataContext.Provider value = {{data, increment, decrement}}>
        <Task1first></Task1first>
      </dataContext.Provider>
    </div>
  )
}

export default Usecontexttask1
