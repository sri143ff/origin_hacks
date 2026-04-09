import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Jobs from "../Pages/Jobs";
import Learning from "../Pages/Learning";
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

      {/* ❌ 404 Page */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}