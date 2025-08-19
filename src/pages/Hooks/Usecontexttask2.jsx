import React, { createContext, useState } from "react";
import Task2page from "./Task2page";

export const dataContext = createContext();

const Usecontexttask2 = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [add, setAdd] = useState("");
  const [list, setList] = useState([]);

  const handleData = () => {
    const obj = { name, surname, add };

    setList([...list, obj]);
    setName("");
    setSurname("");
    setAdd("");
  };

  return (
    <div>
      <input
        type="text"
        name=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />

      <input
        type="text"
        name=""
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <br />
      <br />

      <input
        type="text"
        name=""
        value={add}
        onChange={(e) => setAdd(e.target.value)}
      />
      <br />
      <br />

      <button onClick={handleData}>Submit</button>
      <br />
      <br />

      <dataContext.Provider value={{ list }}>
        <Task2page></Task2page>
      </dataContext.Provider>
    </div>
  );
};

export default Usecontexttask2;
