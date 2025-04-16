const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
        </div>
        <div className="mt-12 prose prose-lg mx-auto">
          <p className="text-gray-600">
            Hello! I'm Alen Koikkara, a passionate developer and photographer. I love creating beautiful and functional web experiences while capturing moments through my camera lens.
          </p>
          <p className="text-gray-600 mt-4">
            With a background in web development and a keen eye for design, I strive to bring creativity and technical excellence to every project I work on.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">Skills</h2>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Frontend Development (React, TypeScript, Tailwind CSS)</li>
              <li>UI/UX Design</li>
              <li>Photography</li>
              <li>Creative Problem Solving</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 