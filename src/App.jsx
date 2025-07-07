import { Route, Routes, Navigate, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import AppLayout from "./layout/AppLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import CourseDetail from "./pages/CourseDetail";
import NotFound from "./pages/NotFound";
import LessonPage from "./pages/LessonPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const token = useSelector((state) => state.auth.token);

  const PrivateRoute = ({ children, redirectMessage }) => {
    return token ? (
      children
    ) : (
      <Navigate to="/login" state={{ message: redirectMessage }} replace />
    );
  };

  const PublicRoute = ({ children }) => {
    return token ? <Navigate to="/dashboard" replace /> : children;
  };

  return (
    <Routes>
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<LandingPage />} />
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
          path="/courses/:id/lessons/:lessonId"
          element={
            <PrivateRoute redirectMessage="You must log in to view lessons.">
              <LessonPage />
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
