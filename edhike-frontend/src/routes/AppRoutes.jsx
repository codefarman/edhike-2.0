import { Routes, Route } from "react-router-dom";

// Existing Pages
import Home from "../pages/Home/Home";
import OnlineMBA from "../pages/OnlineMBA/OnlineMBA";

// Programs Pages
import ProgramCatalogPage from "../pages/Program/ProgramCatalogPage";
// import ProgramCategoryPage from "../pages/ProgramCategoryPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Core Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/online-mba" element={<OnlineMBA />} />

      {/* Phase 1: Master Program Catalog */}
      <Route path="/programs" element={<ProgramCatalogPage />} />

      {/* Phase 2: Program Category Page */}
      {/* <Route
        path="/programs/:categorySlug"
        element={<ProgramCategoryPage />}
      /> */}
    </Routes>
  );
};

export default AppRoutes;



// import { Routes, Route } from "react-router-dom";

// // Pages
// import Home from "../pages/Home/Home";
// import OnlineMBA from "../pages/OnlineMBA/OnlineMBA";
// import ProgramCategoryPage from "../pages/Program/ProgramCategoryPage";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/online-mba" element={<OnlineMBA />} />

//       {/* Parent Program Category Page */}
//       <Route
//         path="/programs/:programSlug"
//         element={<ProgramCategoryPage />}
//       />
//     </Routes>
//   );
// };

// export default AppRoutes;
