import { useSelector } from "react-redux";

export const MainBody = () => {
  const { songs, isLoading } = useSelector((store) => {
    return { songs: store.currentSongs, isLoading: store.isLoading };
  });
  return <div className="text-white bg-primary-800 h-full rounded"></div>;
};
