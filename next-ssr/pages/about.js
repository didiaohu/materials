import React, { Component } from "react";

export default class aboutPage extends Component {
  static async getInitialProps(ctx) {
    const res = await fetch("http://localhost:3000/api/hello");
    const json = await res.json();
    return { name: json.name };
  }
  render() {
    return <div>about{this.props.name}</div>;
  }
}
