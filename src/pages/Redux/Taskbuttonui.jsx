import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decre, incre } from "./CounterSlice";

const Taskbuttonui = () => {
  const data  = useSelector((state) => state.demo.no);

  const actionCall = useDispatch();

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => actionCall(incre())}>+++</button>
      <button onClick={() => actionCall(decre())}>---</button>
    </div>
  );
};

export default Taskbuttonui;
