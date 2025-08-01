import React from "react";
import { Field } from "formik";
import { Form } from "formik";
import { Formik } from "formik";
import { useState } from "react";

const Formiktag = () => {
  const [ini, setIni] = useState({
    name: "",
    surname: "",
  });
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    if (editId != null) {
      let copyData = [...list];
      copyData[editId] = values;
      setList(copyData);
      setEditId(null);
      setIni({
        name: "",
        surname: "",
      });
    } else {
      setList([...list, values]);
    }
    resetForm();
  };
  const deleteData=(index)=>{
    let copy = [...list];
    copy.splice(index,1);
    setList(copy);
  }
  const editData = (i, index) => {
    setIni(i);
    setEditId(index);
  };
  return (
    <div>
      <Formik enableReinitialize initialValues={ini} onSubmit={handleSubmit}>
        <Form>
          <Field name="name"></Field>
          <br />
          <br />
          <Field name="surname"></Field>
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
        
      </Formik>
      <table border={1}>
          <tr>
            <td>name</td>
            <td>surname</td>
            <td>Delete</td>
            <td>Edit</td>
          </tr>

          {list.map((i, index) => (
            <tr>
              <td>{i.name}</td>
              <td>{i.surname}</td>
              <td>
                <button onClick={() => deleteData(index)}>Delete</button>
              </td>
              <td>
                <button onClick={() => editData(i, index)}>Edit</button>
              </td>
            </tr>
          ))}
        </table>
    </div>
  );
};

export default Formiktag;

