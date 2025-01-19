import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProfileProvider } from "./context/ProfileContext";
import HomePage from "./Pages/HomePage";
import ProfileDetailPage from "./Pages/ProfileDetailPage";
import AdminDashboardPage from "../src/Pages/AdminDashboardPage";

const App = () => {
  return (
    <ProfileProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile/:id" element={<ProfileDetailPage />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ProfileProvider>
  );
};

export default App;
