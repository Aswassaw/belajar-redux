import { Provider } from "react-redux";
import "./App.css";
import UserContainer from "./components/UserContainer";
// import CakeContainer from "./components/CakeContainer";
// import HooksCakeContainer from "./components/HooksProductContainer";
// import ItemContainer from "./components/ItemContainer";
// import NewCakeContainer from "./components/NewCakeContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        {/* <NewCakeContainer />
        <HooksCakeContainer />
        <ItemContainer cake={true} /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
