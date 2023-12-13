import { SiYoutubemusic } from "react-icons/si";
import { MdHomeFilled } from "react-icons/md";

export const SideBar = () => {
  return (
    <div className="text-white w-1/4 rounded flex flex-col gap-2">
      <div className="bg-primary-800 rounded p-2 flex flex-col gap-2 h-24">
        <div className=" flex item-center gap-4 items-center">
          <SiYoutubemusic style={{ color: "white", fontSize: "35px" }} />
          <h1 className=" text-lg text-w text-primary-600 hover:text-white hover:cursor-pointer duration-500 ease-in-out">
            MusicMix
          </h1>
        </div>
        <div className="flex item-center gap-4 items-center">
          <MdHomeFilled style={{ fontSize: "35px" }} />
          <h1 className=" text-lg text-primary-600 hover:text-white hover:cursor-pointer duration-500 ease-in-out">
            Home
          </h1>
        </div>
      </div>
      <div className="bg-primary-800 rounded">Playlists</div>
    </div>
  );
};
