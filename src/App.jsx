import { Route, Routes, Navigate } from "react-router";
import { useSelector } from "react-redux";
import AppLayout from "./layout/AppLayout";
import WelcomePage from "./pages/WelcomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import Cart from "./pages/Cart";

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
        <Route path="courses" element={<Courses />} />
        <Route path="cart" element={<Cart />} />

        <Route
          path="dashboard"
          element={
            <PrivateRoute redirectMessage="You must log in to access the dashboard.">
              <div>Dashboard Page</div>
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
