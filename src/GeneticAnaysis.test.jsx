import React, { useState } from 'react';
import { Search, AlertCircle, Check, X, Dna } from 'lucide-react';

// Sample database of genetic markers and medication interactions
const interactionDatabase = [
  { 
    gene: "CYP2C19", 
    variant: "*2/*2", 
    medication: "clopidogrel", 
    effect: "Poor metabolizer. Reduced effectiveness. Consider alternative therapy.", 
    severity: "high" 
  },
  { 
    gene: "CYP2C19", 
    variant: "*1/*2", 
    medication: "clopidogrel", 
    effect: "Reduced effectiveness. Use with caution.", 
    severity: "medium" 
  },
  { 
    gene: "CYP2D6", 
    variant: "*4/*4", 
    medication: "codeine", 
    effect: "Poor metabolizer. Risk of toxicity. Avoid use.", 
    severity: "high" 
  },
  { 
    gene: "CYP2D6", 
    variant: "*1/*1", 
    medication: "codeine", 
    effect: "Normal metabolizer. Use standard dosage.", 
    severity: "low" 
  },
  { 
    gene: "CYP3A5", 
    variant: "*3/*3", 
    medication: "simvastatin", 
    effect: "Reduced metabolism. Increased risk of side effects.", 
    severity: "medium" 
  },
  { 
    gene: "VKORC1", 
    variant: "*1/*1", 
    medication: "warfarin", 
    effect: "Normal response to warfarin. Monitor INR.", 
    severity: "low" 
  },
  { 
    gene: "HLA-B", 
    variant: "*57:01", 
    medication: "abacavir", 
    effect: "Risk of hypersensitivity reaction. Avoid use.", 
    severity: "high" 
  },
  { 
    gene: "TPMT", 
    variant: "*1/*1", 
    medication: "azathioprine", 
    effect: "Normal metabolism. Use standard dosage.", 
    severity: "low" 
  },
  // Add more entries as needed...
];

// List of common genetic markers for the dropdown
const commonGeneticMarkers = [
  { gene: "CYP2C19", variants: ["*1/*1", "*1/*2", "*2/*2", "*1/*17", "*17/*17"] },
  { gene: "CYP2D6", variants: ["*1/*1", "*1/*4", "*4/*4", "*1/*10"] },
  { gene: "CYP3A5", variants: ["*3/*3", "*1/*3", "*1/*1"] },
  { gene: "VKORC1", variants: ["*1/*1", "*1/*2", "*2/*2"] },
  { gene: "HLA-B", variants: ["*57:01", "*58:01", "*51:01"] },
  { gene: "TPMT", variants: ["*1/*1", "*1/*2", "*2/*2"] },
  // Add more genetic markers as needed...
];

const commonMedications = [
  "clopidogrel",
  "codeine",
  "simvastatin",
  "warfarin",
  "abacavir",
  "azathioprine",
  // Add more medications as needed...
];

function GeneticAnalysis() {
  const [selectedGene, setSelectedGene] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const [selectedMedication, setSelectedMedication] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [customGene, setCustomGene] = useState("");
  const [customVariant, setCustomVariant] = useState("");
  const [customMedication, setCustomMedication] = useState("");
  const [useCustomInput, setUseCustomInput] = useState(false);

  const variantsForSelectedGene = selectedGene 
    ? commonGeneticMarkers.find(marker => marker.gene === selectedGene)?.variants || []
    : [];

  const handleSearch = () => {
    const geneToSearch = useCustomInput ? customGene : selectedGene;
    const variantToSearch = useCustomInput ? customVariant : selectedVariant;
    const medicationToSearch = useCustomInput ? customMedication : selectedMedication;

    if (!geneToSearch || !variantToSearch || !medicationToSearch) {
      alert("Please fill in all fields before searching");
      return;
    }

    const results = interactionDatabase.filter(
      item => 
        item.gene.toLowerCase() === geneToSearch.toLowerCase() &&
        item.variant.toLowerCase() === variantToSearch.toLowerCase() &&
        item.medication.toLowerCase() === medicationToSearch.toLowerCase()
    );

    setSearchResults(results.length > 0 ? results[0] : null);
    setSearchPerformed(true);
  };

  const resetSearch = () => {
    setSelectedGene("");
    setSelectedVariant("");
    setSelectedMedication("");
    setCustomGene("");
    setCustomVariant("");
    setCustomMedication("");
    setSearchResults(null);
    setSearchPerformed(false);
  };

  const toggleInputMethod = () => {
    setUseCustomInput(!useCustomInput);
    resetSearch();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-indigo-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold flex items-center">
            <Dna className="mr-2" size={32} />
            GENOVA
          </h1>
          <p className="mt-2 text-indigo-200">
            Genetic Variant Analysis for Personalized Medicine
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Medication-Gene Interaction Analyzer
          </h2>
          
          {/* Input Section */}
          <div className="mb-6">
            {/* Input Method Toggle */}
            <div className="flex items-center mb-4">
              <button 
                onClick={toggleInputMethod}
                className={`px-4 py-2 rounded-md mr-2 ${!useCustomInput 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700'}`}
              >
                Use Dropdown Selection
              </button>
              <button 
                onClick={toggleInputMethod}
                className={`px-4 py-2 rounded-md ${useCustomInput 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700'}`}
              >
                Use Custom Input
              </button>
            </div>

            {/* Form Inputs */}
            {!useCustomInput ? (
              <div className="space-y-4">
                {/* Gene Dropdown */}
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="gene">
                    Genetic Marker (Gene)
                  </label>
                  <select
                    id="gene"
                    value={selectedGene}
                    onChange={(e) => {
                      setSelectedGene(e.target.value);
                      setSelectedVariant("");
                    }}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select a genetic marker</option>
                    {commonGeneticMarkers.map((marker) => (
                      <option key={marker.gene} value={marker.gene}>
                        {marker.gene}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Variant Dropdown */}
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="variant">
                    Variant
                  </label>
                  <select
                    id="variant"
                    value={selectedVariant}
                    onChange={(e) => setSelectedVariant(e.target.value)}
                    disabled={!selectedGene}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100"
                  >
                    <option value="">Select a variant</option>
                    {variantsForSelectedGene.map((variant) => (
                      <option key={variant} value={variant}>
                        {variant}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Medication Dropdown */}
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="medication">
                    Medication
                  </label>
                  <select
                    id="medication"
                    value={selectedMedication}
                    onChange={(e) => setSelectedMedication(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select a medication</option>
                    {commonMedications.map((med) => (
                      <option key={med} value={med}>
                        {med}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Custom Gene */}
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="customGene">
                    Genetic Marker (Gene)
                  </label>
                  <input
                    type="text"
                    id="customGene"
                    value={customGene}
                    onChange={(e) => setCustomGene(e.target.value)}
                    placeholder="e.g., CYP2C19"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {/* Custom Variant */}
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="customVariant">
                    Variant
                  </label>
                  <input
                    type="text"
                    id="customVariant"
                    value={customVariant}
                    onChange={(e) => setCustomVariant(e.target.value)}
                    placeholder="e.g., *1/*2"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {/* Custom Medication */}
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="customMedication">
                    Medication
                  </label>
                  <input
                    type="text"
                    id="customMedication"
                    value={customMedication}
                    onChange={(e) => setCustomMedication(e.target.value)}
                    placeholder="e.g., clopidogrel"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="mt-6 flex space-x-3">
              <button
                onClick={handleSearch}
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors flex items-center"
              >
                <Search className="mr-2" size={18} />
                Analyze Interaction
              </button>
              <button
                onClick={resetSearch}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Analysis Results */}
          {searchPerformed && (
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Analysis Results</h3>
              
              {searchResults ? (
                <div>
                  <p className="text-gray-700">{searchResults.effect}</p>
                  <div
                    className={`mt-4 p-4 rounded-md text-white ${
                      searchResults.severity === "high"
                        ? "bg-red-500"
                        : searchResults.severity === "medium"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    <strong>Severity: </strong>
                    {searchResults.severity.charAt(0).toUpperCase() + searchResults.severity.slice(1)}
                  </div>
                </div>
              ) : (
                <div className="mt-4 p-4 border border-gray-300 rounded-md text-gray-700">
                  No interaction found for this combination.
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-800 text-white text-center py-4">
        <p className="text-sm">
          This tool is for educational purposes only. Consult a healthcare provider for medical advice.
        </p>
      </footer>
    </div>
  );
}

export default GeneticAnalysis;
