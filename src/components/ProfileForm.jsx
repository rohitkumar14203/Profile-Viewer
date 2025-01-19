import { useState, useEffect } from "react";

const ProfileForm = ({ profile, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    description: "",
    address: "",
    email: "",
    phone: "",
    skills: "",
    interests: "",
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        ...profile,
        skills: profile.skills.join(", "),
        interests: profile.interests.join(", "),
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      skills: formData.skills.split(",").map((s) => s.trim()),
      interests: formData.interests.split(",").map((i) => i.trim()),
    };
    onSubmit(formattedData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-2 h-[32rem] overflow-y-scroll"
    >
      <div>
        <label className="block text-sm font-medium  text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-[90%] border border-gray-800  rounded-lg shadow-sm focus:border-blue-500 "
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Photo URL
        </label>
        <input
          type="url"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
          className="mt-1 block w-[90%] border border-gray-800  rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-[90%] border border-gray-800  rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-[90%] border border-gray-800  rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-[90%] border border-gray-800  rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-[90%] border border-gray-800  rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Skills (comma-separated)
        </label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          className="mt-1 block w-[90%] border border-gray-800  rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Interests (comma-separated)
        </label>
        <input
          type="text"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          className="mt-1 block w-[90%] border border-gray-800  rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          {profile ? "Update Profile" : "Create Profile"}
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
