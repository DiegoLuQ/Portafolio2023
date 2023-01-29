import { Outlet } from "react-router-dom";
import MainMenu from "./components/moleculas/header/MainMenu";
import MainHeader from "./components/organismos/MainHeader";

function App() {
  return (
    <div className="max-w-[1240px] mx-auto">
      <MainHeader>
        <MainMenu />
      </MainHeader>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
