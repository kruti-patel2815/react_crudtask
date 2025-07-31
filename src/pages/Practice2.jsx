import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
const Practice2 = () => {
  const [ini, setIni] = useState({
    name: '',
    surname: ''
  })

  const [list, setList] = useState([])
  const [editId , setEditId] = useState(null)


  const f = useFormik({
    enableReinitialize : true,
    initialValues: ini,
    validationSchema : Yup.object({
      name : Yup.string()
      .required('Enter Your name'),
      surname : Yup.string()
      .required('Enter surname')
    }),
    onSubmit: (values) => {
      console.log(values);

      if(editId != null)
      {
          let copyData = [...list]
          copyData[editId] = values
          setList(copyData)
          setEditId(null)
          setIni({
            name: '',
            surname: ''
          })
      }
      else
      {
        setList([...list, values])
      }
      f.handleReset()
    }

  })
  
  const deleteData = (index) => {
    let copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  };

  const editData = (item, index) => {
    console.log(item);
    setIni(item)
    setEditId(index)
    
  }

  return (
    <div>
     <form action="" onSubmit={f.handleSubmit}>
        <input type="text" name="name" value={f.values.name} onChange={f.handleChange} id="" />
        
          {
            f.touched.name && f.errors.name ? <p style={{color : 'red'}}>{f.errors.name}</p> : null
          }

         <br /><br />
        <input type="text" name="surname" value={f.values.surname} onChange={f.handleChange} id="" /> 
        
        {
          f.touched.surname && f.errors.surname ? <p style={{color : 'red'}}>{f.errors.surname}</p> : null
        }

        <br /><br />
        <button type='submit'>Submit</button>
      </form>

      <table border={1}>
        <tr>
          <td>Name</td>
          <td>Surname</td>
          <td>Delete</td>
          <td>EDIT</td>
        </tr>
        {
          list.map((i, index) => (
            <tr>
              <td>{i.name}</td>
              <td>{i.surname}</td>
               <td>
                <button onClick={()=> deleteData(index)}>Delete</button>
              </td>
              <td>
                <button onClick={() => editData(i,index)}>EDIT</button>
              </td>
             
            </tr>
          ))
        }
      </table>

     
    </div>
  );
};

export default Practice2;
