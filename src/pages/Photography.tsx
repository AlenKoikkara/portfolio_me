const Photography = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Photography</h1>
          <p className="mt-3 text-xl text-gray-500">
            Capturing moments through my lens
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Photo grid will go here */}
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Photos coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography; 