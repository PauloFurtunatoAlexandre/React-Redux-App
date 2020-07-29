import React from "react";

import "./anime-card.styles.scss"

const AnimeCard = (props) => {
  return(
    <div className="card-body">
      <h2>{props.anime.title}</h2>
      <p>{props.anime.description}</p>
    </div>
  )
}

export default AnimeCard;