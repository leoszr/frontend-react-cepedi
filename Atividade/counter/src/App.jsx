import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import Message from "./components/Message";

function App() {
  const [count, setCount] = useState(0);

  function add() {
    setCount((n) => n + 1);
    console.log("clicou");
  }
  return (
    <div>
      <Message count={count} />
      <Counter onClick={add} />
    </div>
  );
}
export default App;
