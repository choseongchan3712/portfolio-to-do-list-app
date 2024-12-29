import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import PageNotFound from "./pages/PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;