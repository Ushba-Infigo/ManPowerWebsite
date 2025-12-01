import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";

function InsightsLayout() {
  return (
    <>
      <Banner />
      <Outlet />   {/* This is where GetArticalInsightsData will appear */}
    </>
  );
}

export default InsightsLayout;
