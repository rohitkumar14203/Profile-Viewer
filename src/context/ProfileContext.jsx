import { createContext, useContext, useState } from "react";

import myPic from "../assets/pic.jpg";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Rohit Kumar",
      photo: myPic, // Replace with your photo URL if available
      description:
        "Rohit Kumar is a fresh graduate from Chandigarh University with a solid foundation in web development. He specializes in creating responsive web applications using HTML, CSS, JavaScript, and React.js and also has basic knowledge of backend technologies like Node.js, Express.js, and MongoDB.",
      address: "Una, Himachal Pradesh, India",
      email: "rk142003mark@gmail.com", // Replace with your email if needed
      phone: "+91 7876713227", // Replace with your phone number if you'd like
      skills: [
        "React.js",
        "JavaScript",
        "HTML & CSS",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      interests: [
        "learning new technologies",
        "building user-friendly web applications",
        "problem-solving",
        "collaborating on tech projects",
      ],
    },
    {
      id: 2,
      name: "Tony Stark",
      photo:
        "data:image/jpeg;base64,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",
      description:
        "Stark is initially depicted as an industrialist, genius inventor, and former playboy who is CEO of Stark Industries. Initially the chief weapons manufacturer for the U.S. military, he has a change of heart and redirects his technical knowledge into creating mechanized suits of armor, which he uses to defend Earth.",
      address: "10880 Malibu Point, Malibu, California 90265",
      email: "tonystark@stark.in",
      phone: "23XXXX756",
      skills: ["engineering", "hacking", "creativity", "resilience"],
      interests: [
        "cocktails",
        "beautiful women",
        "particle physics",
        "saving the world",
      ],
    },
    {
      id: 3,
      name: "Spider-Man",
      photo:
        "https://easydrawingguides.com/wp-content/uploads/2023/07/how-to-draw-spider-mans-face-featured-image-1200.png",
      description:
        "Spider Man is a superhero with extraordinary abilities, including wall-crawling, superhuman strength, agility, and a 'spider-sense' that alerts him to danger. He patrols the streets of New York City, fighting crime and protecting its citizens from villains.",
      address: "Swinging across New York City",
      email: "spiderman@webslinger.net",
      phone: "Unavailable",
      skills: [
        "wall-crawling",
        "web-shooting",
        "enhanced strength",
        "spider-sense",
        "agility",
      ],
      interests: [
        "fighting crime",
        "saving lives",
        "scientific innovation",
        "keeping New York safe",
      ],
    },
  ]);

  const addProfile = (profile) => {
    const newProfile = {
      ...profile,
      id: Math.max(0, ...profiles.map((p) => p.id)) + 1,
    };
    setProfiles((prev) => [...prev, newProfile]);
  };

  const updateProfile = (updatedProfile) => {
    setProfiles((prev) =>
      prev.map((p) => (p.id === updatedProfile.id ? updatedProfile : p))
    );
  };

  const deleteProfile = (profileId) => {
    setProfiles((prev) => prev.filter((p) => p.id !== profileId));
  };

  return (
    <ProfileContext.Provider
      value={{ profiles, addProfile, updateProfile, deleteProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfiles = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfiles must be used within a ProfileProvider");
  }
  return context;
};
