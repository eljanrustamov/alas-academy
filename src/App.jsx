import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { useDispatch } from "react-redux";
import { addCourse } from "./components/Courses/coursesSlice";

import loadable from "@loadable/component";
//  sal animation
import sal from "sal.js";
import "./assets/scss/default/_sal.scss";
//
import Loading from "./components/Loading/Loading.component";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Career from "./pages/Career/Career";
import CourseDetails from "./pages/CourseDetails/CourseDetails.component";
const Main = loadable(() => import("./pages/Main"), { fallback: <Loading /> });

const Contact = loadable(() => import("./pages/Contact/Contact"), {
  fallback: <Loading />,
});

function App() {

  const dispatch = useDispatch();
  

  useEffect(() => {
    sal();
    const getCoursesData = async () => {
      try {
        let response = await fetch(
          "https://alasacademy.azurewebsites.net/api/Course/GetCourses"
        );
        const data = await response.json();

        if (data) {
          dispatch(addCourse(data.items));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCoursesData();

  }, [dispatch]);


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
          <Route path="karyera" element={<Career />} />
          <Route path="elaqe" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
