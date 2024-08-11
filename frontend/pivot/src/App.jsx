import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
{
  /* Pages */
}
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Employee Dashboard Routes */}
          <Route
            path="/dashboard/employee/notifications"
            element={<Dashboard tab={"notifications"} />}
          />
          <Route
            path="/dashboard/employee/leave-management"
            element={<Dashboard tab={"leave-management"} />}
          />
          <Route
            path="/dashboard/employee/documents"
            element={<Dashboard tab={"documents"} />}
          />
          <Route
            path="/dashboard/employee/profile"
            element={<Dashboard tab="profile" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
