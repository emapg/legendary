import React from 'react';
import MarkdownConverter from './MarkdownConverter';
import About from './About';
import FAQ from './FAQ';
import SEO from './SEO';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <SEO
        title="Markdown to HTML and TXT Converter"
        description="A simple and efficient tool to convert Markdown to HTML and TXT formats. Built with React and Vite."
      />
      <MarkdownConverter />
      <div className="container mx-auto p-6 mt-10">
        <About />
      </div>
      <div className="container mx-auto p-6 mt-10">
        <FAQ />
      </div>
    </div>
  );
}

export default App;
