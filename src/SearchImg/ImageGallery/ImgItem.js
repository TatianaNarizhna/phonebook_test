function ImgItem({ key, webformatURL, largeImageURL }) {
  return (
    <li class="ImageGalleryItem" key={key}>
      <img src={webformatURL} alt="img" data-img={largeImageURL} />
    </li>
  );
}

export default ImgItem;
