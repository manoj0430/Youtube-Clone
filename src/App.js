import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import appStore from "./utils/appStore";
function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
