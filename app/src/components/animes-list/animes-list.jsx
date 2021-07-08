import React from "react";
import { connect } from "react-redux";

import "./animes-list.styles.scss";

import AnimeCard from "../anime-card/anime-card";

const AnimesList = (props) => {
  return (
    <div className="animes-list">
      {props.animes.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    animes: state.animes,
  };
};

export default connect(mapStateToProps)(AnimesList);
