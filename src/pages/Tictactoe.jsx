// import React from 'react'

// const Tictactoe = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Tictactoe
// import { useFormik } from 'formik'
// import React, { useState } from 'react'

// const UseFormikExample = () => {

//     const [ini, setIni] = useState({
//         name: '',
//         surname: ''
//     })

//     const [list , setList] = useState([])


//     const f = useFormik({
//         initialValues: ini,
//         onSubmit : (values) => {
//             console.log(values);
//             setList([...list , values])
//             f.handleReset()
//         } 

//     })
    
    
//   return (
//     <div>
//       <form action="" onSubmit={f.handleSubmit}>
//         <input type="text" name="name" value={f.values.name} onChange={f.handleChange} id="" /> <br /><br />
//         <input type="text" name="surname" value={f.values.surname} onChange={f.handleChange} id="" /> <br /><br />
//         <button type='submit'>Submit</button>
//       </form>

//         <table border={1}>
//             <tr>
//                   <td>NAme</td>
//                   <td>SURNAme</td>
//             </tr>
//             {
//                 list.map((i , index) => (
//                     <tr>
//                         <td>{i.name}</td>
//                         <td>{i.surname}</td>
//                     </tr>
//                 ))
//             }
//         </table>

//     </div>
//   )
// }

// export default UseFormikExample
