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
    effect: "Intermediate metabolizer. May have reduced effectiveness.", 
    severity: "medium" 
  },
  { 
    gene: "CYP2D6", 
    variant: "*4/*4", 
    medication: "codeine", 
    effect: "Poor metabolizer. Reduced pain relief. Consider alternative therapy.", 
    severity: "high" 
  },
  { 
    gene: "CYP2D6", 
    variant: "*1/*4", 
    medication: "codeine", 
    effect: "Intermediate metabolizer. May have reduced pain relief.", 
    severity: "medium" 
  },
  { 
    gene: "SLCO1B1", 
    variant: "521TC", 
    medication: "simvastatin", 
    effect: "Increased risk of myopathy. Consider dose reduction.", 
    severity: "medium" 
  },
  { 
    gene: "SLCO1B1", 
    variant: "521CC", 
    medication: "simvastatin", 
    effect: "High risk of myopathy. Consider alternative therapy.", 
    severity: "high" 
  },
  { 
    gene: "VKORC1", 
    variant: "-1639G>A AA", 
    medication: "warfarin", 
    effect: "Increased sensitivity. Requires lower dose.", 
    severity: "medium" 
  },
  { 
    gene: "CYP2C9", 
    variant: "*3/*3", 
    medication: "warfarin", 
    effect: "Poor metabolizer. Increased risk of bleeding. Requires lower dose.", 
    severity: "high" 
  },
  { 
    gene: "HLA-B", 
    variant: "*57:01", 
    medication: "abacavir", 
    effect: "High risk of hypersensitivity reaction. Avoid use.", 
    severity: "high" 
  },
  { 
    gene: "TPMT", 
    variant: "*3A/*3A", 
    medication: "azathioprine", 
    effect: "Poor metabolizer. High risk of myelosuppression. Requires significant dose reduction.", 
    severity: "high" 
  }
];

// List of common genetic markers for the dropdown
const commonGeneticMarkers = [
  { gene: "CYP2C19", variants: ["*1/*1", "*1/*2", "*2/*2", "*1/*17", "*17/*17"] },
  { gene: "CYP2D6", variants: ["*1/*1", "*1/*4", "*4/*4", "*1/*10", "*10/*10"] },
  { gene: "SLCO1B1", variants: ["521TT", "521TC", "521CC"] },
  { gene: "VKORC1", variants: ["-1639G>A GG", "-1639G>A GA", "-1639G>A AA"] },
  { gene: "CYP2C9", variants: ["*1/*1", "*1/*2", "*1/*3", "*2/*2", "*3/*3"] },
  { gene: "HLA-B", variants: ["*57:01", "*58:01"] },
  { gene: "TPMT", variants: ["*1/*1", "*1/*3A", "*3A/*3A"] }
];

// List of common medications for the dropdown
const commonMedications = [
  "clopidogrel",
  "codeine",
  "simvastatin",
  "warfarin",
  "abacavir",
  "azathioprine"
];

function App() {
  const [selectedGene, setSelectedGene] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const [selectedMedication, setSelectedMedication] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [customGene, setCustomGene] = useState("");
  const [customVariant, setCustomVariant] = useState("");
  const [customMedication, setCustomMedication] = useState("");
  const [useCustomInput, setUseCustomInput] = useState(false);

  // Get variants for the selected gene
  const variantsForSelectedGene = selectedGene 
    ? commonGeneticMarkers.find(marker => marker.gene === selectedGene)?.variants || []
    : [];

  const handleSearch = () => {
    // Determine which values to use based on input method
    const geneToSearch = useCustomInput ? customGene : selectedGene;
    const variantToSearch = useCustomInput ? customVariant : selectedVariant;
    const medicationToSearch = useCustomInput ? customMedication : selectedMedication;

    // Validate inputs
    if (!geneToSearch || !variantToSearch || !medicationToSearch) {
      alert("Please fill in all fields before searching");
      return;
    }

    // Search the database for matching interactions
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

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Medication-Gene Interaction Analyzer
          </h2>
          
          <div className="mb-6">
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

            {!useCustomInput ? (
              <div className="space-y-4">
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

            <div className="mt-6 flex space-x-3">
              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Search Interactions
              </button>
              <button
                onClick={resetSearch}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Reset
              </button>
            </div>
          </div>

          {searchPerformed && (
            <div className="mt-6">
              {searchResults ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-md">
                  <div className="flex items-center">
                    <Check className="mr-2" />
                    <strong>Interaction Found!</strong>
                  </div>
                  <p className="mt-2">Gene: {searchResults.gene}</p>
                  <p>Variant: {searchResults.variant}</p>
                  <p>Medication: {searchResults.medication}</p>
                  <p className="mt-2">Effect: {searchResults.effect}</p>
                  <p className="font-semibold text-red-600">
                    Severity: {searchResults.severity}
                  </p>
                </div>
              ) : (
                <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md">
                  <div className="flex items-center">
                    <AlertCircle className="mr-2" />
                    <strong>No Interaction Found</strong>
                  </div>
                  <p className="mt-2">No matching interaction was found for the selected criteria.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
