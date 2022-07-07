import React, { Component } from "react";
import s from "../SearchImg.module.css";

class Searchbar extends Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value.toLowerCase() });
  };

  onInputSubmit = (e) => {
    e.preventDefault();

    if (this.state.input.trim() === "") {
      return alert("Enter the name");
    }

    this.props.onSubmit(this.state.input);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <form className={s.form} onSubmit={this.onInputSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
