import React, {useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import pMinDelay from 'p-min-delay';
import loadable from "@loadable/component";
//  sal animation
import sal from "sal.js";
import "./assets/scss/default/_sal.scss";
//
import Loading from "./components/Loading/Loading.component";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
const Main = loadable(() => import("./pages/Main"), {fallback: <Loading/>,});
const CourseDetails = loadable(() => pMinDelay(import("./pages/CourseDetails/CourseDetails.component"),1000),{ fallback: <Loading/>,});
const Contact = loadable(() => import("./pages/Contact/Contact"), {fallback: <Loading/>,});

function App() {
  useEffect(() => {
    sal();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route
            exact
            path="tedris-proqramlarimiz/:courseName"
            element={<CourseDetails />}
          />
          <Route path="elaqe" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
