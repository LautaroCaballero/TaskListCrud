import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import LoginFormik from "./components/forms/loginFormik";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import DashBoard from "./pages/dashboard/DashBoard";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/auth/RegisterPage";
import TasksPage from "./pages/tasks/TasksPage";

function AppRoutingOne() {
  let loggedIn = true;

  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={loggedIn ? <DashBoard /> : <LoginFormik />} /> */}
          <Route
            path="/"
            element={
              loggedIn ? (
                <Navigate replace to="/dashboard" />
              ) : (
                <Navigate replace to="/login" />
              )
            }
          />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={
              loggedIn ? <DashBoard /> : <Navigate replace to="/login" />
            }
          />
          <Route
            path="/tasks"
            element={
              loggedIn ? <TasksPage /> : <Navigate replace to="/login" />
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
