import React from "react";
import { useCallback, useMemo, useState } from "react";

const Button = React.memo(({ val }) => {
  return <button onClick={val}>CLICK</button>;
});
const Usecallback = () => {
  const [no, setNo] = useState(0);

  const counter = useCallback(() => {
    setNo((no) => no + 1);
  });
  return (
    <div>
      <h1>{no}</h1>
      <Button val={counter}></Button>
    </div>
  );
};
// Usecallback
export default Usecallback;
