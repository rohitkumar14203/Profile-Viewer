import { useState, useEffect } from "react";
import AdminDashboard from "../components/AdminDashboard";
import Loader from "../components/Loader";

const AdminDashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
      <AdminDashboard />
    </div>
  );
};

export default AdminDashboardPage;
