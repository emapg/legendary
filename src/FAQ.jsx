import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaQuestionCircle className="mr-2" /> Frequently Asked Questions
      </h2>
      <ul className="list-disc pl-5">
        <li className="mb-2">
          <strong>Q:</strong> How do I use this app?
          <br />
          <strong>A:</strong> Simply enter your Markdown text in the textarea, and the HTML and preview will be generated automatically. You can download or copy the HTML output.
        </li>
        <li className="mb-2">
          <strong>Q:</strong> Can I download the converted HTML?
          <br />
          <strong>A:</strong> Yes, you can download the HTML output as a file using the "Download HTML" button.
        </li>
        <li className="mb-2">
          <strong>Q:</strong> How do I copy the HTML to the clipboard?
          <br />
          <strong>A:</strong> Use the "Copy HTML" button to copy the HTML output to your clipboard.
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
