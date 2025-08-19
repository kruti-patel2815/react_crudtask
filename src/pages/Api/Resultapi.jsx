import React from "react";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
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
  const [filterItem, setFilterItem] = useState([]);

  useEffect(() => {
    viewData();
  }, []);

  function viewData() {
    axios
      .get("https://generateapi.onrender.com/api/Result", {
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
        .patch(`https://generateapi.onrender.com/api/Result/${editId}`, rest, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("data edited");

          viewData();
          setIni({
            name: "",
            sub1: "",
            sub2: "",
            sub3: ""
         });
          setEditId(null);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("https://generateapi.onrender.com/api/Result", values, {
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
      .delete(`https://generateapi.onrender.com/api/Result/${deleteId}`, {
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
    //console.log(searchItem);

    let duplicatelist = [...list];

    var st = duplicatelist.filter(
      (item) => item.name === searchItem || item.sub1 === searchItem || item.sub2 === searchItem || item.sub3 === searchItem
    );
    setSearchItem("");
    setList(st);

    //console.log(st);
  };
  const total = (item) => {
    var sum = parseInt(item.sub1) + parseInt(item.sub2) + parseInt(item.sub3);
    return sum;
  };

  const percentage = (item) => {
    var percentage =
      (parseInt(item.sub1) + parseInt(item.sub2) + parseInt(item.sub3)) / 3;
    return percentage;
  };
  const min = (sub1, sub2, sub3) => {
    return Math.min(parseInt(sub1), parseInt(sub2), parseInt(sub3));
  };
  const max = (sub1, sub2, sub3) => {
    return Math.max(parseInt(sub1), parseInt(sub2), parseInt(sub3));
  };
  return (
    <>
      <Formik enableReinitialize initialValues={ini} onSubmit={handleSubmit}>
        <Form>
          <Field name="name"></Field>
          <br />
          <br />
          <Field name="sub1"></Field>
          <br />
          <br />
          <Field name="sub2"></Field>
          <br />
          <br />
          <Field name="sub3"></Field>
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
          <td>No</td>
          <td>Name</td>
          <td>Sub1</td>
          <td>Sub2</td>
          <td>Sub3</td>
          <td>total</td>
          <td>Percentage</td>
          <td>Min</td>
          <td>Max</td>
          <td>Delete</td>
          <td>Edit</td>

        </tr>

        {list.map((item, index) => (
          <tr>
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
      </table>
    </>
  );
};

export default Resultapi;
