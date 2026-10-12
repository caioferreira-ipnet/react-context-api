import { useContext } from "react";
import { CounterContext } from "../context/counterContext/CounterContext.jsx";
const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <button
        className="addCounter"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {" "}
        Add value to counter
      </button>
    </div>
  );
};

export default ChangeCounter;
