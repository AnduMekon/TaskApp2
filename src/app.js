// install -> import -> use
import React from "react";
import ReactDOM from "react-dom";
class Template extends React.Component {
  render() {
    return (
      <div style={{ background: "black", display: "block", margin: "0" }}>
        <h1 style={{ color: "red", textAlign: "center" }}> This is greate</h1>
        <h3 style={{ textAlign: "center", color: "green" }}>xxxxxx</h3>
        <div>
          <h2 style={{ color: "yellow", textAlign: "center" }}>xxxxxxx</h2>
        </div>

        <div>
          <form style={{ background: "yellow" }}>
            Name= <input />
            Age= <input />
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Template />, document.getElementById("app"));
