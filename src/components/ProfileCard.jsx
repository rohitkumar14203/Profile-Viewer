import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import Map from "./Map";

const ProfileCard = ({ profile }) => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-full h-48 object-scale-down bg-black "
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
          <p className="text-gray-600 mb-4">{profile.description}</p>
          <div className="flex justify-between items-center">
            <Link
              to={`/profile/${profile.id}`}
              className="text-blue-600 hover:text-blue-800"
            >
              View Details
            </Link>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setIsMapOpen(true)}
            >
              Show on Map
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)}>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <Map address={profile.address} />
        </div>
      </Modal>
    </>
  );
};

export default ProfileCard;
