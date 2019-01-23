import React, { Component } from "react";
import { connect } from "react-redux";
import { getTitle } from "./actions/getTitleActions";
class GetTitle extends Component {
  state = {};
  render() {
    const { getTitle, data, state } = this.props;
    console.log("state ", state);

    return <button onClick={() => getTitle(data)}>Get Titles</button>;
  }
}

const mapStateToProps = state => ({
  data: state.fetch.result,
  state: state
});
export default connect(
  mapStateToProps,
  { getTitle }
)(GetTitle);
