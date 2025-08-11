import React from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";

const Apipostman = () => {
  const [list, setList] = useState([]);

  const token = "sGGNCrtoL454d3PL";

  const [ini, setIni] = useState({
    boys: "",
    girls: "",
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    viewData();
  }, []);

  function viewData() {
    axios
      .get("https://generateapi.onrender.com/api/product", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setList(res.data.Data);
        console.log(res.data.Data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = (values, { resetForm }) => {
    const { _id, ...rest } = values;
    if (editId != null) {
      axios
        .patch(`https://generateapi.onrender.com/api/product/${editId}`, rest, {
          headers: {
            Authorization: token,
          },
        })
        .then(() => {
          viewData();
          setIni({
            boys: "",
            girls: "",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post(" https://generateapi.onrender.com/api/product", values, {
          headers: {
            Authorization: token,
          },
        })
        .then(() => {
          viewData();
          resetForm();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const deleteData = (id) => {
    axios
      .delete(`https://generateapi.onrender.com/api/product/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        viewData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editData = (item) => {
    setIni(item);
    setEditId(item._id);
  };

  return (
    <div>
      <Formik enableReinitialize initialValues={ini} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="boys"></Field>
          <br />
          <br />
          <Field type="text" name="girls"></Field>
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <table border={1}>
        <tr>
          <td>Boys</td>
          <td>Girls</td>
          <td>Delete</td>
          <td>Edit</td>
        </tr>

        {list.map((i, index) => (
          <tr>
            <td>{i.boys}</td>
            <td>{i.girls}</td>
            <td>
              <button onClick={() => deleteData(i._id)}>Delete</button>
            </td>
            <td>
              <button onClick={() => editData(i)}>Edit</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Apipostman;

//             const { _id, ...rest } = values
