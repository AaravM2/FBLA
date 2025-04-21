import React, { useState } from 'react';
import Select from 'react-select';
import { Search, Check, AlertCircle, Dna } from 'lucide-react';

const interactionDatabase = [
  { gene: "CYP2D6", medication: "fluoxetine", effect: "Inhibits CYP2D6, may alter metabolism of other drugs.", severity: "high" },
  { gene: "CYP2D6", medication: "metoprolol", effect: "Poor metabolizers may experience exaggerated effects.", severity: "medium" },
  { gene: "CYP2D6", medication: "tamoxifen", effect: "Reduced activation to endoxifen in poor metabolizers.", severity: "high" },
  { gene: "CYP2D6", medication: "tramadol", effect: "Reduced analgesic effect in poor metabolizers.", severity: "medium" },
  { gene: "CYP2C9", medication: "warfarin", effect: "Poor metabolizers need lower dose due to bleeding risk.", severity: "high" },
  { gene: "CYP2C9", medication: "phenytoin", effect: "Slower metabolism may cause toxicity.", severity: "high" },
  { gene: "CYP2C9", medication: "celecoxib", effect: "Increased plasma levels in poor metabolizers.", severity: "medium" },
  { gene: "CYP2C19", medication: "omeprazole", effect: "Poor metabolizers have higher drug exposure.", severity: "medium" },
  { gene: "CYP2C19", medication: "clopidogrel", effect: "Reduced conversion to active metabolite, reduced efficacy.", severity: "high" },
  { gene: "CYP2C19", medication: "diazepam", effect: "Slower clearance in poor metabolizers.", severity: "medium" },
  { gene: "CYP3A4", medication: "midazolam", effect: "Affected by CYP3A4 inhibitors, altered sedation levels.", severity: "high" },
  { gene: "CYP3A4", medication: "atorvastatin", effect: "Inhibition increases myopathy risk.", severity: "medium" },
  { gene: "CYP3A4", medication: "carbamazepine", effect: "Induces 3A4, affects metabolism of itself and others.", severity: "high" },
  { gene: "CYP3A5", medication: "cyclosporine", effect: "Expressers metabolize faster, may need dose adjustment.", severity: "medium" },
  { gene: "CYP1A2", medication: "caffeine", effect: "Slower clearance in poor metabolizers.", severity: "low" },
  { gene: "CYP1A2", medication: "clozapine", effect: "Higher levels in poor metabolizers.", severity: "medium" },
  { gene: "CYP1A2", medication: "theophylline", effect: "Requires dose adjustment based on metabolism and smoking status.", severity: "medium" },
  { gene: "CYP2A6", medication: "nicotine", effect: "Poor metabolizers may respond differently to cessation therapy.", severity: "low" },
  { gene: "CYP2A6", medication: "letrozole", effect: "Metabolism may vary; under investigation.", severity: "low" },
  { gene: "CYP3A4", medication: "erythromycin", effect: "Inhibits CYP3A4, may increase drug levels.", severity: "high" },
  { gene: "CYP3A4", medication: "verapamil", effect: "Inhibits CYP3A4, risk of drug accumulation.", severity: "high" },
  { gene: "CYP3A4", medication: "ritonavir", effect: "Potent CYP3A4 inhibitor; significant interaction risk.", severity: "high" },
  { gene: "CYP2D6", medication: "quinidine", effect: "Strong inhibitor; affects metabolism of CYP2D6 substrates.", severity: "high" },
  { gene: "CYP1A2", medication: "fluvoxamine", effect: "Inhibits CYP1A2, may increase drug levels.", severity: "medium" },
  { gene: "CYP2C19", medication: "voriconazole", effect: "CYP2C19 poor metabolizers show higher drug levels.", severity: "medium" },
  { gene: "CYP2C9", medication: "losartan", effect: "Poor metabolizers may have reduced effect.", severity: "medium" },
  { gene: "CYP2C9", medication: "glipizide", effect: "Increased risk of hypoglycemia in poor metabolizers.", severity: "medium" }
];

const commonGeneticMarkers = [
  { gene: "CYP2C19" }, { gene: "CYP2D6" }, { gene: "CYP3A5" },
  { gene: "CYP2A6" }, { gene: "CYP1B1" }, { gene: "CYP1B6" },
  { gene: "CYP3A4" }, { gene: "CYP1A2" }, { gene: "CYP2C9" }
];

const commonMedications = [
  "clopidogrel", "codeine", "tamoxifen", "tacrolimus", "nicotine",
  "estradiol", "efavirenz", "simvastatin", "clozapine", "theophylline",
  "warfarin", "cyclophosphamide"
];

function App() {
  const [selectedGene, setSelectedGene] = useState(null);
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = () => {
    if (!selectedGene || !selectedMedication) {
      alert("Please select a gene and medication before searching.");
      return;
    }

    const results = interactionDatabase.filter(
      item =>
        item.gene.toLowerCase() === selectedGene.toLowerCase() &&
        item.medication.toLowerCase() === selectedMedication.toLowerCase()
    );

    setSearchResults(results.length > 0 ? results[0] : null);
    setSearchPerformed(true);
  };

  const handleReset = () => {
    setSelectedGene(null);
    setSelectedMedication(null);
    setSearchResults(null);
    setSearchPerformed(false);
  };

  const geneOptions = commonGeneticMarkers.map(marker => ({
    value: marker.gene,
    label: marker.gene
  }));

  const medicationOptions = commonMedications.map(med => ({
    value: med,
    label: med
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '8px',
      borderColor: '#E2E8F0',
      '&:hover': { borderColor: '#5A67D8' },
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
      '&:hover': { backgroundColor: '#E2E8F0' },
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
            <p className="text-gray-500 mt-2">Select the gene and medication to analyze possible interactions.</p>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="gene">
                Genetic Marker (Gene)
              </label>
              <Select
                id="gene"
                value={selectedGene ? { value: selectedGene, label: selectedGene } : null}
                onChange={(e) => setSelectedGene(e.value)}
                options={geneOptions}
                styles={customStyles}
                classNamePrefix="react-select"
                placeholder="Select a genetic marker"
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
