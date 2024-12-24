// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Component/common/Navbar.jsx";
import FooterComponent from "./Component/common/Footer.jsx";
import HomePage from "./Component/home/HomePage.jsx";
import AllRoomsPage from "./Component/booking_rooms/AllRoomsPage.jsx";
import FindBookingPage from "./Component/booking_rooms/FindBookingPage.jsx";
import RoomDetailsPage from "./Component/booking_rooms/RoomDetailsPage.jsx";
import LoginPage from "./Component/auth/LoginPage.jsx";
import RegisterPage from "./Component/auth/RegisterPage.jsx";
import ProfilePage from "./Component/profile/ProfilePage.jsx";
import EditProfilePage from "./Component/profile/EditProfilePage.jsx";
import { ProtectedRoute, AdminRoute } from "./service/guard";
import AdminPage from "./Component/admin/AdminPage.jsx";
import ManageRoomPage from "./Component/admin/ManageRoomPage.jsx";
import EditRoomPage from "./Component/admin/EditRoomPage.jsx";
import ManageBookingsPage from "./Component/admin/ManageBookingPage.jsx";
import EditBookingPage from "./Component/admin/EditBookingPage.jsx";
import AddRoomPage from "./Component/admin/AddRoomPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* public route */}
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/rooms" element={<AllRoomsPage />} />
            <Route exact path="/find-booking" element={<FindBookingPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />

            {/* authenticated users routes */}
            <Route
              exact
              path="/room-details-book/:roomId"
              element={<ProtectedRoute element={<RoomDetailsPage />} />}
            />

            <Route
              path="/profile"
              element={<ProtectedRoute element={<ProfilePage />} />}
            />
            <Route
              path="/edit-profile"
              element={<ProtectedRoute element={<EditProfilePage />} />}
            />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={<AdminRoute element={<AdminPage />} />}
            />
            <Route
              path="/admin/manage-rooms"
              element={<AdminRoute element={<ManageRoomPage />} />}
            />
            <Route
              path="/admin/edit-room/:roomId"
              element={<AdminRoute element={<EditRoomPage />} />}
            />
            <Route
              path="/admin/add-room"
              element={<AdminRoute element={<AddRoomPage />} />}
            />
            <Route
              path="/admin/manage-bookings"
              element={<AdminRoute element={<ManageBookingsPage />} />}
            />
            <Route
              path="/admin/edit-booking/:bookingCode"
              element={<AdminRoute element={<EditBookingPage />} />}
            />

            {/* FallBack Route */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
