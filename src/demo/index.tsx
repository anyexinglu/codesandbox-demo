import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Static from "./Static";
// import Dynamic from "./Dynamic";
import Code from "./Code";
// import Test from "./Test";

// const Demo = () => {
//   return (
//     <div className="Demo">
//       <Router>
//         <Switch>
//           {/* <Redirect path="/" exact to="/docs/introduction" /> */}
//           <Route path="/" component={Code} />
//           <Route path="/test" component={Test} />
//         </Switch>
//       </Router>
//     </div>
//   );
// };

export default function App() {
  return (
    <div className="App">
      <Code />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
