// import { useContext } from "react";
import { useCounterContext } from "../hooks/useCounterContext.jsx";
// import { CounterContext } from "../context/CounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";
//Components
import ChangeCounter from "../components/ChangeCounter.jsx";
const Home = () => {
  const { counter } = useCounterContext();
  const { color } = useTitleColorContext();
  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
