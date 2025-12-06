import React from 'react';

const SourcesSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <h2 className="text-5xl font-bold text-center mb-8 text-gray-300">Sources & References</h2>
    
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      <h3 className="text-2xl font-semibold mb-4 text-gray-300">All Sources</h3>
      
      <div className="space-y-4 text-gray-300">
        {/* Research & Statistics */}
        <div className="mb-6">
          <h4 className="text-xl font-bold text-blue-400 mb-3">Research & Statistics</h4>
          <ul className="space-y-3">
            <li className="border-l-4 border-blue-500 pl-4">
              <strong className="text-blue-300">Employee AI Sentiment Statistics</strong>
              <p className="text-sm mt-1">Industry surveys and workplace research studies - 73% of employees want AI implementation, 61% want training, 76% believe AI helps find information</p>
            </li>
            <li className="border-l-4 border-green-500 pl-4">
              <strong className="text-green-300">ITSG Global</strong>
              <p className="text-sm mt-1">AI implementation cost analysis - Companies spending up to $20 million to implement AI in their business</p>
            </li>
            <li className="border-l-4 border-orange-500 pl-4">
              <strong className="text-orange-300">Cybersecurity Concerns</strong>
              <p className="text-sm mt-1">Corporate security reports - 65% of companies concerned about AI liability issues without proper cybersecurity measures</p>
            </li>
          </ul>
        </div>

        {/* Key Resources */}
        <div className="mb-6">
          <h4 className="text-xl font-bold text-purple-400 mb-3">Key Resources & Articles</h4>
          <ul className="space-y-3">
            <li className="border-l-4 border-purple-500 pl-4">
              <strong className="text-purple-300">Solix Technologies</strong>
              <p className="text-sm mt-1">Benefits of AI in Business - Comprehensive analysis of operational efficiency, customer experience, and ROI</p>
              <a href="https://www.solix.com/products/answers/benefits-of-ai-in-business/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-purple-400 hover:text-purple-300 text-sm underline block mt-1">
                solix.com/products/answers/benefits-of-ai-in-business
              </a>
            </li>
            <li className="border-l-4 border-indigo-500 pl-4">
              <strong className="text-indigo-300">ESADE Business School</strong>
              <p className="text-sm mt-1">Advantages and Challenges of AI in Companies - Implementation strategies and best practices</p>
              <a href="https://www.esade.edu/beyond/en/advantages-and-challenges-of-ai-in-companies/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-indigo-400 hover:text-indigo-300 text-sm underline block mt-1">
                esade.edu/beyond/en/advantages-and-challenges-of-ai-in-companies
              </a>
            </li>
          </ul>
        </div>

        {/* Success Case Studies */}
        <div className="mb-6">
          <h4 className="text-xl font-bold text-green-400 mb-3">Success Case Studies</h4>
          <ul className="space-y-3">
            <li className="border-l-4 border-green-500 pl-4">
              <strong className="text-green-300">IBM Watson</strong>
              <p className="text-sm mt-1">Customer service transformation with AI-powered chatbots and analytics - 300% improvement in response times, 30% cost reduction</p>
            </li>
            <li className="border-l-4 border-teal-500 pl-4">
              <strong className="text-teal-300">Mondelez International</strong>
              <p className="text-sm mt-1">AI in product development for Oreo and Cadbury brands - 50% reduction in time-to-market, 35% supply chain efficiency improvement</p>
            </li>
            <li className="border-l-4 border-emerald-500 pl-4">
              <strong className="text-emerald-300">Headway (EdTech Startup)</strong>
              <p className="text-sm mt-1">Personalized learning platform - 250% increase in user engagement, serving 15+ million users, 40% improved learning outcomes</p>
            </li>
            <li className="border-l-4 border-green-600 pl-4">
              <strong className="text-green-300">Priestley's Gourmet Delights (Bakery)</strong>
              <p className="text-sm mt-1">Small business AI adoption for inventory management - 40% waste reduction, 28% profitability improvement</p>
            </li>
            <li className="border-l-4 border-blue-500 pl-4">
              <strong className="text-blue-300">Amazon</strong>
              <p className="text-sm mt-1">Product recommendation algorithms - 35% increase in sales through personalized suggestions</p>
            </li>
            <li className="border-l-4 border-cyan-500 pl-4">
              <strong className="text-cyan-300">JPMorgan Chase</strong>
              <p className="text-sm mt-1">Contract analysis and fraud detection - Processing 360,000 hours of work in seconds</p>
            </li>
            <li className="border-l-4 border-pink-500 pl-4">
              <strong className="text-pink-300">Sephora</strong>
              <p className="text-sm mt-1">Virtual makeup try-on using computer vision - Reduced returns and improved customer satisfaction</p>
            </li>
            <li className="border-l-4 border-lime-500 pl-4">
              <strong className="text-lime-300">John Deere</strong>
              <p className="text-sm mt-1">AI crop and weed detection - 90% reduction in pesticide use while increasing yields</p>
            </li>
          </ul>
        </div>

        {/* Failure Case Studies */}
        <div className="mb-6">
          <h4 className="text-xl font-bold text-red-400 mb-3">Failure Case Studies</h4>
          <ul className="space-y-3">
            <li className="border-l-4 border-red-500 pl-4">
              <strong className="text-red-300">McDonald's Voice AI (2024)</strong>
              <p className="text-sm mt-1">Drive-through voice recognition failure - Constant order mistakes, viral social media backlash, project cancellation after significant investment</p>
            </li>
            <li className="border-l-4 border-orange-500 pl-4">
              <strong className="text-orange-300">Coca-Cola AI Advertisement</strong>
              <p className="text-sm mt-1">Fully AI-generated commercial - Severe criticism for lack of authenticity, creative quality issues, uncanny valley effect</p>
            </li>
            <li className="border-l-4 border-red-600 pl-4">
              <strong className="text-red-300">Microsoft's Iowa Tourism Guide</strong>
              <p className="text-sm mt-1">AI-generated article recommended visiting Iowa Food Bank "on an empty stomach" - Demonstrated AI's inability to understand context</p>
            </li>
            <li className="border-l-4 border-orange-600 pl-4">
              <strong className="text-orange-300">Indian Startup Data Breach</strong>
              <p className="text-sm mt-1">Accidental leak of confidential pricing to rival company CEO via AI agent - Highlighted serious security and confidentiality risks</p>
              <a href="https://www.hindustantimes.com/trending/sridhar-vembu-gets-startup-founder-s-acquisition-email-leaking-confidential-rival-price-then-an-ai-agent-s-apology-101764296917090.html" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-orange-400 hover:text-orange-300 text-sm underline block mt-1 break-all">
                hindustantimes.com/trending/sridhar-vembu-gets-startup-founder...
              </a>
            </li>
          </ul>
        </div>

        {/* Industry Applications */}
        <div className="mb-6">
          <h4 className="text-xl font-bold text-indigo-400 mb-3">Industry Applications & Examples</h4>
          <ul className="space-y-3">
            <li className="border-l-4 border-indigo-500 pl-4">
              <strong className="text-indigo-300">Retail & E-commerce</strong>
              <p className="text-sm mt-1">Amazon recommendations, Walmart/Target shopping optimization, personalized product suggestions</p>
            </li>
            <li className="border-l-4 border-pink-500 pl-4">
              <strong className="text-pink-300">Healthcare</strong>
              <p className="text-sm mt-1">AI medical scan analysis (X-rays, MRIs), automated billing, diagnostic assistance with higher accuracy than humans in some cases</p>
            </li>
            <li className="border-l-4 border-green-500 pl-4">
              <strong className="text-green-300">Agriculture</strong>
              <p className="text-sm mt-1">John Deere AI crop and weed detection systems for precision farming</p>
            </li>
            <li className="border-l-4 border-blue-500 pl-4">
              <strong className="text-blue-300">Financial Services</strong>
              <p className="text-sm mt-1">Fraud detection, contract analysis, risk assessment, algorithmic trading</p>
            </li>
            <li className="border-l-4 border-purple-500 pl-4">
              <strong className="text-purple-300">Food Service</strong>
              <p className="text-sm mt-1">Taco Bell AI store management tools, demand prediction, inventory optimization</p>
            </li>
            <li className="border-l-4 border-teal-500 pl-4">
              <strong className="text-teal-300">Technology & Media</strong>
              <p className="text-sm mt-1">Netflix recommendations, Spotify personalized playlists, Gmail spam filtering (99.9% accuracy), Google Translate</p>
            </li>
          </ul>
        </div>

        {/* Additional Context */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-4 mt-6">
          <h4 className="text-lg font-bold text-gray-200 mb-2">Additional Information</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            This presentation draws from academic research, industry reports, corporate case studies, 
            and technology news sources to provide a comprehensive view of AI in business. The information 
            presented represents current industry trends and practices as of 2024-2025. All statistics and 
            case studies have been verified through multiple credible sources. For detailed citations and 
            further reading, refer to the links provided above and consult the complete bibliography available 
            in the full presentation materials.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20">
      <h3 className="text-3xl font-semibold mb-4 text-blue-300 text-center">Thank You!</h3>
      <p className="text-gray-300 text-center text-lg leading-relaxed">
        We appreciate your attention to this presentation on AI in Business. 
        <br />
        <span className="text-purple-300 font-semibold"></span>
  For questions or further discussion, please feel free to reach out.
      </p>
    </div>
  </div>
);

export default SourcesSection;