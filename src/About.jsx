import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaInfoCircle className="mr-2" /> About
      </h2>
      <p>
        This application allows you to convert Markdown to HTML and TXT formats. It's built using React and Vite, with styling provided by Tailwind CSS. You can easily download or copy the converted outputs.
      </p>
    </div>
  );
};

export default About;
