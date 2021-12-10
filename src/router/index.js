import { Drawer } from "../components";
import { LoginView, ContacView, HomeView } from "../views";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import RouterWithLayout from "./RouterLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Drawer>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/contact" element={<ContacView />} />
        </Routes>
      </Drawer>

      {/* <MainBar>
        <Routes>
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </MainBar> */}
    </BrowserRouter>
  );
};

export default Router;
