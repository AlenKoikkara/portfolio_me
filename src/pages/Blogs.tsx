import React from 'react';

const Blogs: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
      <div className="grid gap-6">
        <p className="text-lg">
          Welcome to my blog section. Here you'll find my thoughts, experiences, and insights
          about various topics.
        </p>
      </div>
    </div>
  );
};

export default Blogs; 