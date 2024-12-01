import Header from "./Header";
import SideBar from "./SideBar";
import MainComponent from "./MainComponent";
const Body = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <MainComponent />
      </div>
    </div>
  );
};

export default Body;
