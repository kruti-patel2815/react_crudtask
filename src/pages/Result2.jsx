import React from "react";
import { useState } from "react";
const Result2 = () => {
  const [name, setName] = useState("");
  const [sub1, setSub1] = useState("");
  const [sub2, setSub2] = useState("");
  const [sub3, setSub3] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleData = () => {
    const obj = { name, sub1 , sub2 , sub3};

    if (editId != null) {
      let copyData = [...list];
      copyData[editId] = obj;
      setList(copyData);
      setEditId(null);
    } else {
      setList([...list, obj]);
    }

    setName("");
    setSub1("");
    setSub2("");
    setSub3("");
  };

  const total = (i) => {
    var sum = parseInt(i.sub1) + parseInt(i.sub2) + parseInt(i.sub3);
    return sum;
  };

  const percentage = (i) => {
    var percentage = (parseInt(i.sub1) + parseInt(i.sub2) + parseInt(i.sub3)) / 3;
    return percentage;
  };
  const min = (sub1, sub2, sub3) => {
    return Math.min(parseInt(sub1), parseInt(sub2), parseInt(sub3));
  };
  const max = (sub1, sub2, sub3) => {
    return Math.max(parseInt(sub1), parseInt(sub2), parseInt(sub3));
  };
  const deleteData = (index) => {
    let copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  };

  const editData = (data , index) => {
    setName(data.name)
    setSub1(data.sub1)
    setSub2(data.sub2)
    setSub3(data.sub3)
    setEditId(index)
  }
  
  return (
    <>
      <input
        type="text"
        name=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <br />
      <input
        type="number"
        name=""
        value={sub1}
        onChange={(e) => setSub1(e.target.value)}
      />
      <br />
      <br />
      <input
        type="number"
        name=""
        value={sub2}
        onChange={(e) => setSub2(e.target.value)}
      />
      <br />
      <br />
      <input
        type="number"
        name=""
        value={sub3}
        onChange={(e) => setSub3(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleData}>Submit</button>
      <table border={1}>
        <tr>
          <td>name</td>
          <td>sub1</td>
          <td>sub2</td>
          <td>sub3</td>
          <td>total</td>
          <td>percentage</td>
          <td>min</td>
          <td>max</td>
          <td>DELETE</td>
          <td>EDIT</td>
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
    </>
  );
};

export default Result2;
