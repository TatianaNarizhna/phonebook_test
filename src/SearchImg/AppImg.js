import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

class AppImg extends Component {
  state = {
    input: "",
    images: [],
    loading: false,
    error: null,
  };

  handleSubmit = (input) => {
    this.setState({ input: input });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery searchImg={this.state.input} />
      </>
    );
  }
}

export default AppImg;
