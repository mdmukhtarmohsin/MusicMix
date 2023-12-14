import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_ALL_SONGS_SUCCESS,
  SAVE_TO_BEFORE_FILTER,
} from "../redux/actionTypes";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const songs = useSelector((store) => {
    return store.currentSongs;
  });
  const beforeFilter = useSelector((store) => {
    return store.beforeFilter;
  });
  const dispatch = useDispatch();
  const handleSearch = () => {
    if (search === "" && beforeFilter.length > 0) {
      dispatch({ type: GET_ALL_SONGS_SUCCESS, payload: beforeFilter });
    }
    if (beforeFilter.length === 0) {
      dispatch({ type: SAVE_TO_BEFORE_FILTER, payload: songs });
    }
    if (beforeFilter.length > 0) {
      let temp = [...beforeFilter];
      const filtered = temp.filter((song) => {
        if (song.title.toLowerCase().includes(search.toLowerCase())) {
          return true;
        }
        return false;
      });
      dispatch({ type: GET_ALL_SONGS_SUCCESS, payload: filtered });
    }
  };
  return (
    <div className="text-white bg-primary-800 h-24 rounded flex justify-between items-center p-8">
      <div className="flex w-2/6 gap-3">
        <input
          type="text"
          placeholder="What to you want to listen ?"
          className="bg-primary-700 focus:border-primary-700 w-full h-10 rounded p-3"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div
          className=" mt-3 hover:cursor-pointer text-primary-600 hover:text-white duration-500 ease-in-out"
          onClick={handleSearch}
        >
          <FaSearch style={{ fontSize: "20px" }} />
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <h1>UserName</h1>
        <button>Logout</button>
      </div>
    </div>
  );
};
