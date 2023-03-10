import "./App.css";
import Layout from "./layout/Layout";
import CourseDetails from "./pages/CourseDetails/CourseDetails.component";
import Main from "./pages/Main";
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="tedris-proqramlarimiz/:courseName" element={<CourseDetails />} />
          <Route path="elaqe" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
