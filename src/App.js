import "./App.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";


class App extends Component{

  constructor (props) {
    super(props);
    this.uploadRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.uploadRef.click();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="zander">Zoom Transcriber</h1>
          <div className="inputs">
            <InputGroup className="z-link">
              <InputGroup.Prepend className="prepender">
                <InputGroup.Text id="linktext">🔗</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Zoom Link"
                aria-label="Zoom Link"
                aria-describedby="linktext"
              />
            </InputGroup>
            <p className="or">or</p>
            <input type="file" id="file" ref={r => this.uploadRef = r} style={{display: "none"}}/>
            <Button onClick={this.handleClick} className="upload" variant="secondary">
              Upload .mp4 from Computer
            </Button>{" "}
          </div>
          <Button className="transcribe" variant="success">
            Transcribe
          </Button>
        </header>
      </div>
    );
  }
}


export default App;
