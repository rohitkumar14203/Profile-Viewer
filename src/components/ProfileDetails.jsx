import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Map from "./Map";
import { useProfiles } from "../context/ProfileContext";

const ProfileDetails = () => {
  const { id } = useParams();
  const { profiles } = useProfiles();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const foundProfile = profiles.find((p) => p.id === parseInt(id));
    setProfile(foundProfile);
    setLoading(false);
  }, [id, profiles]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!profile) {
    return <div className="text-center text-red-600">Profile not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-64 object-fit md:h-full"
            />
          </div>
          <div className="p-8 md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">{profile.name}</h2>
            <p className="text-gray-600 mb-4">{profile.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Contact Information
              </h3>
              <p className="text-gray-600">Email: {profile.email}</p>
              <p className="text-gray-600">Phone: {profile.phone}</p>
              <p className="text-gray-600">Address: {profile.address}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Location</h3>
        <Map address={profile.address} />
      </div>
    </div>
  );
};

export default ProfileDetails;
