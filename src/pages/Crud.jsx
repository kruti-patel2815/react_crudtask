import React from "react";
import { useState } from "react";

const Crud = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [list, setList] = useState([]);
  const  [editId , setEditId] = useState(null)

  const handleData = () => {
    const obj = { name, surname };

    if (editId != null) {
      let copyData = [...list];
      copyData[editId] = obj;
      setList(copyData);
      setEditId(null);
    } else {
      setList([...list, obj]);
    }
    setList([...list, obj]);
    setName("");
    setSurname("");
  };

  const deleteData = (index) => {
    let copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  };

  const editData = (data, index) => {
    setName(data.name);
    setSurname(data.surname);
    setEditId(index);
  };

  return (
    <>
      <input
        type="text"
        name=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        surname=""
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <button onClick={handleData}>Submit</button>
      <br></br>
      <br></br>

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
    </>
  );
};

export default Crud;
