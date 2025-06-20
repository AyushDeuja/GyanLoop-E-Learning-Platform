import { Route, Routes } from "react-router";
import AppLayout from "./layout/AppLayout";
import WelcomePage from "./pages/WelcomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/courses" element={<div>Courses Page</div>} />
        <Route path="/dashboard" element={<div>About Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
