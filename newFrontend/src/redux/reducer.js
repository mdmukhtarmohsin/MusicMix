import {
  GET_ALL_SONGS_SUCCESS,
  GET_FAILURE,
  GET_REQUEST,
  GET_SIGNIN_SUCCESS,
  GET_SIGNUP_SUCCESS,
} from "./actionTypes";

const initialState = {
  isAuth: false,
  token: null,
  isLoading: false,
  isError: false,
  currentSongs: [
    {
      _id: "65474712f29b0a08895b6d9d",
      title: "Love The Way You Lie",
      artist: "Eminem",
      album:
        "https://c.saavncdn.com/527/Recovery-Explicit-Version-2010-500x500.jpg",
      audioFile:
        "uploads/1699170065403-Eminem - Love The Way You Lie ft. Rihanna.mp3",
    },
    {
      _id: "65474df8f29b0a08895b6daa",
      title: "One More Night",
      artist: "Maroon 5",
      album: "https://c.saavncdn.com/760/Overexposed-2012-500x500.jpg",
      audioFile: "uploads/1699171831076-Maroon5_-_One_More_Night.mp3",
    },
  ],
  currentPlaying: null,
  errorMessage: null,
};

export function reducer(state = initialState, { type, payload }) {
  if (type === GET_REQUEST) {
    return { ...state, isLoading: true, isError: false };
  }

  if (type === GET_FAILURE) {
    return { ...state, isError: true, isLoading: false, errorMessage: payload };
  }
  if (type === GET_ALL_SONGS_SUCCESS) {
    return {
      ...state,
      currentSongs: payload,
      isLoading: false,
      isError: false,
    };
  }
  if (type === GET_SIGNIN_SUCCESS) {
    return { ...state, token: payload, isAuth: true };
  }
  if (type === GET_SIGNUP_SUCCESS) {
    return { ...state, token: payload, isAuth: true };
  }
  return state;
}
