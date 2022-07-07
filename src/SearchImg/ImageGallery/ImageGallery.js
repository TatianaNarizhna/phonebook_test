import { Component } from "react";
import serviseAPI from "../servise";
import ImgItem from "./ImgItem";

class ImageGallery extends Component {
  state = {
    imageGallery: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImg !== this.props.searchImg) {
      serviseAPI
        .fetchImage(this.props.searchImg)
        .then((imageGallery) => this.setState({ imageGallery }))
        .catch((error) => this.setState({ error }));
    }
  }

  render() {
    return (
      <ul className="ImageGallery">
        {this.state.imageGallery.map(({ id, webformatURL, largeImageURL }) => (
          <ImgItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
