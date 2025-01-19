const SearchBar = ({ value, onChange }) => {
  return (
    <div className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search profiles..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
