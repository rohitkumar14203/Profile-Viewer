import { useState, useEffect } from "react";
import ProfileList from "../components/ProfileList";
import Loader from "../components/Loader";

const HomePage = () => {
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
      <ProfileList />
    </div>
  );
};

export default HomePage;
