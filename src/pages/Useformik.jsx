import React from "react";
import { useFormik } from "formik";
import { useState } from "react";

const Useformik = () => {
const [ini,setIni] = useState({
    name:"",
    surname:""
})
const  [list,setList]=useState([])

const f= useFormik({
    initialValues : ini,
    onSubmit :(values)=>{
        console.log(values);
        
        setList([...list,values])
        f.handleReset()
    }
})


  return (
    <div>
        <form action="" onSubmit={f.handleSubmit}>
            <input type="text" name="name" value={f.values.name} onChange={f.handleChange} id=""/><br/><br/>
            <input type="text" name="surname" value={f.values.surname} onChange={f.handleChange} id=""/><br/><br/>
            <button type="submit">Submit</button>


        </form>
        <table border={1}>
            <tr>
                <td>Name</td>
                <td>Surname</td>
            </tr>
            {
                list.map((i,index)=>(
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.surname}</td>
                    </tr>
                ))
            }
        </table>

    </div>
  );
};

export default Useformik;
