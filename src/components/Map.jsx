const Map = ({ address }) => {
  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-gray-600 text-center">
        <p className="font-semibold mb-2">Location Preview</p>
        <p>{address}</p>
        <p className="text-sm text-gray-500 mt-2">
          (Map integration requires Mapbox token)
        </p>
      </div>
    </div>
  );
};

export default Map;
