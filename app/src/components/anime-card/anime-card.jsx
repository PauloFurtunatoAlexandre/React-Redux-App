import React from "react";
import { connect } from "react-redux";

import { fetchDataToCard } from "../../actions/actions";

import "./anime-card.styles.scss";

// import Modal from "../modal/modal";

const AnimeCard = (props) => {
  const handleAnimeCard = (id) => {
    props.fetchDataToCard(id);
  };

  return (
    <div className="card-body">
      <h2>{props.anime.title}</h2>
      <p className="description">{props.anime.description}</p>
      <p>
        <strong>Director:</strong>
        {props.anime.director}
      </p>
      <br />
      <p>
        <strong>Producer:</strong>
        {props.anime.producer}
      </p>
      <h6>
        <strong>Release Date: </strong>
        {props.anime.release_date}
      </h6>
      <h6>
        <strong>Rate: </strong>
        {props.anime.rt_score}
      </h6>
      <button onClick={() => handleAnimeCard(props.anime.id)}>
        Read More...
      </button>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    url: state.url,
  };
};

export default connect(mapStateToProps, { fetchDataToCard })(AnimeCard);
