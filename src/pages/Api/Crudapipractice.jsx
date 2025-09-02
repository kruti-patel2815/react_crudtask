import React from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";

const Crudapipractice = () => {
  const token = "uhN3qxDwgjK3ZceW";

  const [list, setList] = useState([]);

  const [ini, setIni] = useState({
    name: "",
    surname: "",
  });

  const [editId, setEditId] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [filterItem, setFilterItem] = useState([]);

  useEffect(() => {
    viewData();
  }, []);

  function viewData() {
    axios
      .get("https://generateapi.onrender.com/api/user6", {
        headers: {
          Authorization: token,
        },
      })

      .then((res) => {
        setList(res.data.Data);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = (values, { resetForm }) => {
    if (editId != null) {
      const { _id, ...rest } = values;
      axios
        .patch(`https://generateapi.onrender.com/api/user6/${editId}`, rest, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("data edited");

          viewData();
          setIni({
            name: "",
            surname: "",
          });
          setEditId(null);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("https://generateapi.onrender.com/api/user6", values, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("data added");
          resetForm();
          viewData();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const deleteData = (deleteId) => {
    axios
      .delete(`https://generateapi.onrender.com/api/user6/${deleteId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log("data deleted");
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

  const search = () => {


    let duplicatelist = [...list];

    var st = duplicatelist.filter(
      (item) => item.name === searchItem || item.surname === searchItem
    );
    setSearchItem("");
    setList(st);

  
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
          <br />
          <br />
        </Form>
      </Formik>

      <input
        type="text"
        name=""
        id=""
        placeholder="Enter filter item"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button type="submit" onClick={search}>
        Search
      </button>
      <br />
      <br />

      <table border={1}>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>

        {list.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>
              <button onClick={() => deleteData(item._id)}>Delete</button>
            </td>
            <td>
              <button onClick={() => editData(item)}>Edit</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Crudapipractice;
