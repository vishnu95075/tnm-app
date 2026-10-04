import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound";


import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import MainLayout from "../layout/MainLayout/MainLayout";
import EditProfile from "../pages/EditProfile/EditProfile";
import CreatePost from "../pages/Posts/CreatePost";
import NotificationPage from "../pages/Notification/NotificationPage";
import LikePage from "../pages/Like/LikePage";
import CommentPage from "../pages/Comment/CommentPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/likes" element={<LikePage />} />
          <Route path="/comments" element={<CommentPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;