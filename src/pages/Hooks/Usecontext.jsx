import React from 'react'
import { createContext,useState } from 'react'
import First from "./First"

export const dataContext = createContext()
const Usecontext = () => {

    const[data,setData] = useState('Hello')

  return (
    <div>
      <dataContext.Provider value={data}>
        <First></First>
      </dataContext.Provider>
    </div>
  )
}

export default Usecontext
