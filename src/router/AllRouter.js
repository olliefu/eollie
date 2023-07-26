import React from "react";
import MainPage from "../views/all-home-version/MainPage";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";

const AllRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRouter;
