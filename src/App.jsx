import { Route, Routes } from "react-router";
import AppLayout from "./layout/AppLayout";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/courses" element={<div>Courses Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
