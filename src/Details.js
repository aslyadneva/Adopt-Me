import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";

class Details extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const { id } = this.props;
    pet
      .animal(id)
      .then(
        ({ animal: { name, type, contact, description, photos, breeds } }) => {
          this.setState({
            name: name,
            animal: type,
            location: `${contact.address.city}, ${contact.address.state}`,
            description: description,
            media: photos,
            breed: breeds.primary,
            loading: false,
          });
        },
        console.error
      );
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <h1>Loading...</h1>;
    }

    const { name, animal, location, description, media, breed } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
