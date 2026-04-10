import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Jobs from "../Pages/Jobs";
import Learning from "../Pages/Learning";
import Projects from "../Pages/Projects";
import Resume from "../Pages/Resume";
import CompanyDashboard from "../Pages/CompanyDashboard";
import Mentorship from "../Pages/Mentorship";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/login";
import Signup from "../Pages/signUp";

// Auth Wrapper
import ProtectedRoute from "./ProtectedRoutes";

export default function AppRoutes() {
  return (
    <Routes>

      {/* 🔓 Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* 🔒 Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/company"
        element={
          <ProtectedRoute>
            <CompanyDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mentorship"
        element={
          <ProtectedRoute>
            <Mentorship />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/jobs"
        element={
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/learning"
        element={
          <ProtectedRoute>
            <Learning />
          </ProtectedRoute>
        }
      />

      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        }
      />

      <Route
        path="/resume"
        element={
          <ProtectedRoute>
            <Resume />
          </ProtectedRoute>
        }
      />

      {/* ❌ 404 Page */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}