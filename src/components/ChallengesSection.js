import React, { useState, useEffect } from 'react';
import { AlertTriangle, ShieldAlert, DollarSign, Users, XCircle } from 'lucide-react';

const ChallengesSection = ({ currentBox }) => {
  const [animationKey, setAnimationKey] = useState(0);

  // Restart animations when slide changes
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [currentBox]);

  const boxes = [
    // Box 0: Accuracy & Security Risks
    <div key={`risks-${animationKey}`} className="space-y-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-orange-400 animate-contentSlide">
        Risks & Security
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Card 1: Accuracy */}
        <div className="bg-red-900/30 backdrop-blur-lg rounded-xl p-8 border border-red-500/30 shadow-2xl animate-contentSlide" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <h3 className="text-2xl font-semibold mb-4 text-red-400 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" />
            Accuracy & Accountability
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            AI applications are often "black boxes",non-transparent and difficult to audit. Relying on them creates significant accountability gaps.
          </p>
          <ul className="space-y-3 text-gray-300">
            {[
              "Algorithms make unexplainable decisions",
              "Inconsistent outputs from identical inputs",
              "Legal liability is unclear when AI errors occur",
              "Outdated training data leads to poor advice"
            ].map((item, i) => (
              <li 
                key={i} 
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 animate-contentSlide"
                style={{ animationDelay: `${0.3 + (i * 0.1)}s`, opacity: 0 }}
              >
                <span className="text-red-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Card 2: Security */}
        <div className="bg-orange-900/30 backdrop-blur-lg rounded-xl p-8 border border-orange-500/30 shadow-2xl animate-contentSlide" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <h3 className="text-2xl font-semibold mb-4 text-orange-400 flex items-center gap-3">
            <ShieldAlert className="w-8 h-8" />
            Security Concerns
          </h3>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-5xl font-bold text-orange-400">65%</span>
            <span className="text-gray-400 mb-2">of companies fear liability</span>
          </div>
          <p className="text-gray-300 mb-6 text-lg">
            Without proper cybersecurity, AI becomes a vulnerability vector, opening doors to data poisoning and sophisticated cyberattacks.
          </p>
          <ul className="space-y-3 text-gray-300">
            {[
              "Data poisoning can corrupt model behavior",
              "Model inversion attacks reveal private data",
              "Accidental leakage of confidential IP",
              "Vulnerable to adversarial inputs"
            ].map((item, i) => (
              <li 
                key={i} 
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 animate-contentSlide"
                style={{ animationDelay: `${0.4 + (i * 0.1)}s`, opacity: 0 }}
              >
                <span className="text-orange-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,

    // Box 1: Costs & Workforce
    <div key={`costs-${animationKey}`} className="space-y-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-red-400 animate-contentSlide">
        Costs & Workforce Impact
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Card 1: Costs */}
        <div className="bg-red-900/30 backdrop-blur-lg rounded-xl p-8 border border-red-500/30 shadow-2xl animate-contentSlide" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <h3 className="text-2xl font-semibold mb-4 text-red-400 flex items-center gap-3">
            <DollarSign className="w-8 h-8" />
            High Implementation Costs
          </h3>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-5xl font-bold text-red-400">$20M+</span>
            <span className="text-gray-400 mb-2">avg. enterprise investment</span>
          </div>
          <p className="text-gray-300 mb-6 text-lg">
            Initial investment, maintenance, and oversight costs often exceed the expense of traditional human labor in the short term.
          </p>
          <ul className="space-y-3 text-gray-300">
            {[
              "Massive upfront infrastructure upgrades",
              "High salaries for scarce AI specialists",
              "Ongoing maintenance and energy costs",
              "ROI is uncertain and slow to realize"
            ].map((item, i) => (
              <li 
                key={i} 
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 animate-contentSlide"
                style={{ animationDelay: `${0.3 + (i * 0.1)}s`, opacity: 0 }}
              >
                <span className="text-red-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2: Workforce */}
        <div className="bg-orange-900/30 backdrop-blur-lg rounded-xl p-8 border border-orange-500/30 shadow-2xl animate-contentSlide" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <h3 className="text-2xl font-semibold mb-4 text-orange-400 flex items-center gap-3">
            <Users className="w-8 h-8" />
            Skills Gap & Displacement
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Most companies lack internal expertise, and the rapid shift to AI threatens severe job displacement before the workforce can adapt.
          </p>
          <ul className="space-y-3 text-gray-300">
             {[
              "Critical shortage of qualified professionals",
              "Existing workforce struggles with adoption",
              "Expensive training programs needed",
              "Social challenges from job displacement"
            ].map((item, i) => (
              <li 
                key={i} 
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 animate-contentSlide"
                style={{ animationDelay: `${0.4 + (i * 0.1)}s`, opacity: 0 }}
              >
                <span className="text-orange-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,

    // Box 2: Real World Failures
    <div key={`failures-${animationKey}`} className="space-y-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-red-500 animate-contentSlide">
        Real World Failures
      </h2>
      
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-red-900/40 rounded-xl p-6 border-l-4 border-red-500 hover:bg-red-900/60 transition-all duration-500 hover:scale-105 animate-contentSlide" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="text-red-500 w-6 h-6" />
                <h4 className="font-bold text-xl text-red-200">McDonald's Voice AI (2024)</h4>
              </div>
              <p className="text-gray-300">
                Drive-through AI constantly misunderstood orders (e.g., adding bacon to ice cream), leading to viral mockery and project cancellation.
              </p>
            </div>

            <div className="bg-orange-900/40 rounded-xl p-6 border-l-4 border-orange-500 hover:bg-orange-900/60 transition-all duration-500 hover:scale-105 animate-contentSlide" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="text-orange-500 w-6 h-6" />
                <h4 className="font-bold text-xl text-orange-200">Coca-Cola AI Ad</h4>
              </div>
              <p className="text-gray-300">
                Released a fully AI-generated commercial that faced severe backlash for looking "soulless" and falling into the uncanny valley.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-red-900/40 rounded-xl p-6 border-l-4 border-red-600 hover:bg-red-900/60 transition-all duration-500 hover:scale-105 animate-contentSlide" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="text-red-600 w-6 h-6" />
                <h4 className="font-bold text-xl text-red-200">Microsoft's Travel Guide</h4>
              </div>
              <p className="text-gray-300">
                AI article recommended tourists visit the Ottawa Food Bank "on an empty stomach," showing a complete lack of context or empathy.
              </p>
            </div>

            <div className="bg-orange-900/40 rounded-xl p-6 border-l-4 border-orange-600 hover:bg-orange-900/60 transition-all duration-500 hover:scale-105 animate-contentSlide" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="text-orange-600 w-6 h-6" />
                <h4 className="font-bold text-xl text-orange-200">Data Leakage</h4>
              </div>
              <p className="text-gray-300">
                A startup founder accidentally leaked confidential pricing strategies to a competitor by pasting them into a public AI chatbot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ];

  // We use Math.min here to prevent the component from crashing/repeating 
  // if the parent component sends an index higher than 2 (e.g. 3 or 4)
  const activeIndex = Math.min(currentBox, boxes.length - 1);

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        {boxes[activeIndex]}
      </div>
    </div>
  );
};

export default ChallengesSection;