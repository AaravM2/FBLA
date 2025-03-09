import React, { useState } from 'react';
import Select from 'react-select';
import { Search, Check, AlertCircle, Dna } from 'lucide-react';

// Extended database of genetic markers and medication interactions
const interactionDatabase = [
  { gene: "CYP2C19", variant: "*2/*2", medication: "clopidogrel", effect: "Poor metabolizer. Reduced effectiveness. Consider alternative therapy.", severity: "high" },
  { gene: "CYP2D6", variant: "*4/*4", medication: "codeine", effect: "Poor metabolizer. Reduced pain relief. Consider alternative therapy.", severity: "high" },
  { gene: "SLCO1B1", variant: "521TC", medication: "simvastatin", effect: "Increased risk of myopathy. Consider dose reduction.", severity: "medium" },
  { gene: "CYP3A5", variant: "*3/*3", medication: "tacrolimus", effect: "Poor metabolizer. Increased drug levels. Dose adjustment needed.", severity: "high" },
  { gene: "DPYD", variant: "*2A", medication: "capecitabine", effect: "Deficient metabolizer. Increased toxicity risk. Consider alternative.", severity: "high" },
  { gene: "G6PD", variant: "Mediterranean", medication: "primaquine", effect: "High risk of hemolysis. Avoid use.", severity: "high" },
  { gene: "VKORC1", variant: "-1639G>A", medication: "warfarin", effect: "Increased sensitivity. Lower dose required.", severity: "high" },
  { gene: "TPMT", variant: "*3A", medication: "azathioprine", effect: "Poor metabolizer. Increased toxicity risk. Consider dose reduction.", severity: "high" },
  { gene: "NAT2", variant: "Slow Acetylator", medication: "isoniazid", effect: "Increased risk of toxicity. Monitor closely.", severity: "medium" }
];

// List of genetic markers for dropdown
const commonGeneticMarkers = [
  { gene: "CYP2C19", variants: ["*1/*1", "*1/*2", "*2/*2", "*1/*17", "*17/*17"] },
  { gene: "CYP2D6", variants: ["*1/*1", "*1/*4", "*4/*4", "*1/*10", "*10/*10"] },
  { gene: "SLCO1B1", variants: ["521TT", "521TC", "521CC"] },
  { gene: "CYP3A5", variants: ["*1/*1", "*1/*3", "*3/*3"] },
  { gene: "DPYD", variants: ["*1/*1", "*2A", "HapB3"] },
  { gene: "G6PD", variants: ["Normal", "Mediterranean", "A-"] },
  { gene: "VKORC1", variants: ["-1639G>A", "-1639G>G", "-1639A>A"] },
  { gene: "TPMT", variants: ["*1/*1", "*1/*3A", "*1/*3C", "*3A/*3A"] },
  { gene: "NAT2", variants: ["Fast Acetylator", "Slow Acetylator"] }
];

// Expanded list of medications
const commonMedications = ["clopidogrel", "codeine", "simvastatin", "tacrolimus", "capecitabine", "primaquine", "warfarin", "azathioprine", "isoniazid"];

function App() {
  const [selectedGene, setSelectedGene] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const variantsForSelectedGene = selectedGene
    ? commonGeneticMarkers.find(marker => marker.gene === selectedGene)?.variants || []
    : [];

  const handleSearch = () => {
    if (!selectedGene || !selectedVariant || !selectedMedication) {
      alert("Please fill in all fields before searching.");
      return;
    }

    const results = interactionDatabase.filter(
      item =>
        item.gene.toLowerCase() === selectedGene.toLowerCase() &&
        item.variant.toLowerCase() === selectedVariant.toLowerCase() &&
        item.medication.toLowerCase() === selectedMedication.toLowerCase()
    );
    
    setSearchResults(results.length > 0 ? results[0] : null);
    setSearchPerformed(true);
  };

  const handleReset = () => {
    setSelectedGene(null);
    setSelectedVariant(null);
    setSelectedMedication(null);
    setSearchResults(null);
    setSearchPerformed(false);
  };

  // Convert genetic markers and medications into options format for react-select
  const geneOptions = commonGeneticMarkers.map(marker => ({
    value: marker.gene,
    label: marker.gene
  }));

  const medicationOptions = commonMedications.map(med => ({
    value: med,
    label: med
  }));

  const variantOptions = variantsForSelectedGene.map(variant => ({
    value: variant,
    label: variant
  }));

  // Custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '8px',
      borderColor: '#E2E8F0',
      '&:hover': {
        borderColor: '#5A67D8',
      },
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#5A67D8' : '',
      color: state.isSelected ? 'white' : '',
      '&:hover': {
        backgroundColor: '#E2E8F0',
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-indigo-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold flex items-center">
            <Dna className="mr-4" size={32} />
            GENOVA
          </h1>
          <p className="text-lg mt-2">Medication-Gene Interaction Analyzer</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">Start Your Analysis</h2>
            <p className="text-gray-500 mt-2">Select the gene, variant, and medication to analyze possible interactions.</p>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="gene">
                Genetic Marker (Gene)
              </label>
              <Select
                id="gene"
                value={selectedGene ? { value: selectedGene, label: selectedGene } : null}
                onChange={(e) => {
                  setSelectedGene(e.value);
                  setSelectedVariant(null); // Reset variant when gene changes
                }}
                options={geneOptions}
                styles={customStyles}
                classNamePrefix="react-select"
                placeholder="Select a genetic marker"
                isSearchable
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="variant">
                Variant
              </label>
              <Select
                id="variant"
                value={selectedVariant ? { value: selectedVariant, label: selectedVariant } : null}
                onChange={(e) => setSelectedVariant(e.value)}
                options={variantOptions}
                isDisabled={!selectedGene}
                styles={customStyles}
                classNamePrefix="react-select"
                placeholder="Select a variant"
                isSearchable
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="medication">
                Medication
              </label>
              <Select
                id="medication"
                value={selectedMedication ? { value: selectedMedication, label: selectedMedication } : null}
                onChange={(e) => setSelectedMedication(e.value)}
                options={medicationOptions}
                styles={customStyles}
                classNamePrefix="react-select"
                placeholder="Select a medication"
                isSearchable
              />
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleSearch}
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Search Interactions
              </button>
              <button
                onClick={handleReset}
                className="w-full px-6 py-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                Reset
              </button>
            </div>
          </div>

          {searchPerformed && (
            <div className="mt-6">
              {searchResults ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-md shadow-md">
                  <Check className="mr-2 inline" />
                  <strong>Interaction Found!</strong>
                  <p className="mt-2">Effect: {searchResults.effect}</p>
                  <p className="font-semibold text-red-600">
                    Severity: {searchResults.severity}
                  </p>
                </div>
              ) : (
                <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md shadow-md">
                  <strong>No Interaction Found</strong>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer with Styled Disclaimer */}
        <footer className="bg-blue-100 text-blue-800 text-center py-4 mt-12 rounded-tl-lg rounded-tr-lg shadow-lg">
          <div className="flex items-center justify-center gap-3 px-6">
            <AlertCircle size={20} className="text-blue-500" />
            <p className="text-sm opacity-80">
              This tool is not a substitute for professional medical advice. Always consult a doctor before making any medical decisions.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
