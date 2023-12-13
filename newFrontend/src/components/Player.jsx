/* eslint-disable react-hooks/exhaustive-deps */
import { BsFillPauseCircleFill, BsShuffle } from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { FaCirclePlay } from "react-icons/fa6";
import { SlVolume2 } from "react-icons/sl";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { streamSong } from "../redux/action";

export const Player = () => {
  const { load, playing, togglePlayPause, setVolume } = useGlobalAudioPlayer();
  const currentSong = useSelector((store) => {
    return store.currentPlayingSong;
  });
  const currentSongID = useSelector((store) => {
    return store.currentPlaying;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentSongID) {
      streamSong(dispatch, currentSongID);
    }
  }, [currentSongID]);
  useEffect(() => {
    if (currentSong) {
      console.log("inplay");
      load(currentSong.streamURL, {
        autoplay: true,
        html5: true,
        format: "mp3",
      });
    }
  }, [currentSong]);

  return (
    <div className=" text-white bg-primary-800 h-1/6 rounded flex justify-between">
      <div className="hidden md:flex w-1/4 justify-start gap-5 items-center">
        <img src={currentSong?.album} alt="" className=" w-2/6 pl-5 h-5/6" />
        <div className="flex flex-col justify-center gap-4 text-base">
          <p>{currentSong?.title}</p>
          <p>{currentSong?.artist}</p>
        </div>
      </div>
      <div className="w-full md:w-2/4 h-full">
        <div className="flex justify-center items-center gap-5 h-1/2 text-primary-600">
          <BsShuffle
            style={{ fontSize: "20px" }}
            className="hover:cursor-pointer hover:text-white"
          />
          <CgPlayTrackPrev
            style={{ fontSize: "35px" }}
            className="hover:cursor-pointer hover:text-white"
          />
          {playing ? (
            <BsFillPauseCircleFill
              style={{ fontSize: "40px" }}
              className="hover:cursor-pointer hover:text-white"
              onClick={() => {
                togglePlayPause();
              }}
            />
          ) : (
            <FaCirclePlay
              style={{ fontSize: "40px" }}
              className="hover:cursor-pointer hover:text-white"
              onClick={() => {
                togglePlayPause();
              }}
            />
          )}
          <CgPlayTrackNext
            style={{ fontSize: "35px" }}
            className="hover:cursor-pointer hover:text-white"
          />
          <FiRepeat
            style={{ fontSize: "20px" }}
            className="hover:cursor-pointer hover:text-white"
          />
        </div>
        <div className="h-1/2 flex flex-col justify-center">
          <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-white" style={{ width: "45%" }}></div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-1/4 justify-center items-center gap-2">
        <SlVolume2 style={{ fontSize: "20px" }} />
        <input
          type="range"
          name=""
          id=""
          max="1"
          min="0"
          step={0.01}
          className=" w-3/4 h-1 hover:cursor-pointer"
          onChange={(e) => {
            setVolume(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
