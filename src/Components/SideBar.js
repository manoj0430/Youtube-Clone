import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className=" p-4 w-[12%] shadow-lg mr-4">
      <h1 className="font-bold text-xl mt-1">You</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Liked</li>
        <li>Watch Later</li>
        <li>Library</li>
      </ul>
      <h1 className="font-bold text-xl mt-1">Explore</h1>
      <ul>
        <li>Games</li>
        <li>Shopping</li>
        <li>Films</li>
        <li>Music</li>
        <li>Sports</li>
      </ul>
    </div>
  );
};

export default SideBar;
