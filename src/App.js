import React from "react";

import "./App.css";

class App extends React.Component {
  reverse = false;
  delay = 0;
  password = React.createRef();
  age = React.createRef();
  country = React.createRef();
  letters = [
    "\n",
    " ",
    " ",
    " ",
    " ",
    "p",
    "a",
    "s",
    "s",
    "w",
    "o",
    "r",
    "d",
    "\n",
    " ",
    " ",
    " ",
    " ",
    "a",
    "g",
    "e",
    "\n",
    " ",
    " ",
    " ",
    " ",
    "c",
    "o",
    "u",
    "n",
    "t",
    "r",
    "y"
  ];
  renderLetters() {
    return this.letters.map((letter, index) => (
      <span key={index} className="char">
        {letter}
      </span>
    ));
  }
  animate(i, array) {
    const obj = this;
    if (array[i].innerHTML === "\n" && this.reverse === false)
      this.delay += 2000;
    setTimeout(() => {
      array[i].classList.toggle("active");
      if (obj.reverse === true) {
        if (i === 12) this.password.current.classList.toggle("active");
        if (i === 20) this.age.current.classList.toggle("active");
        if (i === 32) this.country.current.classList.toggle("active");
      } else {
        if (i === 21) this.password.current.classList.toggle("active");
        if (i === 13) this.age.current.classList.toggle("active");
        if (i === 1) this.country.current.classList.toggle("active");
      }
    }, (obj.reverse === false ? 170 : 80) * i + obj.delay);
  }
  componentDidMount() {
    this.start(1000);
  }
  start(timeout) {
    const obj = this;
    setTimeout(() => {
      const array =
        obj.reverse === false
          ? document.querySelectorAll(".char")
          : [].slice.call(document.querySelectorAll(".char")).reverse();
      for (var i = 0; i < array.length; i++) obj.animate(i, array);
      obj.reverse = obj.reverse === false;
      obj.delay = 0;
      obj.start(obj.reverse === false ? 4100 : 13500);
    }, timeout);
  }

  render() {
    return (
      <div className="main">
        <div className="top"></div>
        <div className="body">
          <pre>
            {"{\n  admin {\n    user"}
            {this.renderLetters()}
            <span id="tab"> </span>
            {"\n  }\n}"}
          </pre>
        </div>
        <div className="body2">
          <pre className="result">
            {"{\n  "}
            <span>{'"admin": '}</span>
            {"{\n    "}
            <span>{'"user": '}</span>
            <span className="string">{'"pajitn"'}</span>
            <span className="rel" ref={this.password}>
              {',\n    "password": '}
              <span className="string">{'"3n%&an13"'}</span>
            </span>
            <span className="rel" ref={this.age}>
              {',\n    "age": '}
              <span className="int">{"23"}</span>
            </span>
            <span className="rel" ref={this.country}>
              {',\n    "country":'}
              <span className="string">{'"Thailand"'}</span>
            </span>
            {"\n  }\n}"}
          </pre>
        </div>
      </div>
    );
  }
}

export default App;
