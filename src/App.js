import React from "react";
import Counter from "./counter";

function App() {
  return (
    <div className="App">
      <h1>React redux hooks</h1>
      <p>
        This example uses react-redux hooks useSelector and useDispatch instead
        of connect method to connect components to redux store and dispatch the
        actions. useSelector is applied in 'counter/counter-value' and
        useDispatch is applied in 'counter/counter-nav'.
      </p>
      <Counter />
    </div>
  );
}

export default App;
