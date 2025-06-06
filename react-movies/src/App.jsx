import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SiteHeader from "./components/siteHeader"; 
import MoviesPage from "./pages/homePage";

const App = () => {
  return (
    <>
      <SiteHeader />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
         <Route path="/movies" element={<MoviesPage />} />
 
        {}
      </Routes>
    </>
  );
};

export default App;
