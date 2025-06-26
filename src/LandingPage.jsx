import React from 'react';
import { Dna, ArrowRight } from 'lucide-react';

function LandingPage({ onNext }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Dna className="w-12 h-12 text-indigo-600 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">GENOVA</h1>
          </div>
          <p className="text-xl text-gray-600">Genetic Analysis for Personalized Medicine</p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Dna className="w-6 h-6 mr-2 text-indigo-600" />
              The GENOVA Process
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                To begin the GENOVA process, a pharmacogenomic test is performed. This test analyzes the patient's DNA by breaking down cell samples to isolate the genetic material.
              </p>
              
              <p>
                Synthetic DNA primers attach to the specific regions where the CYP450 genes are located, and these regions are then amplified using PCR.
              </p>
              
              <p>
                The amplified DNA is sequenced to read the exact base pair order, allowing identification of the patient's specific alleles. The alleles tell doctors which CYP450 is being produced.
              </p>
              
              <p>
                Finally, the doctor reviews how these gene variants may impact treatment and adjusts medication accordingly.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Dna className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">DNA Analysis</h3>
            <p className="text-gray-600 text-sm">Comprehensive genetic testing to identify CYP450 gene variants</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Dna className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">PCR Amplification</h3>
            <p className="text-gray-600 text-sm">Precise amplification of target gene regions for accurate sequencing</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Dna className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Personalized Treatment</h3>
            <p className="text-gray-600 text-sm">Medication adjustments based on individual genetic profiles</p>
          </div>
        </div>

        {/* Next Button */}
        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Begin Genetic Analysis
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage; 