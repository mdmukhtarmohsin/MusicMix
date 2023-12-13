import axios from "axios";
import {
  GET_ALL_SONGS_SUCCESS,
  GET_FAILURE,
  GET_REQUEST,
  GET_SIGNIN_SUCCESS,
  GET_SIGNUP_SUCCESS,
  SET_CURRENT_SONG_DATA,
} from "./actionTypes";

const url = `https://loud-weight1875-production.up.railway.app/`;

export async function getAllSongs(dispatch) {
  try {
    dispatch({ type: GET_REQUEST });
    const res = await axios.get(`${url}tracks/list`);
    console.log(res.data);
    dispatch({ type: GET_ALL_SONGS_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_FAILURE, payload: error.response.data.message });
  }
}

export async function signInUser(dispatch, userData) {
  try {
    dispatch({ type: GET_REQUEST });
    const res = await axios.post(`${url}auth/login`, userData);
    dispatch({ type: GET_SIGNIN_SUCCESS, payload: res.data.token });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_FAILURE, payload: error.response.data.message });
  }
}

export async function signUpuser(dispatch, userData) {
  try {
    dispatch({ type: GET_REQUEST });
    const res = await axios.post(`${url}auth/register`, userData);
    dispatch({ type: GET_SIGNUP_SUCCESS, payload: res.data.token });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_FAILURE, payload: error.response.data.message });
  }
}

export async function streamSong(dispatch, id) {
  try {
    const res = await axios.get(`${url}tracks/detail/${id}`);
    res.data.streamURL = `${url}tracks/stream/${id}`;
    console.log(res);
    dispatch({ type: SET_CURRENT_SONG_DATA, payload: res.data });
  } catch (error) {
    console.log(error);
  }
}
