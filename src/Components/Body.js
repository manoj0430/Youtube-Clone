import SideBar from "./SideBar";
import MainComponent from "./MainComponent";
const Body = () => {
  return (
    <div>
      <div className="flex">
        <SideBar />
        <MainComponent />
      </div>
    </div>
  );
};

export default Body;
