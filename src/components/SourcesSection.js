import React, { useState, useEffect } from 'react';
import { BookOpen, Code, Terminal, ExternalLink, Heart, MessageCircle } from 'lucide-react';

const SourcesSection = ({ currentBox }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [currentBox]);

  const boxes = [
    // Box 0: Sources, Credits & Thank You (All in one)
    <div key={`sources-${animationKey}`} className="space-y-8 pb-10">
      <h2 className="text-5xl font-bold text-center mb-10 text-blue-400 animate-contentSlide">
        Sources & Credits
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Research Sources */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 animate-contentSlide" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <h3 className="text-2xl font-bold mb-6 text-blue-300 flex items-center gap-3">
            <BookOpen className="w-6 h-6" /> Research & Data
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
              <ExternalLink className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div className="text-gray-300">
                <strong className="text-white">ESADE Business School</strong>
                <p className="text-sm text-gray-400">Strategic steps for AI implementation</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
              <ExternalLink className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div className="text-gray-300">
                <strong className="text-white">ITSG Global</strong>
                <p className="text-sm text-gray-400">Implementation cost analysis & statistics</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
              <ExternalLink className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div className="text-gray-300">
                <strong className="text-white">OpenAI</strong>
                <p className="text-sm text-gray-400">Insights on AI safety and oversight</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
              <ExternalLink className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div className="text-gray-300">
                <strong className="text-white">IBM Watson & JPMorgan</strong>
                <p className="text-sm text-gray-400">Case studies and performance metrics</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column: Tech Stack & Credits */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 animate-contentSlide" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <h3 className="text-2xl font-bold mb-6 text-purple-300 flex items-center gap-3">
              <Terminal className="w-6 h-6" /> Built With
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400 text-xl">⚛️</span> 
                <span className="font-semibold">React.js Library</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-blue-400 text-xl">🎨</span> 
                <span className="font-semibold">Tailwind CSS Styling</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-purple-400 text-xl">✨</span> 
                <span className="font-semibold">Lucide React Icons</span>
              </div>
            </div>
          </div>

          {/* VS Code Credit Box */}
          <div className="bg-blue-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/50 animate-contentSlide transform hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="flex items-center justify-center gap-4 text-white">
              <Code className="w-10 h-10 text-blue-400" />
              <div className="flex flex-col">
                <span className="text-sm text-blue-200 uppercase tracking-wider font-semibold">Development Environment</span>
                <span className="text-2xl font-bold">Coded with Visual Studio Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Section */}
      <div className="mt-16 animate-contentSlide" style={{ animationDelay: '0.5s', opacity: 0 }}>
        <div className="bg-gradient-to-r from-indigo-900/60 via-purple-900/60 to-pink-900/60 backdrop-blur-xl rounded-3xl p-10 border-2 border-white/10 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Thank You!
          </h2>
          
          <p className="text-2xl text-gray-200 font-light mb-8">
            Thank you for your time and attention.
          </p>

          <div className="inline-flex items-center gap-3 bg-white/10 px-8 py-4 rounded-full border border-white/20 text-white animate-pulse">
            <MessageCircle className="w-6 h-6 text-purple-400" />
            <span className="text-lg font-semibold">Any Questions?</span>
          </div>

          <div className="mt-8 flex justify-center gap-2">
             <Heart className="w-6 h-6 text-pink-500 animate-bounce" />
          </div>
        </div>
      </div>

      <div className="text-center mt-8 animate-contentSlide" style={{ animationDelay: '0.6s', opacity: 0 }}>
        <p className="text-gray-500 text-sm">© 2024 Business AI Presentation</p>
      </div>
    </div>
  ];

  const activeIndex = Math.min(currentBox, boxes.length - 1);

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        {boxes[activeIndex]}
      </div>
    </div>
  );
};

export default SourcesSection;