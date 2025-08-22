import {useDispatch , useSelector} from "react-redux";
import {increment,decrement} from "./CounterSlice";
import { useState } from "react";

const ButtonUI = () => {
    const dispatch = useDispatch();
    const No = useSelector((state)=>state.counter.no)
    const [number,setNumber] = useState(0);

    return(
        <div>
            
            <h1>{No}</h1>
            <input value={number} type="number" name="inputvalue" id="" placeholder="Enter Number" onChange={(e)=>{setNumber(e.target.value)}}></input><br/><br/>
            <button onClick={()=>dispatch(increment(number))}>+++</button>
            <button onClick={()=>dispatch(decrement(number))}>---</button>
        </div>
    );

};

export default ButtonUI;
























//       <button
//         onClick={() => dispatch(increment(amount))}
//         style={{
//           borderRadius: "30px",
//           backgroundColor: "skyblue",
//           border: "none",
//           padding: "10px 5px",
//           marginRight: "5px",
//         }}
//       >
//         +++
//       </button>
//       <button
//         onClick={() => dispatch(decrement(amount))}
//         style={{
//           borderRadius: "30px",
//           backgroundColor: "red",
//           border: "none",
//           padding: "10px 5px",
//           marginRight: "5px",
//         }}
//       >
//         ---
//       </button>
//     </div>
//   );
// };

// export default ButtonUI;
