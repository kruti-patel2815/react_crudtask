import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";

const Resultapi = () => {
  const token = "XjFAg7Jz1EoAStIL";

  const [list, setList] = useState([]);
  const [ini, setIni] = useState({
    name: "",
    sub1: "",
    sub2: "",
    sub3: "",
  });

  const [editId, setEditId] = useState(null);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    viewData();
  }, []);

  function viewData() {
    axios
      .get("https://generateapi.onrender.com/api/Result", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setList(res.data.Data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }

  const handleSubmit = (values, { resetForm }) => {
    if (editId !== null) {
      const { _id, ...rest } = values;
      axios
        .patch(`https://generateapi.onrender.com/api/Result/${editId}`, rest, {
          headers: { Authorization: token },
        })
        .then(() => {
          console.log("Data edited");
          viewData();
          resetForm();
          setEditId(null);
          setIni({ name: "", sub1: "", sub2: "", sub3: "" });
        })
        .catch((error) => {
          console.error("Edit error:", error);
        });
    } else {
      axios
        .post("https://generateapi.onrender.com/api/Result", values, {
          headers: { Authorization: token },
        })
        .then(() => {
          console.log("Data added");
          resetForm();
          viewData();
        })
        .catch((error) => {
          console.error("Submit error:", error);
        });
    }
  };

  const deleteData = (id) => {
    axios
      .delete(`https://generateapi.onrender.com/api/Result/${id}`, {
        headers: { Authorization: token },
      })
      .then(() => {
        console.log("Data deleted");
        viewData();
      })
      .catch((error) => {
        console.error("Delete error:", error);
      });
  };

  const editData = (item) => {
    setIni(item);
    setEditId(item._id);
  };

  const search = () => {
    const filtered = list.filter(
      (item) =>
        item.name === searchItem ||
        item.sub1 === searchItem ||
        item.sub2 === searchItem ||
        item.sub3 === searchItem
    );
    setList(filtered);
    setSearchItem("");
  };

  const total = (item) =>
    parseInt(item.sub1) + parseInt(item.sub2) + parseInt(item.sub3);

  const percentage = (item) =>
    (
      (parseInt(item.sub1) + parseInt(item.sub2) + parseInt(item.sub3)) /
      3
    ).toFixed(2);

  const min = (s1, s2, s3) =>
    Math.min(parseInt(s1), parseInt(s2), parseInt(s3));

  const max = (s1, s2, s3) =>
    Math.max(parseInt(s1), parseInt(s2), parseInt(s3));

  return (
    <>
      <h1>-: Api Result :-</h1>

      <Formik enableReinitialize initialValues={ini} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Name:</label>
            <Field name="name" type="text" required />
          </div>
          <div>
            <label>Subject 1:</label>
            <Field name="sub1" type="number" required />
          </div>
          <div>
            <label>Subject 2:</label>
            <Field name="sub2" type="number" required />
          </div>
          <div>
            <label>Subject 3:</label>
            <Field name="sub3" type="number" required />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <br />
      <input
        type="text"
        placeholder="Enter filter item"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button onClick={search}>Search</button>

      <br />
      <br />

      <table border={1}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Sub1</th>
            <th>Sub2</th>
            <th>Sub3</th>
            <th>Total</th>
            <th>Percentage</th>
            <th>Min</th>
            <th>Max</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.sub1}</td>
              <td>{item.sub2}</td>
              <td>{item.sub3}</td>
              <td>{total(item)}</td>
              <td>{percentage(item)}%</td>
              <td>{min(item.sub1, item.sub2, item.sub3)}</td>
              <td>{max(item.sub1, item.sub2, item.sub3)}</td>
              <td>
                <button onClick={() => deleteData(item._id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => editData(item)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Resultapi;
