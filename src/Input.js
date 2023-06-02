import React from "react";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    // this.inputRef.current is null here
  }

  componentDidMount() {
    // we can use this.inputRef.current to access DOM element
  }

  componentDidUpdate() {
    // we can use this.inputRef.current to access DOM element
  }

  handleClick = () => {
    // we can use this.inputRef.current to access DOM element
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div className="area">
        <div className="icon">
          <h1>+</h1>
        </div>
        <span className="header">DRAG or DROP</span>
        <span className="header">
          or<span className="button">Browser</span>
        </span>
        <input type="file" hidden />
      </div>
    );
  }
}
