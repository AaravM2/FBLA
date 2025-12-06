import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Brain, Cpu, Network, Zap } from 'lucide-react';

const IntroSection = ({ showLanding, setShowLanding, currentBox }) => {
  const [showParticles, setShowParticles] = useState(true);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (showLanding) {
      setTimeout(() => setShowTitle(true), 500);
      setTimeout(() => setShowSubtitle(true), 1200);
      setTimeout(() => setShowCards(true), 1800);
      setTimeout(() => setShowButton(true), 2400);
      setTimeout(() => setShowParticles(false), 3000);
    }
  }, [showLanding]);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [currentBox]);

  if (showLanding) {
    return (
      <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-6000"></div>
        </div>

        {showParticles && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute particle"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${Math.random() * 8 + 4}px`,
                  height: `${Math.random() * 8 + 4}px`,
                  background: `hsl(${Math.random() * 360}, 70%, 60%)`,
                  borderRadius: '50%',
                  animation: `explode ${Math.random() * 2 + 1}s ease-out forwards`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  '--tx': `${(Math.random() - 0.5) * 1000}px`,
                  '--ty': `${(Math.random() - 0.5) * 1000}px`,
                }}
              />
            ))}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-slate-900/80 to-gray-900/90"></div>
        <div className="absolute inset-0 bg-radial-gradient opacity-50"></div>

        <div className="relative z-10 text-center space-y-12 px-4">
          <div className={`relative transition-all duration-1000 ${showTitle ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`}>
            <div className="relative inline-block">
              <div className="absolute inset-0 animate-ping-slow">
                <div className="absolute inset-[-20px] border-4 border-purple-500/30 rounded-full"></div>
              </div>
              <div className="absolute inset-0 animate-ping-slower">
                <div className="absolute inset-[-40px] border-4 border-blue-500/20 rounded-full"></div>
              </div>
              
              <h1 
                className="relative text-9xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
                style={{
                  textShadow: `
                    0 0 10px rgba(59, 130, 246, 0.5),
                    0 0 20px rgba(147, 51, 234, 0.5),
                    0 0 30px rgba(236, 72, 153, 0.5),
                    0 0 40px rgba(59, 130, 246, 0.3),
                    0 0 70px rgba(147, 51, 234, 0.3),
                    0 0 80px rgba(236, 72, 153, 0.3)
                  `,
                  animation: 'glow 2s ease-in-out infinite alternate'
                }}
              >
                Balance Tech
              </h1>
              
              <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-yellow-400 animate-pulse" />
              <Sparkles className="absolute -bottom-4 -left-4 w-10 h-10 text-pink-400 animate-pulse animation-delay-1000" />
            </div>
            <div className="h-2 w-64 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm animate-pulse"></div>
          </div>
          
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-4xl text-white/90 font-light tracking-wide">
              Exploring the Future
            </p>
            <p className="text-2xl text-gray-300 font-light">Presented by</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className={`group relative transition-all duration-700 ${showCards ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-0 translate-y-20'}`}
                 style={{ transitionDelay: '0ms' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse-slow"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 transform hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-2xl">
                <p className="text-4xl font-bold text-white drop-shadow-lg">Ishaan Negi</p>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>

            <div className={`group relative transition-all duration-700 ${showCards ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-0 translate-y-20'}`}
                 style={{ transitionDelay: '200ms' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse-slow"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 transform hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-2xl">
                <p className="text-4xl font-bold text-white drop-shadow-lg">Aarav Magesh</p>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>

            <div className={`group relative transition-all duration-700 ${showCards ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-0 translate-y-20'}`}
                 style={{ transitionDelay: '400ms' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse-slow"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 transform hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-2xl">
                <p className="text-4xl font-bold text-white drop-shadow-lg">Nihas Nagumalla</p>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          <div className={`mt-16 transition-all duration-1000 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={() => setShowLanding(false)}
              className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></span>
              <span className="relative">Begin Presentation</span>
              <ChevronDown className="relative w-8 h-8 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const boxes = [
    // Box 0: Interactive AI Visualization
    <div key={`visual-${animationKey}`} className="space-y-8">
      <h2 className="text-6xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        What is AI in Business?
      </h2>
      
      {/* Cool 3D Neural Network Visual */}
      <div className="relative h-96 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-3xl border border-blue-500/30 overflow-hidden backdrop-blur-xl shadow-2xl">
        {/* Animated Connection Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="rgba(96, 165, 250, 0.3)"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </svg>

        {/* Neural Nodes */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Center Brain Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-50 animate-pulse"></div>
                <Brain className="relative w-32 h-32 text-blue-400 animate-float" />
              </div>
            </div>

            {/* Orbiting Icons */}
            {[
              { icon: Cpu, angle: 0, color: 'text-purple-400', delay: 0 },
              { icon: Network, angle: 90, color: 'text-pink-400', delay: 0.5 },
              { icon: Zap, angle: 180, color: 'text-cyan-400', delay: 1 },
              { icon: Sparkles, angle: 270, color: 'text-green-400', delay: 1.5 }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    animation: `orbit 8s linear infinite`,
                    animationDelay: `${item.delay}s`,
                    transform: `rotate(${item.angle}deg) translateX(150px) rotate(-${item.angle}deg)`
                  }}
                >
                  <div className="relative">
                    <div className={`absolute inset-0 blur-xl opacity-50 ${item.color.replace('text-', 'bg-')}`}></div>
                    <Icon className={`relative w-16 h-16 ${item.color}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Text */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-2xl font-bold text-white drop-shadow-lg">
            AI transforms business operations through intelligent automation
          </p>
        </div>
      </div>

      {/* Key Points */}
      <div className="grid md:grid-cols-2 gap-6">
        
          
          <div 
            
           
          >
            
          </div>
        
      </div>
    </div>,

    // Box 1: AI Types Visual
    <div key={`types-${animationKey}`} className="space-y-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-purple-400">
        Four Main Types of AI
      </h2>

      <div className="space-y-6">
        {/* Machine Learning */}
        <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur-xl rounded-3xl p-8 border-2 border-blue-500/40 shadow-2xl animate-contentSlide" style={{ opacity: 0 }}>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-5xl">🤖</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-blue-300 mb-3">Machine Learning (ML)</h3>
              <p className="text-gray-300 mb-4 text-lg">
                AI that learns from data rather than following fixed rules set by creators
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <p className="text-green-400 font-semibold">✓ Finds patterns automatically</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <p className="text-green-400 font-semibold">✓ Improves over time</p>
                </div>
                <div className="bg-red-500/10 rounded-lg p-3">
                  <p className="text-red-400 font-semibold">✗ Can learn biases</p>
                </div>
                <div className="bg-red-500/10 rounded-lg p-3">
                  <p className="text-red-400 font-semibold">✗ Needs lots of data</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                <strong>Examples:</strong> Netflix recommendations, spam filters, fraud detection
              </p>
            </div>
          </div>
        </div>

        {/* Deep Learning */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-500/40 shadow-2xl animate-contentSlide" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-5xl">🧠</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-purple-300 mb-3">Deep Learning (DL)</h3>
              <p className="text-gray-300 mb-4 text-lg">
                Extremely accurate for images, speech, and text using neural networks
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-purple-500/10 rounded-lg p-3">
                  <p className="text-green-400 font-semibold">✓ Handles complex data</p>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-3">
                  <p className="text-green-400 font-semibold">✓ Powers modern AI</p>
                </div>
                <div className="bg-red-500/10 rounded-lg p-3">
                  <p className="text-red-400 font-semibold">✗ Needs massive computing</p>
                </div>
                <div className="bg-red-500/10 rounded-lg p-3">
                  <p className="text-red-400 font-semibold">✗ Works like black box</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                <strong>Examples:</strong> Self-driving cars, facial recognition, ChatGPT
              </p>
            </div>
          </div>
        </div>

        {/* NLP & Computer Vision - Compact */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-xl rounded-2xl p-6 border-2 border-green-500/40 shadow-2xl animate-contentSlide" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-2xl font-bold text-green-300 mb-2">Natural Language Processing</h3>
            <p className="text-gray-300 text-sm mb-3">Understands and generates human language</p>
            <p className="text-xs text-gray-400">
              <strong>Examples:</strong> Google Translate, Siri/Alexa
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-900/50 to-yellow-900/50 backdrop-blur-xl rounded-2xl p-6 border-2 border-orange-500/40 shadow-2xl animate-contentSlide" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <div className="text-4xl mb-3">👁️</div>
            <h3 className="text-2xl font-bold text-orange-300 mb-2">Computer Vision</h3>
            <p className="text-gray-300 text-sm mb-3">Recognizes and understands visual information</p>
            <p className="text-xs text-gray-400">
              <strong>Examples:</strong> Medical scans, Snapchat filters
            </p>
          </div>
        </div>
      </div>
    </div>,

    // Box 2: Purpose
    <div key={`purpose-${animationKey}`} className="space-y-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-indigo-400">
        Our Purpose
      </h2>

      <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-xl rounded-3xl p-10 border-2 border-indigo-500/40 shadow-2xl">
        <p className="text-gray-200 text-xl leading-relaxed mb-8 text-center">
          This presentation examines the transformative impact of AI on modern businesses, exploring both its 
          revolutionary potential and significant challenges. We chose this topic because AI is reshaping every 
          industry and understanding its proper implementation is crucial for future business success.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🎯', title: 'Real Applications', desc: 'Examine AI across industries' },
            { icon: '⚡', title: 'Opportunities', desc: 'Competitive advantages' },
            { icon: '⚠️', title: 'Challenges', desc: 'Critical failure points' },
            { icon: '📚', title: 'Learn', desc: 'Success & failure stories' },
            { icon: '🤝', title: 'Ethics', desc: 'Responsible implementation' },
            { icon: '⚖️', title: 'Solutions', desc: 'Balanced AI integration' }
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center animate-contentSlide hover:scale-110 transition-all duration-500"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <div className="text-5xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-bold text-indigo-300 mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ];

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4">
      <div className="w-full max-w-7xl">
        {boxes[currentBox]}
      </div>

      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(150px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(150px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default IntroSection;