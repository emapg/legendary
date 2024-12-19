import React, { useState } from 'react';
import { marked } from 'marked';
import ReactMarkdown from 'react-markdown';
import { AiOutlineDownload, AiOutlineCopy } from 'react-icons/ai';
import { FiRefreshCw } from 'react-icons/fi';

const MarkdownConverter = () => {
  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  const convertToHtml = () => {
    return { __html: marked(markdown) };
  };

  const downloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([markdown], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'markdown.txt';
    document.body.appendChild(element);
    element.click();
  };

  const downloadHtml = () => {
    const element = document.createElement('a');
    const file = new Blob([marked(markdown)], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'markdown.html';
    document.body.appendChild(element);
    element.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(marked(markdown));
    alert('HTML copied to clipboard!');
  };

  const clearMarkdown = () => {
    setMarkdown('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Markdown to HTML and TXT Converter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea
          value={markdown}
          onChange={handleMarkdownChange}
          placeholder="Enter your markdown here..."
          rows="10"
          className="w-full p-4 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        ></textarea>
        
        <div className="flex flex-col">
          <div>
            <h2 className="text-xl font-semibold mb-4">Markdown Preview</h2>
            <ReactMarkdown className="p-4 border rounded-md bg-gray-50 shadow-sm">{markdown}</ReactMarkdown>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">HTML Output</h2>
            <div className="p-4 border rounded-md bg-gray-50 shadow-sm" dangerouslySetInnerHTML={convertToHtml()} />
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <button onClick={downloadTxt} className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition">
          <AiOutlineDownload className="mr-2" /> Download TXT
        </button>
        <button onClick={downloadHtml} className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition">
          <AiOutlineDownload className="mr-2" /> Download HTML
        </button>
        <button onClick={copyToClipboard} className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600 transition">
          <AiOutlineCopy className="mr-2" /> Copy HTML
        </button>
        <button onClick={clearMarkdown} className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition">
          <FiRefreshCw className="mr-2" /> Clear
        </button>
      </div>
    </div>
  );
};

export default MarkdownConverter;
