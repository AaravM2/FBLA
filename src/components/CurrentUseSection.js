import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, Target, BarChart, Megaphone, Settings, Lightbulb, 
  Eye, ShieldCheck, FileText, Scale 
} from 'lucide-react';

const CurrentUseSection = ({ currentBox }) => {
  const [animationKey, setAnimationKey] = useState(0);

  // Trigger re-animation when slide changes
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [currentBox]);

  const boxes = [
    // Box 0: Customer & Growth (Front-End AI)
    <div key={`growth-${animationKey}`} className="space-y-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-indigo-400 animate-contentSlide">
        Customer Experience & Growth
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1: Customer Service */}
        <div className="bg-indigo-900/30 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30 shadow-xl animate-contentSlide" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <h3 className="text-xl font-bold mb-4 text-indigo-300 flex items-center gap-2">
            <MessageSquare className="w-6 h-6" /> Customer Service
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "Chatbots handle inquiries 24/7",
              "Instant support, zero wait time",
              "Sentiment analysis of feedback",
              "Automated ticket routing",
              "Multilingual support"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 animate-contentSlide" style={{ animationDelay: `${0.2 + (i * 0.1)}s`, opacity: 0 }}>
                <span className="text-indigo-400">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Card 2: Recommendations */}
        <div className="bg-blue-900/30 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 shadow-xl animate-contentSlide" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
            <Target className="w-6 h-6" /> Personalization
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "Amazon product recommendations",
              "Spotify personalized playlists",
              "Netflix show suggestions",
              "Tailored e-commerce displays",
              "Higher conversion rates"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 animate-contentSlide" style={{ animationDelay: `${0.3 + (i * 0.1)}s`, opacity: 0 }}>
                <span className="text-blue-400">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3: Marketing */}
        <div className="bg-cyan-900/30 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30 shadow-xl animate-contentSlide" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <h3 className="text-xl font-bold mb-4 text-cyan-300 flex items-center gap-2">
            <Megaphone className="w-6 h-6" /> Marketing
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "AI-generated ad copy",
              "Targeted ad campaigns",
              "Customer segmentation",
              "Optimized ad spend",
              "A/B testing automation"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 animate-contentSlide" style={{ animationDelay: `${0.4 + (i * 0.1)}s`, opacity: 0 }}>
                <span className="text-cyan-400">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,

    // Box 1: Operations & Strategy (Back-End AI)
    <div key={`ops-${animationKey}`} className="space-y-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-teal-400 animate-contentSlide">
        Operations & Strategy
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1: Data Analysis */}
        <div className="bg-purple-900/30 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 shadow-xl animate-contentSlide" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <h3 className="text-xl font-bold mb-4 text-purple-300 flex items-center gap-2">
            <BarChart className="w-6 h-6" /> Data Analysis
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "Sales forecasting",
              "Fraud detection (JPMorgan)",
              "Pattern recognition",
              "Real-time market trends",
              "Predictive business planning"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 animate-contentSlide" style={{ animationDelay: `${0.2 + (i * 0.1)}s`, opacity: 0 }}>
                <span className="text-purple-400">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Card 2: Operations */}
        <div className="bg-teal-900/30 backdrop-blur-lg rounded-xl p-6 border border-teal-500/30 shadow-xl animate-contentSlide" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <h3 className="text-xl font-bold mb-4 text-teal-300 flex items-center gap-2">
            <Settings className="w-6 h-6" /> Operations
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "Supply chain optimization",
              "Inventory management",
              "Automated scheduling",
              "Paperwork processing",
              "Workflow optimization"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 animate-contentSlide" style={{ animationDelay: `${0.3 + (i * 0.1)}s`, opacity: 0 }}>
                <span className="text-teal-400">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3: Innovation */}
        <div className="bg-violet-900/30 backdrop-blur-lg rounded-xl p-6 border border-violet-500/30 shadow-xl animate-contentSlide" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <h3 className="text-xl font-bold mb-4 text-violet-300 flex items-center gap-2">
            <Lightbulb className="w-6 h-6" /> Innovation
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "New AI-powered tools",
              "Faster R&D cycles",
              "Automated product testing",
              "Market opportunity analysis",
              "Prototype generation"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 animate-contentSlide" style={{ animationDelay: `${0.4 + (i * 0.1)}s`, opacity: 0 }}>
                <span className="text-violet-400">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,

    // Box 2: Real World Examples
   

    // Box 3: Helpful vs Risky (OpenAI Response)
    <div key={`safety-${animationKey}`} className="space-y-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-yellow-400 animate-contentSlide">
        The Fine Line: Helpful vs. Risky
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Oversight */}
        <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-lg rounded-xl p-8 border border-yellow-500/30 shadow-2xl animate-contentSlide" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <h3 className="text-2xl font-semibold mb-4 text-yellow-300 flex items-center gap-3">
            <Eye className="w-8 h-8" /> Oversight
          </h3>
          <p className="text-gray-300 text-lg">
            AI is a helpful "assistant" when humans make final decisions. It gets risky if people blindly trust AI without checks, especially in finance or healthcare.
          </p>
        </div>

        {/* Data Privacy */}
        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-lg rounded-xl p-8 border border-blue-500/30 shadow-2xl animate-contentSlide" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <h3 className="text-2xl font-semibold mb-4 text-blue-300 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8" /> Data Privacy
          </h3>
          <p className="text-gray-300 text-lg">
            Using AI appropriately means protecting sensitive data. Risk rises if AI has access to customer or business information without strict safeguards.
          </p>
        </div>

        {/* Transparency */}
        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-lg rounded-xl p-8 border border-green-500/30 shadow-2xl animate-contentSlide" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <h3 className="text-2xl font-semibold mb-4 text-green-300 flex items-center gap-3">
            <FileText className="w-8 h-8" /> Transparency
          </h3>
          <p className="text-gray-300 text-lg">
            AI should clearly communicate limitations. Risk rises if the process or logic is hidden (black box), making errors hard to spot.
          </p>
        </div>

        {/* Responsibility */}
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-xl p-8 border border-purple-500/30 shadow-2xl animate-contentSlide" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <h3 className="text-2xl font-semibold mb-4 text-purple-300 flex items-center gap-3">
            <Scale className="w-8 h-8" /> Responsibility
          </h3>
          <p className="text-gray-300 text-lg">
            Businesses need clear guidelines for when AI can act independently versus when human approval is required.
          </p>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center animate-contentSlide" style={{ animationDelay: '0.5s', opacity: 0 }}>
        <p className="text-xl text-gray-200 leading-relaxed font-light">
          "In short, AI is safest as a <span className="text-yellow-400 font-bold">support tool</span>—with human review, clear policies, and strong privacy standards. Risks increase when AI’s outputs are used without oversight."
        </p>
        <p className="text-gray-400 text-sm mt-4 uppercase tracking-widest">- Insight from OpenAI</p>
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

export default CurrentUseSection;