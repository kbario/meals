import { Component, lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";

import Landing from "./pages/Landing";
const Recipes = lazy(() => import("./pages/Recipes"));

import logo from "./logo.svg";
import Page from "./layout/Page";

const App: Component = () => {
  return (
    <Page>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/recipes"} element={<Recipes />} />
      </Routes>
    </Page>
  );
};

export default App;
