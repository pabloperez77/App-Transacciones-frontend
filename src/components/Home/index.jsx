import React from "react";

import { connect } from "react-redux";

const Home = props => {
  console.log(props);
  return <div>Home</div>;
};

const mapStateToProps = state => {
  return {
    numTable: state.tables.length
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
