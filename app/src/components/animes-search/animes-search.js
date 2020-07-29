import React from "react";
import { connect } from "react-redux";

import { fetchAllAnimes } from "../../actions/actions";

const AnimeSearch = (props) => {
  if (props.isFetching) {
    return <p className="loading-data">***** LOADING ANIMES *****</p>;
  }

  return (
    <div className="container">
      <button onClick={() => props.fetchAllAnimes()}>Search All Animes</button>
      <div style={{ color: "red" }}>{props.error}</div>
      {console.log("fetching animes here 1: ", props.animes)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    animes: state.animes,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchAllAnimes })(AnimeSearch);
