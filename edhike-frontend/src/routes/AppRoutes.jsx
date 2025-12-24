import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import OnlineMBA from "../pages/OnlineMBA/OnlineMBA";
// import Programs from "../pages/Program/Programs";
// import ProgramDetail from "../pages/Program/ProgramDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/online-mba" element={<OnlineMBA />} />

      {/* Programs */}
      {/* <Route path="/programs" element={<Programs />} />
      <Route path="/programs/:programSlug" element={<ProgramDetail />} /> */}
    </Routes>
  );
};

export default AppRoutes;
