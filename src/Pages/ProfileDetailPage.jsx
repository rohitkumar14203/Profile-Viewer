import { useState, useEffect } from "react";
import ProfileDetails from "../components/ProfileDetails";
import Loader from "../components/Loader";

const ProfileDetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <ProfileDetails />
    </div>
  );
};

export default ProfileDetailPage;
