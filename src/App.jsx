import React from 'react';
import MarkdownConverter from './MarkdownConverter';
import About from './About';
import FAQ from './FAQ';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
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
