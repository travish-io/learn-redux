import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login, logout } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter} </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>User is logged in.</h3> : <h3>User is not logged in.</h3>}
      {isLogged ? (
        <button onClick={() => dispatch(logout())}>log out</button>
      ) : (
        <button onClick={() => dispatch(login())}>log in</button>
      )}
    </div>
  );
}

export default App;
