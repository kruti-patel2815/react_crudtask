import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecord, updateRecord, deleteRecord } from "./CounterSlicecrud";
import { Formik, Form, Field } from "formik";

const Buttoncrud = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.crud);

  const [editIndex, setEditIndex] = useState(null);

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={
          editIndex !== null
            ? list[editIndex]
            : { Name: "", Surname: "", Mobileno: "" }
        }
        onSubmit={(values, { resetForm }) => {
          if (editIndex !== null) {
            dispatch(updateRecord({ index: editIndex, newData: values }));
            setEditIndex(null);
          } else {
            dispatch(addRecord(values));
          }
          resetForm();
        }}
      >
        {() => (
          <Form>
            <h4>
              Name:
              <Field type="text" name="Name" placeholder="Enter Name" />
            </h4>

            <h4>
              Surname:
              <Field type="text" name="Surname" placeholder="Enter Surname" />
            </h4>

            <h4>
              Mobile-no:
              <Field type="number" name="Mobileno" placeholder="Enter Mobile" />
            </h4>

            <button type="submit">Submit</button>
            <br/>
            <br/>
          </Form>
        )}
      </Formik>

      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Surname</td>
            <td>Mobile-no</td>
            <td>Delete</td>
            <td>Edit</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Surname}</td>
              <td>{item.Mobileno}</td>
              <td>
                <button onClick={() => dispatch(deleteRecord(index))}>
                  Delete
                </button>
              </td>
              <td>
                <button onClick={() => setEditIndex(index)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Buttoncrud;
