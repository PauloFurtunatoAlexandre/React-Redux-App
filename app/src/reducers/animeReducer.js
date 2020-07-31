import {
  FETCHING_ANIMES_START,
  FETCHING_ANIMES_SUCCESS,
  FETCHING_ANIMES_ERROR,
  MODAL_OPENED,
  MODAL_CLOSED,
} from "../actions/actions";

const INITIAL_STATE = {
  animes: [],
  isFetching: false,
  error: "",
  selectedAnime: null,
  modal: false,
};

export const animeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_ANIMES_START:
      return {
        ...state,
        isFetching: true,
        animes: [],
      };
    case FETCHING_ANIMES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        animes: action.payload,
        error: "",
      };
    case FETCHING_ANIMES_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export const toggleModal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_OPENED:
      return {
        ...state,
        modal: true,
      };
    case MODAL_CLOSED:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
};
