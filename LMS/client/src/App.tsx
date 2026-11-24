import { Toaster } from "react-hot-toast";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import CoursePlayer from "./pages/CoursePlayer";
import MyLearning from "./pages/MyLearning";
import InstructorPanel from "./pages/InstructorPanel";
import CourseEditor from "./pages/CourseEditor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  const isPlayer = location.pathname.startsWith("/learn/");
  return (
    <div
      className={`flex flex-col bg-white font-urbanist ${isPlayer ? "h-screen overflow-hidden" : "min-h-screen"}`}
    >
      <Toaster position="bottom-right" />

      <Navbar />

      <main
        className={`flex-1 ${isPlayer ? "h-full min-h-0 overflow-hidden" : ""}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/learn/:id" element={<CoursePlayer />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/instructor" element={<InstructorPanel />} />
          <Route path="/instructor/editor" element={<CourseEditor />} />
          <Route path="/instructor/editor/:id" element={<CourseEditor />} />
        </Routes>
      </main>

      {!isPlayer && <Footer />}
    </div>
  );
};

export default App;
