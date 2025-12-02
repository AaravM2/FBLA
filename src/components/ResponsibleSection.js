import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, Shield, BookOpen, Layers, Scale, 
  Brain, Users, Activity, Lock , Settings
} from 'lucide-react';

const ResponsibleSection = ({ currentBox }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [currentBox]);

  const boxes = [
    // Box 0: Strategy & Steps
    <div key={`strategy-${animationKey}`} className="space-y-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-purple-400 animate-contentSlide">
        Implementation Strategy
      </h2>
      
      {/* Top Concept */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-6 animate-contentSlide" style={{ animationDelay: '0.1s', opacity: 0 }}>
        <h3 className="text-2xl font-semibold mb-4 text-purple-300">The Right Role for AI</h3>
        <p className="text-gray-300 leading-relaxed text-lg">
          AI should augment human capabilities, not replace human judgment. The most successful implementations use AI as a tool to enhance decision-making and automate repetitive tasks while keeping humans in control.
        </p>
      </div>

      {/* 5 Steps List */}
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 animate-contentSlide" style={{ animationDelay: '0.2s', opacity: 0 }}>
        

[Image of AI implementation roadmap]

        <h3 className="text-2xl font-semibold mb-6 text-white border-b border-white/10 pb-4">5 Steps to Success</h3>
        <div className="space-y-4">
          {[
            { num: 1, color: "purple", title: "Identify High-Impact Areas", desc: "Focus on repetitive, data-intensive processes." },
            { num: 2, color: "pink", title: "Assess Impact on Small Scale", desc: "Run pilot projects to measure ROI before full rollout." },
            { num: 3, color: "indigo", title: "Train Employees Thoroughly", desc: "Ensure familiarity and comfort with new tools." },
            { num: 4, color: "violet", title: "Consult AI Experts", desc: "Leverage experts to harness full potential." },
            { num: 5, color: "fuchsia", title: "Monitor & Adjust", desc: "Regular audits to ensure accuracy and relevance." }
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 animate-contentSlide" style={{ animationDelay: `${0.3 + (i * 0.1)}s`, opacity: 0 }}>
              <div className={`flex-shrink-0 w-10 h-10 bg-${step.color}-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg`}>
                {step.num}
              </div>
              <div>
                <h4 className={`font-bold text-lg text-${step.color}-300 mb-1`}>{step.title}</h4>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Box 1: Ethics & Guidelines (Grid)
    <div key={`ethics-${animationKey}`} className="space-y-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-pink-400 animate-contentSlide">
        Ethics & Governance
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card 1: Ethical Guidelines */}
        <div className="bg-purple-900/30 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 animate-contentSlide" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <h3 className="text-xl font-bold mb-4 text-purple-300 flex items-center gap-2">
            <Scale className="w-6 h-6" /> Ethical Guidelines
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "Transparent decision-making",
              "Regular audits for bias",
              "Human oversight on critical systems",
              "Clear accountability structures",
              "Prevent algorithmic discrimination"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 animate-contentSlide" style={{ animationDelay: `${0.2 + (i * 0.1)}s`, opacity: 0 }}>
                <span className="text-purple-400">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Card 2: Data Privacy */}
        <div className="bg-pink-900/30 backdrop-blur-lg rounded-xl p-6 border border-pink-500/30 animate-contentSlide" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <h3 className="text-xl font-bold mb-4 text-pink-300 flex items-center gap-2">
            <Lock className="w-6 h-6" /> Data Privacy
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "Comply with GDPR & CCPA",
              "Robust encryption & security",
              "Minimize data collection",
              "Clear user consent mechanisms",
              "Regular penetration testing"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 animate-contentSlide" style={{ animationDelay: `${0.3 + (i * 0.1)}s`, opacity: 0 }}>
                <span className="text-pink-400">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3: Training */}
        <div className="bg-indigo-900/30 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30 animate-contentSlide" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <h3 className="text-xl font-bold mb-4 text-indigo-300 flex items-center gap-2">
            <BookOpen className="w-6 h-6" /> Training
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "Comprehensive AI literacy training",
              "Education on AI limitations",
              "Foster critical thinking",
              "Continuous learning programs",
              "Hands-on experimentation"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 animate-contentSlide" style={{ animationDelay: `${0.4 + (i * 0.1)}s`, opacity: 0 }}>
                <span className="text-indigo-400">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Card 4: Best Practices */}
        <div className="bg-violet-900/30 backdrop-blur-lg rounded-xl p-6 border border-violet-500/30 animate-contentSlide" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <h3 className="text-xl font-bold mb-4 text-violet-300 flex items-center gap-2">
            <Layers className="w-6 h-6" /> Best Practices
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "Start with pilot projects",
              "Set measurable success metrics",
              "Build diverse teams",
              "Continuous monitoring",
              "Document processes thoroughly"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 animate-contentSlide" style={{ animationDelay: `${0.5 + (i * 0.1)}s`, opacity: 0 }}>
                <span className="text-violet-400">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,

    // Box 2: Our Solution (AI Load Balancer)
    <div key={`solution-${animationKey}`} className="space-y-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-blue-400 animate-contentSlide">
        Our Solution
      </h2>
      
      <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/30 shadow-2xl animate-contentSlide" style={{ animationDelay: '0.1s', opacity: 0 }}>
        
        <h3 className="text-3xl font-bold mb-4 text-blue-300 flex items-center gap-3">
          <Activity className="w-10 h-10" /> The AI Load Balancer
        </h3>
        <p className="text-gray-200 text-lg mb-8 leading-relaxed">
          A strategic system that distributes tasks between employees and AI to maintain a healthy equilibrium, preventing burnout while ensuring human skills remain sharp.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors animate-contentSlide" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <h4 className="font-bold text-xl text-purple-300 mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5" /> How It Works
            </h4>
            <ul className="space-y-3 text-gray-300">
              {[
                "Allocates work based on capability needs",
                "Monitors skill development in real-time",
                "Routes tasks to prevent skill atrophy",
                "Prevents over-automation dependency"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple-400">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors animate-contentSlide" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <h4 className="font-bold text-xl text-pink-300 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Key Benefits
            </h4>
            <ul className="space-y-3 text-gray-300">
              {[
                "Protects human capital expertise",
                "Ensures continuous development",
                "Increases operational efficiency",
                "Balances AI and human workload"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-pink-400">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30 animate-contentSlide" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <p className="text-gray-200 leading-relaxed text-center">
            <span className="font-bold text-blue-300 text-lg">The Outcome:</span> If an employee's creativity or critical thinking starts to stagnate, the system automatically routes those tasks back to them. This keeps AI use intentional and sustainable.
          </p>
        </div>
      </div>
    </div>,

    // Box 3: Conclusion
    <div key={`conclusion-${animationKey}`} className="space-y-8">
      <h2 className="text-5xl font-bold text-center mb-12 text-white animate-contentSlide">
        Moving Forward
      </h2>
      
      <div className="grid gap-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 animate-contentSlide" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <h3 className="text-2xl font-bold mb-4 text-purple-300">Opportunity & Challenge</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            AI represents an unprecedented opportunity. When implemented responsibly with proper planning and oversight, it can dramatically improve efficiency and customer experiences.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 animate-contentSlide" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <h3 className="text-2xl font-bold mb-4 text-pink-300">The Human Element</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Success requires more than technology. Organizations must commit to ethical implementation and maintain the irreplaceable human elements of <span className="text-white font-bold">creativity, empathy, and critical thinking.</span>
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-10 border-2 border-purple-500/50 text-center animate-contentSlide" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <p className="text-2xl text-white font-light leading-relaxed">
            "The future belongs to organizations that leverage AI's power while preserving human capabilities. AI must remain a tool for <span className="text-blue-400 font-bold">human empowerment</span>, not replacement."
          </p>
        </div>
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

export default ResponsibleSection;