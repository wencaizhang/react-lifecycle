import React from 'react';
import './App.css';

import Demo1 from "./demos/demo1";
import Demo2 from "./demos/demo2";
import Demo3 from "./demos/demo3";
import Demo4 from "./demos/demo4";
import Demo5 from "./demos/demo5";

function App() {
  return (
    <div className="App">
      <Demo1 />
      <hr/>
      <Demo2 />
      <hr/>
      <Demo3 />
      <hr/>
      <Demo4 />
      <hr/>
      <Demo5 />
    </div>
  );
}

export default App;
