import "./App.css";
import Router from "./router";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./layout/mainContainer";
import React from "react";

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
