import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Provider } from "react-redux";
import Store from "../store/Store";
const RouteLayout = () => {
  return (
    <>
      <Provider store={Store}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RouteLayout;
