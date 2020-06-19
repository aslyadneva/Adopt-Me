import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Modal from "./Modal";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends Component {
  state = {
    loading: true,
    animal: "",
    showModal: false,
  };

  async componentDidMount() {
    const { id } = this.props;

    const { animal } = await pet.animal(id);

    if (!animal) {
      this.setState({ loading: false });
    }

    const { name, type, contact, description, photos, breeds, url } = animal;

    this.setState({
      url: url,
      name: name,
      animal: type,
      location: `${contact.address.city}, ${contact.address.state}`,
      description: description,
      media: photos,
      breed: breeds.primary,
      loading: false,
    });
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => navigate(this.state.url);

  render() {
    const { loading, animal } = this.state;

    if (loading) {
      return <h1>Loading...</h1>;
    }

    if (!loading && !animal) {
      throw new Error("animal is not defined");
    }

    const { name, location, description, media, breed, showModal } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>{" "}
                  <button onClick={this.toggleModal}>No, I'm a monster</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
