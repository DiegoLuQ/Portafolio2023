import { Outlet } from "react-router-dom";
import MainHeader from "./components/organismos/MainHeader";
import MainMenu from "./components/moleculas/header/MainMenu";
import MainFooter from "./components/organismos/MainFooter";
function App() {
  return (
    <div className="max-w-[1240px] mx-auto">
      <MainHeader>
        <MainMenu />
      </MainHeader>
      <div>
        <Outlet />
      </div>
      <MainFooter />
    </div>
  );
}

export default App;
