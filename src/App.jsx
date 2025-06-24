import { Route, Routes, Navigate } from "react-router";
import { useSelector } from "react-redux";
import AppLayout from "./layout/AppLayout";
import WelcomePage from "./pages/WelcomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import CourseDetail from "./pages/CourseDetail";
import NotFound from "./pages/NotFound";
import Lessons from "./pages/Lessons";

function App() {
  const token = useSelector((state) => state.auth.token);

  const PrivateRoute = ({ children, redirectMessage }) => {
    return token ? (
      children
    ) : (
      <Navigate to="/login" state={{ message: redirectMessage }} replace />
    );
  };

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<AppLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/courses" element={<Courses />} />

        <Route
          path="/courses/:id"
          element={
            <PrivateRoute redirectMessage="You must log in to enroll.">
              <CourseDetail />
            </PrivateRoute>
          }
        />

        <Route
          path="/courses/:id/lessons"
          element={
            <PrivateRoute redirectMessage="You must log in to view lessons.">
              <Lessons />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectMessage="You must log in to access the dashboard.">
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Route>

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
