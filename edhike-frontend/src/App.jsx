// import React from 'react'
// import './App.css'
// import Navbar from './components/Navbar/Navbar.jsx'
// import Home from './pages/Home/Home.jsx'
// import Footer from './components/Footer/Footer.jsx'

// function App() {
  
//   return (
//    <div>
    
//     <Navbar />
      
//     <Home />
    
//     <Footer />
//    </div>
//   )
// }

// export default App





import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import OnlineMBA from "./pages/OnlineMBA/OnlineMBA";

// Layout
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/online-mba" element={<OnlineMBA />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;



// import React from "react";
// import { Routes, Route } from "react-router-dom";

// // Pages
// import Home from "./pages/Home/Home";
// import OnlineMBA from "./pages/OnlineMBA/OnlineMBA";

// // Common layout (optional)
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

// const App = () => {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/online-mba" element={<OnlineMBA />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// };

// export default App;