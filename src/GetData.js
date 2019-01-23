import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "./actions/fetchActions";
class GetData extends Component {
  state = {};
  render() {
    const { getData } = this.props;
    return <button onClick={() => getData()}>Get Data</button>;
  }
}

export default connect(
  null,
  { getData }
)(GetData);
