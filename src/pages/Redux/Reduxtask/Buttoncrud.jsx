import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import {
  addItem,
  deleteItem,
  setEditIndex,
  updateItem,
} from "./CounterSlicecrud";

const Buttoncrud = () => {
  const { list, editIndex } = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  let ini;

  if (editIndex !== null) {
    ini = list[editIndex];
  } else {
    ini = { name: "", surname: "", mobileno: "" };
  }

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={ini}
        onSubmit={(values, { resetForm }) => {
          if (editIndex !== null) {
            dispatch(updateItem({ index: editIndex, newData: values }));
          } else {
            dispatch(addItem(values));
          }
          resetForm();
        }}
      >
        <Form>
          <Field name="name" placeholder="Name" />
          <br />
          <br />
          <Field name="surname" placeholder="Surname" />
          <br />
          <br />
          <Field name="mobileno" placeholder="Mobile No" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <table border="1">
        <tr>
          <td>Name</td>
          <td>Surname</td>
          <td>Mobileno</td>
          <td>Delete</td>
          <td>Edit</td>
        </tr>

        {list.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.mobileno}</td>
            <td>
              <button onClick={() => dispatch(deleteItem(index))}>
                Delete
              </button>
            </td>
            <td>
              <button onClick={() => dispatch(setEditIndex(index))}>
                Edit
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Buttoncrud;
