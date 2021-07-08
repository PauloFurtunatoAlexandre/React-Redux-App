import axios from "axios";

export const FETCHING_ANIMES_START = "FETCHING_ANIMES_START";
export const FETCHING_ANIMES_SUCCESS = "FETCHING_ANIMES_SUCESS";
export const FETCHING_ANIMES_ERROR = "FETCHING_ANIMES_ERROR";

export const FETCHING_TITLE_START = "FETCHING_TITLE_START";
export const FETCHING_TITLE_SUCCESS = "FETCHING_TITLE_SUCCESS";
export const FETCHING_TITLE_ERROR = "FETCHING_TITLE_ERROR";

export const MODAL_OPENED = "MODAL_OPENED";
export const MODAL_CLOSED = "MODAL_CLOSED";

export const fetchAllAnimes = () => (dispatch) => {
  dispatch({ type: FETCHING_ANIMES_START });

  axios
    .get("https://ghibliapi.herokuapp.com/films/")
    .then((res) => {
      console.log("pa: actions/index.js fetchingAllAnimes: ", res);
      dispatch({
        type: FETCHING_ANIMES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error("get all animes data failed: ", err.message);
      dispatch({ type: FETCHING_ANIMES_ERROR, payload: err.message });
    });
};

export const fetchDataToCard = (id) => (dispatch) => {
  dispatch({ type: FETCHING_TITLE_START });

  axios
    .get(`https://ghibliapi.herokuapp.com/films/${id}`)
    .then((res) => {
      console.log("getting the individual card:", res);
      dispatch({
        type: FETCHING_TITLE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error("Something went wrong: ", err);
      dispatch({ type: FETCHING_TITLE_ERROR, payload: err.message });
    });
};