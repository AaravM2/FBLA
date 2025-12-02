import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Brain, TrendingUp, AlertTriangle, Building2, Target, BookOpen } from 'lucide-react';
import IntroSection from './components/IntroSection';
import AdvantagesSection from './components/AdvantagesSection';
import ChallengesSection from './components/ChallengesSection';
import CurrentUseSection from './components/CurrentUseSection';
import ResponsibleSection from './components/ResponsibleSection';
import SourcesSection from './components/SourcesSection';

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentBox, setCurrentBox] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const sections = [
    { id: 'intro', title: 'Introduction', icon: Brain, color: 'from-blue-600 to-purple-600', boxes: 3 },
    { id: 'advantages', title: 'Advantages', icon: TrendingUp, color: 'from-green-500 to-teal-600', boxes: 6 },
    { id: 'challenges', title: 'Challenges', icon: AlertTriangle, color: 'from-orange-500 to-red-600', boxes: 3 },
    { id: 'current', title: 'Current Use', icon: Building2, color: 'from-indigo-500 to-blue-600', boxes: 4 },
    { id: 'responsible', title: 'Responsible AI', icon: Target, color: 'from-purple-500 to-pink-600', boxes: 5 },
    { id: 'sources', title: 'Sources', icon: BookOpen, color: 'from-gray-600 to-gray-800', boxes: 1 }
  ];

  const navigateSection = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (direction === 'next') {
      // If not at the last box of current section, move to next box
      if (currentBox < sections[currentSection].boxes - 1) {
        setCurrentBox(currentBox + 1);
      } 
      // If at last box and not at last section, move to next section
      else if (currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
        setCurrentBox(0);
      }
    } else if (direction === 'prev') {
      // If not at first box, move to previous box
      if (currentBox > 0) {
        setCurrentBox(currentBox - 1);
      }
      // If at first box and not at first section, move to previous section's last box
      else if (currentSection > 0) {
        setCurrentSection(currentSection - 1);
        setCurrentBox(sections[currentSection - 1].boxes - 1);
      }
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') navigateSection('next');
      if (e.key === 'ArrowLeft') navigateSection('prev');
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSection, currentBox, isAnimating]);

  const renderSection = () => {
    const sectionProps = { currentBox, setCurrentBox };
    
    switch (sections[currentSection].id) {
      case 'intro': return <IntroSection {...sectionProps} showLanding={showLanding} setShowLanding={setShowLanding} />;
      case 'advantages': return <AdvantagesSection {...sectionProps} />;
      case 'challenges': return <ChallengesSection {...sectionProps} />;
      case 'current': return <CurrentUseSection {...sectionProps} />;
      case 'responsible': return <ResponsibleSection {...sectionProps} />;
      case 'sources': return <SourcesSection {...sectionProps} />;
      default: return <IntroSection {...sectionProps} showLanding={showLanding} setShowLanding={setShowLanding} />;
    }
  };

  // Don't show navigation when on landing page
  if (showLanding && currentSection === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {renderSection()}
          </div>
        </div>
      </div>
    );
  }

  const isFirstBox = currentSection === 0 && currentBox === 0;
  const isLastBox = currentSection === sections.length - 1 && currentBox === sections[currentSection].boxes - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              {sections.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentSection(idx);
                        setCurrentBox(0);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      currentSection === idx
                        ? `bg-gradient-to-r ${section.color} shadow-lg scale-105`
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden md:inline font-medium">{section.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          {renderSection()}
        </div>
      </div>

      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-4 z-40">
        <button
          onClick={() => navigateSection('prev')}
          disabled={isFirstBox}
          className={`p-4 rounded-full backdrop-blur-xl border border-white/20 transition-all ${
            isFirstBox
              ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
              : 'bg-black/50 hover:bg-black/70 text-white'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-xl rounded-full border border-white/20">
          <span className="text-sm font-medium">
            Section {currentSection + 1}/{sections.length} • Box {currentBox + 1}/{sections[currentSection].boxes}
          </span>
        </div>
        
        <button
          onClick={() => navigateSection('next')}
          disabled={isLastBox}
          className={`p-4 rounded-full backdrop-blur-xl border border-white/20 transition-all ${
            isLastBox
              ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
              : 'bg-black/50 hover:bg-black/70 text-white'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default App;