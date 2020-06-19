import React, { Component } from "react";

class Carousel extends Component {
  state = {
    photos: [],
    active: 0,
  };

  // must be static
  // takes in a new set of props and returns a new set of state
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    // return an obj that we want to be merged into state
    return { photos: photos };
  }

  handleIndexClick = ({ target }) => {
    this.setState({ active: +target.dataset.index });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, idx) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={idx}
              src={photo}
              className={idx === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
