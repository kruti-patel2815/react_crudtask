import React from "react";
import { useState } from "react";

const Category = () => {
  const data = [
    { category: "flower", name: "Rose" },
    { category: "flower", name: "Lotus" },
    { category: "flower", name: "orchid" },
    { category: "flower", name: "lily" },
    { category: "flower", name: "sunflower" },
    { category: "animal", name: "Dog" },
    { category: "animal", name: "Cat" },
    { category: "animal", name: "lion" },
    { category: "animal", name: "elephant" },
    { category: "animal", name: "zebra" },
    { category: "color", name: "white" },
    { category: "color", name: "blue" },
    { category: "color", name: "black" },
    { category: "color", name: "Red" },
    { category: "color", name: "Green" },
  ];

  const [list, setList] = useState(data);

  const myfunction = (category) => {
    const filDs = data.filter((item) => item.category == category);
    setList(filDs);
  };
  return (
    <>
      <button onClick={() => myfunction("all")}>All</button>
      <button onClick={() => myfunction("flower")}>Flower</button>
      <button onClick={() => myfunction("animal")}>Animal</button>
      <button onClick={() => myfunction("color")}>Color</button>

      {list.map((item, index) => (
        <tr>
          <td>{item.name}</td>
          <td>{item.category}</td>
        </tr>
      ))}
    </>
  );
};

export default Category;
