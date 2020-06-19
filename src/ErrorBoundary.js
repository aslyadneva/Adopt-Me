import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error boundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    const { hasError, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    if (hasError) {
      return (
        <h1>
          There was an error with this listting. <Link to="/">Click here</Link>{" "}
          to go back to the home page or wait 5 seconds to be redirected.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
