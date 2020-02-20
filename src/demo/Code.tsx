// reference: https://codesandbox.io/s/react-smooshpack-yi0nq

import React from "react";
import {
  FileExplorer,
  CodeMirror,
  BrowserPreview,
  SandpackProvider
} from "react-smooshpack/es/components/index";
import "react-smooshpack/dist/styles.css";

const TestCode = `import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './index.css'

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/" className="red">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

ReactDOM.render(
  <BasicExample />,
  document.getElementById("csb-loading-screen") || document.body
);
`;

// console.log("...TestCode", TestCode);
// import CodeMirror from "CodeMirror/src/codemirror";

const files = {
  "index.html": {
    code: `<div id="appRoot"></div>`
  },
  "/test.js": {
    code: "document.body.innerHTML = `<div>xxx</div>`; console.log('test')"
  },
  "/index.css": {
    code: ".red { color: red }"
  },
  "/index.js": {
    code: TestCode
  }
};

const dependencies = {
  react: "16.8.6",
  "react-dom": "16.8.6",
  "react-router-dom": "5.1.2"
  // uuid: "latest"
};

const Code = () => (
  <SandpackProvider files={files} dependencies={dependencies} entry="/index.js">
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <FileExplorer style={{ width: 300 }} />
      <CodeMirror style={{ flex: 1 }} />
      <BrowserPreview style={{ flex: 1 }} />
    </div>
  </SandpackProvider>
);

export default Code;
