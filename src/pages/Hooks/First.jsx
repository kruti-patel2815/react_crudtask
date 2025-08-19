import React from 'react'
import { useContext } from 'react'
import { dataContext } from './Usecontext'
const First = () => {

    const start = useContext(dataContext)

  return (
    <div>
      <h1>{start}</h1>
    </div>
  )
}

export default First
