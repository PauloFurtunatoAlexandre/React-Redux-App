import axios from "axios";

export const FETCHING_ANIMES_START = "FETCHING_ANIMES_START";
export const FETCHING_ANIMES_SUCCESS = "FETCHING_ANIMES_SUCESS";
export const FETCHING_ANIMES_ERROR = "FETCHING_ANIMES_ERROR";


// export const fetchAnimesStart = () => {
//   return {
//     type: FETCHING_ANIMES_START,
//   };
// };

// export const fetchingAnimeData = (items) => {
//   return {
//     type: FETCHING_ANIMES_SUCCESS,
//     payload: items,
//   };
// };

// export const fetchingAnimesError = (error) => {
//   return {
//     type: FETCHING_ANIMES_ERROR,
//     error: error,
//   };
// };

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
