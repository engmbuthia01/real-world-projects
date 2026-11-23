import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import CoursePlayer from "./pages/CoursePlayer";
import MyLearning from "./pages/MyLearning";
import InstructorPanel from "./pages/InstructorPanel";
import CourseEditor from "./pages/CourseEditor";

const App = () => {
  return (
    <div>
      <Toaster position="bottom-right" />
      <p>Navigation bar</p>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/learn/:id" element={<CoursePlayer />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/instructor" element={<InstructorPanel />} />
          <Route path="/instructor/editor" element={<CourseEditor />} />
        </Routes>
      </main>
      <p>Footer</p>
    </div>
  );
};

export default App;
