import { useState } from "react";
import ProfileCard from "./ProfileCard";
import SearchBar from "./SearchBar";
import { useProfiles } from "../context/ProfileContext";

const ProfileList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { profiles } = useProfiles();

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
