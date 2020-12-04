import React from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = React.useState(true);
  const brightness = state ? 'lit' : 'dark';
  const [temp, setTemp] = React.useState(72);
  return (
    <div className={`room ${brightness}`}>
      <h1>the room is {state? 'lit' : 'dark' }</h1>
      <h1>temp: {temp}</h1>
      <button onClick={() => setState(!state)}>light switch</button>
      <br/>
      <button onClick={() => setState(true)}>on</button>
      <button onClick={() => setState(false)}>off</button>
      <br/>
      <button onClick={() => setTemp(temp + 1)}>+</button>
      <button onClick={() => setTemp(temp - 1)}>-</button>
    </div>
  );
}
