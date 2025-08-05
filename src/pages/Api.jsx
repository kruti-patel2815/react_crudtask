import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const Api = () => {
  const [list, setList] = useState([]);

  const [no, setNo] = useState(0);

  useEffect(() => {
    viewData();
  }, []);

  function viewData() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setList(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return <div>

    <table border={1}>
      <tr>
        <td>userId</td>
        <td>id</td>
        <td>title</td>
        <td>body</td>
      </tr>

      {
        list.map((i,index)=>(
          <tr>
            <td>{i.userId}</td>
            <td>{i.id}</td>
            <td>{i.title}</td>
            <td>{i.body}</td>

          </tr>
        ))
      }
    </table>
  </div>;
};

export default Api;


