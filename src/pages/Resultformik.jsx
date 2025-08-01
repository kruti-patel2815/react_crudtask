import React from "react";
import { useState } from "react";
import { useFormik } from "formik";

const Resultformik = () => {
  const [ini, setIni] = useState({
    name: "",
    sub1: "",
    sub2: "",
    sub3: "",
  });

  const [list, setList] = useState([]);

  const [editId, setEditId] = useState(null);

  const f = useFormik({
    enableReinitialize: true,
    initialValues: ini,

    onSubmit: (values) => {
      if (editId != null) {
        let copyData = [...list];
        copyData[editId] = values;
        setList(copyData);
        setEditId(null);
        setIni({
          name: "",
          sub1: "",
          sub2: "",
          sub3: "",
        });
      } else {
        setList([...list, values]);
      }

      f.handleReset();
    },
  });

  const deleteData = (index) => {
    let copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  };

  const editData = (item, index) => {
    setIni(item);
    setEditId(index);
  };
  const total = (i) => {
    var sum = parseInt(i.sub1) + parseInt(i.sub2) + parseInt(i.sub3);
    return sum;
  };

  const percentage = (i) => {
    var percentage =
      (parseInt(i.sub1) + parseInt(i.sub2) + parseInt(i.sub3)) / 3;
    return percentage;
  };
  const min = (sub1, sub2, sub3) => {
    return Math.min(parseInt(sub1), parseInt(sub2), parseInt(sub3));
  };
  const max = (sub1, sub2, sub3) => {
    return Math.max(parseInt(sub1), parseInt(sub2), parseInt(sub3));
  };
  return (
    <div>
      <form action="" onSubmit={f.handleSubmit}>
        <input
          type="text"
          name="name"
          value={f.values.name}
          onChange={f.handleChange}
          id=""
        />
        <br />
        <br />

        <input
          type="number"
          name="sub1"
          value={f.values.sub1}
          onChange={f.handleChange}
          id=""
        />
        <br />
        <br />

        <input
          type="number"
          name="sub2"
          value={f.values.sub2}
          onChange={f.handleChange}
          id=""
        />
        <br />
        <br />
        <input
          type="number"
          name="sub3"
          value={f.values.sub3}
          onChange={f.handleChange}
          id=""
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <table border={1}>
        <tr>
          <td>Name</td>
          <td>Sub1</td>
          <td>Sub2</td>
          <td>Sub3</td>
          <td>Total</td>
          <td>Percentage</td>
          <td>Min</td>
          <td>Max</td>
          <td>Delete</td>
          <td>Edit</td>
        </tr>

        {list.map((i, index) => (
          <tr>
            <td>{i.name}</td>
            <td>{i.sub1}</td>
            <td>{i.sub2}</td>
            <td>{i.sub3}</td>
            <td>{total(i)}</td>
            <td>{percentage(i)}%</td>
            <td>{min(i.sub1, i.sub2, i.sub3)}</td>
            <td>{max(i.sub1, i.sub2, i.sub3)}</td>
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

export default Resultformik;
