import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="max-w-2xl">
        <p className="text-lg mb-4">
          Welcome to my about page. Here you'll learn more about who I am,
          my background, and what drives me.
        </p>
        <p className="text-lg">
          I'm passionate about creating meaningful experiences through technology
          and design. This portfolio showcases my journey and the projects I've
          worked on.
        </p>
      </div>
    </div>
  );
};

export default About; 