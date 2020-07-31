import React from "react";
import { connect } from "react-redux";
import "./App.css";

import AnimeSearch from "./components/animes-search/animes-search";
import AnimesList from "./components/animes-list/animes-list";

function App(props) {
  return (
    <div className="App">
      <h2 className="header-title">Ghibli Anime Studio Search</h2>
      <AnimeSearch />
      <AnimesList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    animes: state.animes,
  };
};

export default connect(mapStateToProps)(App);
