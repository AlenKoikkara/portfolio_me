const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
          <p className="mt-3 text-xl text-gray-500">
            Sharing my thoughts and experiences
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog posts will go here */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">Coming Soon</h2>
              <p className="mt-2 text-gray-600">Stay tuned for upcoming blog posts!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 