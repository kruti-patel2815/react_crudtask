import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

const Crudapi3 = () => {

    const [ini, setIni] = useState({
        name: "",
        surname: ""
    })

    const [list, setList] = useState([])
    
    const token = "CXnndU9oYIFaNivV"

    const [editId,setEditId]= useState(null)
    
    useEffect(()=>{
        viewData()
    },[])

    function viewData() {
        axios.get(" https://generateapi.techsnack.online/api/data", {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                setList(res.data.Data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleSubmit = (values, { resetForm }) => {


        const {_id, ...rest}=values
        if(editId!=null)
        {
            axios.patch(`https://generateapi.techsnack.online/api/data/${editId}`,rest,{
            headers:{
                Authorization: token
            }
        })
        .then((res)=>{
            console.log("Data edited")
            setEditId(null)
            viewData()

            setIni({
                name: "",
                surname: ""
            })

        })
        .catch((error)=>{
            console.log(error);
        })
        }

        else{
             axios.post("https://generateapi.techsnack.online/api/data", values, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                console.log("Data successfully added")
                resetForm()
                viewData()
            })
            .catch((error) => {
                console.log(error);

            })
        }
       
    }

    const deleteData=(deleteId)=>{

        axios.delete(` https://generateapi.techsnack.online/api/data/${deleteId}`,{
            headers:{
                Authorization: token
            }
        })
        .then((res)=>{
            console.log("Data deleted")
            viewData()
        })

        .catch((error)=>{
            console.log(error);
        })
    }
    

    const editData=(i)=>{
        setIni(i)
        setEditId(i._id)
    }

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={ini}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Field name="name"></Field><br /><br />
                    <Field name="surname"></Field><br /><br />
                    <button type="submit">Submit</button><br /><br />
                </Form>
            </Formik>

            <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>

                {
                    list.map((i,index)=>(
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                            <td><button onClick={()=>deleteData(i._id)}>Delete</button></td>
                            <td><button onClick={()=>editData(i)}>Edit</button></td>
                            
                        </tr>
                    ))
                }
            </table>

        </>
    )

}

export default Crudapi3