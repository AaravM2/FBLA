import React, { useEffect, useState } from 'react';

const AdvantagesSection = ({ currentBox }) => {
  const [chartValues, setChartValues] = useState({ stat1: 0, stat2: 0, stat3: 0 });
  const [animationKey, setAnimationKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    setAnimationKey(prev => prev + 1);
    
    // Reset transition state after animation completes
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1400);

    if (currentBox === 0) {
      setChartValues({ stat1: 0, stat2: 0, stat3: 0 });
      
      const animateValue = (start, end, duration, key, delay = 0) => {
        setTimeout(() => {
          const range = end - start;
          const startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic for smooth deceleration
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = start + (range * easeProgress);
            
            setChartValues(prev => ({ ...prev, [key]: Math.round(current) }));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }, delay);
      };

      animateValue(0, 73, 1800, 'stat1', 500);
      animateValue(0, 61, 1800, 'stat2', 700);
      animateValue(0, 76, 1800, 'stat3', 900);
    }

    return () => clearTimeout(timer);
  }, [currentBox]);

  const boxes = [
    // Box 0: Statistics with animated chart
    <div key={`stats-${animationKey}`} className="space-y-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-green-400 animate-contentSlide">
        Advantages of AI in Business
      </h2>
      
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8 shadow-2xl">
        <h3 className="text-2xl font-semibold mb-6 text-center text-green-300">
          Employee AI Sentiment
        </h3>
        
        <div className="space-y-6">
          <div className="animate-contentSlide" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300 text-lg">Want AI implementation</span>
              <span className="text-green-400 font-bold text-xl">{chartValues.stat1}%</span>
            </div>
            <div className="h-10 bg-gray-700/50 rounded-full overflow-hidden shadow-inner backdrop-blur-sm">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-end pr-4 shadow-lg"
                style={{ 
                  width: `${chartValues.stat1}%`,
                  transition: 'width 1.8s cubic-bezier(0.19, 1, 0.22, 1)'
                }}
              >
                <span className="text-white font-bold text-lg drop-shadow-lg">{chartValues.stat1}%</span>
              </div>
            </div>
          </div>

          <div className="animate-contentSlide" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300 text-lg">Want AI training</span>
              <span className="text-teal-400 font-bold text-xl">{chartValues.stat2}%</span>
            </div>
            <div className="h-10 bg-gray-700/50 rounded-full overflow-hidden shadow-inner backdrop-blur-sm">
              <div 
                className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-end pr-4 shadow-lg"
                style={{ 
                  width: `${chartValues.stat2}%`,
                  transition: 'width 1.8s cubic-bezier(0.19, 1, 0.22, 1)'
                }}
              >
                <span className="text-white font-bold text-lg drop-shadow-lg">{chartValues.stat2}%</span>
              </div>
            </div>
          </div>

          <div className="animate-contentSlide" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300 text-lg">Believe AI helps find information</span>
              <span className="text-emerald-400 font-bold text-xl">{chartValues.stat3}%</span>
            </div>
            <div className="h-10 bg-gray-700/50 rounded-full overflow-hidden shadow-inner backdrop-blur-sm">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-end pr-4 shadow-lg"
                style={{ 
                  width: `${chartValues.stat3}%`,
                  transition: 'width 1.8s cubic-bezier(0.19, 1, 0.22, 1)'
                }}
              >
                <span className="text-white font-bold text-lg drop-shadow-lg">{chartValues.stat3}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl animate-contentSlide" style={{ animationDelay: '0.8s', opacity: 0 }}>
        <p className="text-gray-300 text-center leading-relaxed text-lg">
          AI transforms business operations by automating tasks, analyzing large amounts of data quickly, enhancing customer experiences, 
          and providing predictive insights for strategic planning. This frees employees to focus on higher-value, meaningful work, 
          which boosts both productivity and morale.
        </p>
      </div>
    </div>,

    // Box 1: COMBINED (Operations, Customer, Data)
    <div key={`combined-core-${animationKey}`} className="space-y-6">
      <h2 className="text-4xl font-bold text-center mb-6 text-green-400 animate-contentSlide">
        Core Strategic Advantages
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Streamlined Operations Column */}
        <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-xl rounded-2xl p-6 border border-green-500/40 shadow-xl animate-contentSlide" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <div className="flex flex-col items-center mb-4">
            <span className="text-5xl mb-3 animate-float">🚀</span>
            <h4 className="font-bold text-xl text-green-300 text-center">Streamlined Operations</h4>
          </div>
          <ul className="space-y-3 text-gray-200 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Optimizes logistics & predicts equipment failures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Automates routine inventory forecasting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Minimizes waste while maximizing throughput</span>
            </li>
          </ul>
        </div>

        {/* Customer Experience Column */}
        <div className="bg-gradient-to-br from-teal-900/50 to-cyan-900/50 backdrop-blur-xl rounded-2xl p-6 border border-teal-500/40 shadow-xl animate-contentSlide" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <div className="flex flex-col items-center mb-4">
            <span className="text-5xl mb-3 animate-float">💬</span>
            <h4 className="font-bold text-xl text-teal-300 text-center">Enhanced Experience</h4>
          </div>
          <ul className="space-y-3 text-gray-200 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-1">•</span>
              <span>24/7 personalized support via intelligent chatbots</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-1">•</span>
              <span>Tailored recommendations based on behavior</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-1">•</span>
              <span>Seamless interactions with zero wait times</span>
            </li>
          </ul>
        </div>

        {/* Data Driven Column */}
        <div className="bg-gradient-to-br from-emerald-900/50 to-green-900/50 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/40 shadow-xl animate-contentSlide" style={{ animationDelay: '0.5s', opacity: 0 }}>
          <div className="flex flex-col items-center mb-4">
            <span className="text-5xl mb-3 animate-float">📊</span>
            <h4 className="font-bold text-xl text-emerald-300 text-center">Data-Driven Decisions</h4>
          </div>
          <ul className="space-y-3 text-gray-200 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>Rapidly processes large datasets for insights</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>Predictive analytics for smarter strategy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>Uncovers hidden market trends instantly</span>
            </li>
          </ul>
        </div>
        
      </div>
    </div>,

    // Box 2: Cost Efficiency (Originally Box 4)
    <div key={`cost-${animationKey}`} className="space-y-6">
      <h2 className="text-5xl font-bold text-center mb-8 text-green-500">
        Cost Efficiency & Increased ROI
      </h2>
      <div className="bg-gradient-to-br from-green-900/50 to-lime-900/50 backdrop-blur-xl rounded-3xl p-10 border-2 border-green-500/40 shadow-2xl transition-smooth-scale">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-6xl animate-float">💰</span>
          <h4 className="font-bold text-3xl text-green-300">Financial Benefits</h4>
        </div>
        <ul className="space-y-4 text-gray-200 text-xl">
          {[
            "Automates simple tasks to lower operational costs",
            "Increases output while reducing expenses",
            "Analyzes supply chain expenses for potential savings",
            "Optimizes ad spend based on performance metrics",
            "Enhances hiring by screening resumes automatically",
            "Savings can be reinvested into innovation and growth"
          ].map((item, index) => (
            <li 
              key={index}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/10 transition-all duration-500 animate-listItem"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              <span className="text-green-400 mt-1 text-2xl">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>,

    // Box 3: Success Stories (Originally Box 5)
    <div key={`success-${animationKey}`} className="space-y-6">
      <h2 className="text-5xl font-bold text-center mb-8 text-green-400">
        Success Stories
      </h2>
      <div className="space-y-5">
        {[
          {
            title: " IBM Watson",
            desc: "Revolutionized customer service with AI-powered chatbots and analytics",
            points: [
              "Improved response times by 300%",
              "Reduced customer service costs by 30%",
              "Handles 80% of routine inquiries automatically",
              "Increased customer satisfaction scores by 25%"
            ],
            gradient: "from-green-900/50 to-emerald-900/50",
            border: "border-green-500"
          },
          {
            title: " Mondelez International",
            desc: "Used AI for product development and market analysis",
            points: [
              "Optimized production of Oreo and Cadbury brands",
              "Reduced time-to-market for new products by 50%",
              "AI-driven flavor development and consumer testing",
              "Improved supply chain efficiency by 35%"
            ],
            gradient: "from-teal-900/50 to-cyan-900/50",
            border: "border-teal-500"
          },
          {
            title: " Headway &  Priestley's Bakery",
            desc: "EdTech and small business success stories",
            points: [
              "Headway: 250% increase in user engagement, 15M+ users",
              "Priestley's: 40% waste reduction, 28% profit improvement",
              "Demonstrates AI accessibility for all business sizes"
            ],
            gradient: "from-emerald-900/50 to-green-900/50",
            border: "border-emerald-500"
          }
        ].map((story, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-r ${story.gradient} backdrop-blur-xl rounded-2xl p-8 border-l-4 ${story.border} shadow-2xl transition-smooth-scale animate-contentSlide`}
            style={{ 
              animationDelay: `${index * 0.2}s`,
              opacity: 0
            }}
          >
            <h4 className="font-bold text-2xl text-green-300 mb-3">{story.title}</h4>
            <p className="text-gray-200 mb-3 text-lg">{story.desc}</p>
            <ul className="space-y-2 text-gray-300">
              {story.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  ];

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        {boxes[currentBox]}
      </div>
    </div>
  );
};

export default AdvantagesSection;