import React from "react";
import { connect } from "react-redux";

import { fethingDataToCard } from "../../actions/actions";

import "./modal.scss";

const Modal = (props) => {
  const handleModal = (e) => {
    props.fethingDataToCard();
  }
  return props.modal ? (
    <div className="modal">
      <button onClick={() => handleModal(props.fethingDataToCard())}>Close</button>
      <h2>{props.anime.title}</h2>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

export default connect(mapStateToProps, {
  fethingDataToCard,
})(Modal);
