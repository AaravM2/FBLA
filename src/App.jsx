import React, { useState } from 'react';
import Select from 'react-select';
import { Check, AlertCircle, Dna } from 'lucide-react';
import LandingPage from './LandingPage';

const characters = [
  { name: 'Bob', gene: 'CYP2C19' },
  { name: 'Alice', gene: 'CYP2D6' },
  { name: 'Charlie', gene: 'CYP3A4' },
  { name: 'Diana', gene: 'CYP2C9' },
];

const interactionDatabase = [
  // CYP2D6 interactions
  { gene: 'CYP2D6', medication: 'clopidogrel', effect: 'Inhibits CYP2D6, may alter metabolism of other drugs.', severity: 'high' },
  { gene: 'CYP2D6', medication: 'metoprolol', effect: 'Poor metabolizers may experience exaggerated effects.', severity: 'medium' },
  { gene: 'CYP2D6', medication: 'tamoxifen', effect: 'Reduced activation to endoxifen in poor metabolizers.', severity: 'high' },
  
  // CYP2C9 interactions
  { gene: 'CYP2C9', medication: 'warfarin', effect: 'Poor metabolizers need lower dose due to bleeding risk.', severity: 'high' },
  { gene: 'CYP2C9', medication: 'phenytoin', effect: 'Slower metabolism may cause toxicity.', severity: 'high' },
  { gene: 'CYP2C9', medication: 'celecoxib', effect: 'Increased plasma levels in poor metabolizers.', severity: 'medium' },
  
  // CYP2C19 interactions
  { gene: 'CYP2C19', medication: 'omeprazole', effect: 'Poor metabolizers have higher drug exposure.', severity: 'medium' },
  { gene: 'CYP2C19', medication: 'clopidogrel', effect: 'Reduced conversion to active metabolite, reduced efficacy.', severity: 'high' },
  { gene: 'CYP2C19', medication: 'diazepam', effect: 'Slower clearance in poor metabolizers.', severity: 'medium' },
  
  // CYP3A4 interactions
  { gene: 'CYP3A4', medication: 'midazolam', effect: 'Affected by CYP3A4 inhibitors, altered sedation levels.', severity: 'high' },
  { gene: 'CYP3A4', medication: 'atorvastatin', effect: 'Inhibition increases myopathy risk.', severity: 'medium' },
  { gene: 'CYP3A4', medication: 'carbamazepine', effect: 'Induces 3A4, affects metabolism of itself and others.', severity: 'high' },
  
  // Additional CYP2D6 interactions
  { gene: 'CYP2D6', medication: 'omeprazole', effect: 'May affect CYP2D6 metabolism, monitor for drug interactions.', severity: 'low' },
  { gene: 'CYP2D6', medication: 'warfarin', effect: 'Limited CYP2D6 involvement, standard monitoring recommended.', severity: 'low' },
  { gene: 'CYP2D6', medication: 'phenytoin', effect: 'CYP2D6 may contribute to phenytoin metabolism in some cases.', severity: 'low' },
  { gene: 'CYP2D6', medication: 'celecoxib', effect: 'Minimal CYP2D6 involvement, standard dosing applies.', severity: 'low' },
  { gene: 'CYP2D6', medication: 'diazepam', effect: 'Limited CYP2D6 metabolism, primarily CYP2C19 and CYP3A4.', severity: 'low' },
  { gene: 'CYP2D6', medication: 'midazolam', effect: 'Minimal CYP2D6 involvement, primarily CYP3A4 metabolized.', severity: 'low' },
  { gene: 'CYP2D6', medication: 'atorvastatin', effect: 'Limited CYP2D6 involvement, primarily CYP3A4 metabolized.', severity: 'low' },
  { gene: 'CYP2D6', medication: 'carbamazepine', effect: 'CYP2D6 may contribute to carbamazepine metabolism.', severity: 'low' },
  
  // Additional CYP2C9 interactions
  { gene: 'CYP2C9', medication: 'clopidogrel', effect: 'Limited CYP2C9 involvement, primarily CYP2C19 metabolized.', severity: 'low' },
  { gene: 'CYP2C9', medication: 'metoprolol', effect: 'Minimal CYP2C9 involvement, primarily CYP2D6 metabolized.', severity: 'low' },
  { gene: 'CYP2C9', medication: 'tamoxifen', effect: 'Limited CYP2C9 involvement, primarily CYP2D6 metabolized.', severity: 'low' },
  { gene: 'CYP2C9', medication: 'omeprazole', effect: 'Minimal CYP2C9 involvement, primarily CYP2C19 metabolized.', severity: 'low' },
  { gene: 'CYP2C9', medication: 'diazepam', effect: 'Limited CYP2C9 involvement, primarily CYP2C19 and CYP3A4.', severity: 'low' },
  { gene: 'CYP2C9', medication: 'midazolam', effect: 'Minimal CYP2C9 involvement, primarily CYP3A4 metabolized.', severity: 'low' },
  { gene: 'CYP2C9', medication: 'atorvastatin', effect: 'Limited CYP2C9 involvement, primarily CYP3A4 metabolized.', severity: 'low' },
  { gene: 'CYP2C9', medication: 'carbamazepine', effect: 'CYP2C9 contributes to carbamazepine metabolism.', severity: 'medium' },
  
  // Additional CYP2C19 interactions
  { gene: 'CYP2C19', medication: 'metoprolol', effect: 'Minimal CYP2C19 involvement, primarily CYP2D6 metabolized.', severity: 'low' },
  { gene: 'CYP2C19', medication: 'tamoxifen', effect: 'Limited CYP2C19 involvement, primarily CYP2D6 metabolized.', severity: 'low' },
  { gene: 'CYP2C19', medication: 'warfarin', effect: 'Limited CYP2C19 involvement, primarily CYP2C9 metabolized.', severity: 'low' },
  { gene: 'CYP2C19', medication: 'phenytoin', effect: 'Limited CYP2C19 involvement, primarily CYP2C9 metabolized.', severity: 'low' },
  { gene: 'CYP2C19', medication: 'celecoxib', effect: 'Limited CYP2C19 involvement, primarily CYP2C9 metabolized.', severity: 'low' },
  { gene: 'CYP2C19', medication: 'midazolam', effect: 'CYP2C19 contributes to midazolam metabolism.', severity: 'medium' },
  { gene: 'CYP2C19', medication: 'atorvastatin', effect: 'Limited CYP2C19 involvement, primarily CYP3A4 metabolized.', severity: 'low' },
  { gene: 'CYP2C19', medication: 'carbamazepine', effect: 'Limited CYP2C19 involvement, primarily CYP3A4 metabolized.', severity: 'low' },
  
  // Additional CYP3A4 interactions
  { gene: 'CYP3A4', medication: 'clopidogrel', effect: 'Limited CYP3A4 involvement, primarily CYP2C19 metabolized.', severity: 'low' },
  { gene: 'CYP3A4', medication: 'metoprolol', effect: 'Minimal CYP3A4 involvement, primarily CYP2D6 metabolized.', severity: 'low' },
  { gene: 'CYP3A4', medication: 'tamoxifen', effect: 'CYP3A4 contributes to tamoxifen metabolism.', severity: 'medium' },
  { gene: 'CYP3A4', medication: 'warfarin', effect: 'Limited CYP3A4 involvement, primarily CYP2C9 metabolized.', severity: 'low' },
  { gene: 'CYP3A4', medication: 'phenytoin', effect: 'CYP3A4 contributes to phenytoin metabolism.', severity: 'medium' },
  { gene: 'CYP3A4', medication: 'celecoxib', effect: 'Limited CYP3A4 involvement, primarily CYP2C9 metabolized.', severity: 'low' },
  { gene: 'CYP3A4', medication: 'omeprazole', effect: 'Limited CYP3A4 involvement, primarily CYP2C19 metabolized.', severity: 'low' },
  { gene: 'CYP3A4', medication: 'diazepam', effect: 'CYP3A4 contributes to diazepam metabolism.', severity: 'medium' },
];

const commonMedications = [
  'clopidogrel',  'tamoxifen',
  'warfarin', 'omeprazole', 'metoprolol', 'phenytoin',
  'celecoxib', 'diazepam', 'midazolam', 'atorvastatin', 'carbamazepine'
];

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [ph, setPh] = useState(7.4); // Normal pH
  const [o2, setO2] = useState(98); // Normal O2

  const handleNext = () => {
    setShowLandingPage(false);
  };

  // Show landing page if showLandingPage is true
  if (showLandingPage) {
    return <LandingPage onNext={handleNext} />;
  }

  const characterOptions = characters.map((char) => ({
    value: char.name,
    label: char.name,
    gene: char.gene,
  }));

  const medicationOptions = commonMedications.map((med) => ({
    value: med,
    label: med,
  }));

  // Compute the result live
  let result = null;
  if (selectedCharacter && selectedMedication) {
    const gene = selectedCharacter.gene;
    const medication = selectedMedication.value;
    
    // CYP2C19 + Clopidogrel combinations
    if (gene === 'CYP2C19' && medication === 'clopidogrel') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Genetic reduction in metabolism further compounded by hypoxia and acidosis, which may suppress liver enzyme activity.',
          severity: 'Very High',
          clinicalNote: 'Consider alternative antiplatelet therapy (e.g., prasugrel or ticagrelor).',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may further alter clopidogrel metabolism, but clinical significance is unclear. Monitor patient closely.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for unexpected drug response. Consider consulting a clinical pharmacologist.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may exacerbate the genetic reduction in clopidogrel metabolism.',
          severity: 'High',
          clinicalNote: 'Monitor platelet function and consider dose adjustment.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may further impair clopidogrel activation in CYP2C19 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Consider alternative antiplatelet therapy or increased monitoring.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter clopidogrel metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for changes in drug response.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect clopidogrel metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor for any unusual drug response.',
        };
      }
    }
    
    // CYP2D6 + Metoprolol combinations
    else if (gene === 'CYP2D6' && medication === 'metoprolol') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may exacerbate poor metabolizer phenotype, leading to increased beta-blockade effects.',
          severity: 'Very High',
          clinicalNote: 'Monitor heart rate and blood pressure closely. Consider dose reduction.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter metoprolol metabolism in CYP2D6 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for enhanced or reduced beta-blockade effects.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may increase metoprolol effects in CYP2D6 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor heart rate and blood pressure closely.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may enhance metoprolol effects in CYP2D6 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for increased beta-blockade effects.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter metoprolol metabolism in CYP2D6 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for changes in drug response.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect metoprolol metabolism in CYP2D6 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor for any unusual drug response.',
        };
      }
    }
    
    // CYP2C9 + Warfarin combinations
    else if (gene === 'CYP2C9' && medication === 'warfarin') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may increase warfarin sensitivity in CYP2C9 poor metabolizers, increasing bleeding risk.',
          severity: 'Very High',
          clinicalNote: 'Monitor INR more frequently. Consider dose reduction and vitamin K availability.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter warfarin metabolism, requiring careful INR monitoring.',
          severity: 'High',
          clinicalNote: 'Monitor INR closely and adjust dose as needed.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may increase warfarin sensitivity in CYP2C9 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor INR more frequently and consider dose reduction.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may increase warfarin effects in CYP2C9 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor INR closely and watch for bleeding signs.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter warfarin metabolism in CYP2C9 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor INR and adjust dose if needed.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect warfarin metabolism in CYP2C9 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor INR for any changes.',
        };
      }
    }
    
    // CYP3A4 + Midazolam combinations
    else if (gene === 'CYP3A4' && medication === 'midazolam') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may significantly prolong midazolam sedation in CYP3A4 poor metabolizers.',
          severity: 'Very High',
          clinicalNote: 'Use lower doses and monitor sedation levels closely. Consider alternative sedatives.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter midazolam metabolism, affecting sedation duration.',
          severity: 'Moderate',
          clinicalNote: 'Monitor sedation levels and adjust dose as needed.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may prolong midazolam sedation in CYP3A4 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Use lower doses and monitor sedation levels closely.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may prolong midazolam effects in CYP3A4 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor sedation levels and consider dose reduction.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter midazolam metabolism in CYP3A4 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor sedation levels and adjust dose if needed.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect midazolam metabolism in CYP3A4 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor for changes in sedation duration.',
        };
      }
    }
    
    // CYP2C19 + Omeprazole combinations
    else if (gene === 'CYP2C19' && medication === 'omeprazole') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may increase omeprazole exposure in CYP2C19 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for increased acid suppression and potential side effects.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter omeprazole metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor gastric pH and adjust dose if needed.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may increase omeprazole effects in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for increased acid suppression.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may affect omeprazole metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor gastric pH and adjust dose if needed.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter omeprazole metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor gastric pH for changes.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect omeprazole metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor for any changes in acid suppression.',
        };
      }
    }
    
    // CYP2C9 + Phenytoin combinations
    else if (gene === 'CYP2C9' && medication === 'phenytoin') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may increase phenytoin toxicity risk in CYP2C9 poor metabolizers.',
          severity: 'Very High',
          clinicalNote: 'Monitor phenytoin levels closely and watch for signs of toxicity.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter phenytoin metabolism, requiring dose adjustment.',
          severity: 'High',
          clinicalNote: 'Monitor phenytoin levels and adjust dose as needed.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may increase phenytoin levels in CYP2C9 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor phenytoin levels closely and watch for signs of toxicity.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may affect phenytoin metabolism in CYP2C9 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor phenytoin levels and watch for toxicity signs.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter phenytoin metabolism in CYP2C9 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor phenytoin levels and adjust dose if needed.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect phenytoin metabolism in CYP2C9 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor phenytoin levels for any changes.',
        };
      }
    }
    
    // CYP3A4 + Atorvastatin combinations
    else if (gene === 'CYP3A4' && medication === 'atorvastatin') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may increase atorvastatin exposure and myopathy risk in CYP3A4 poor metabolizers.',
          severity: 'Very High',
          clinicalNote: 'Monitor for muscle pain and consider dose reduction. Check CK levels.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter atorvastatin metabolism in CYP3A4 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for statin effects and adjust dose if needed.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may increase atorvastatin exposure in CYP3A4 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for muscle pain and consider dose reduction.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may increase atorvastatin effects in CYP3A4 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for muscle pain and check CK levels.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter atorvastatin metabolism in CYP3A4 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for statin effects and adjust dose if needed.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect atorvastatin metabolism in CYP3A4 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor for any changes in statin effects.',
        };
      }
    }
    
    // CYP2C19 + Diazepam combinations
    else if (gene === 'CYP2C19' && medication === 'diazepam') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may prolong diazepam sedation in CYP2C19 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Use lower doses and monitor sedation levels closely.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter diazepam metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor sedation levels and adjust dose as needed.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may prolong diazepam effects in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Use lower doses and monitor sedation levels.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may prolong diazepam sedation in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor sedation levels and consider dose reduction.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter diazepam metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor sedation levels and adjust dose if needed.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect diazepam metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor for changes in sedation duration.',
        };
      }
    }
    
    // CYP2D6 + Tamoxifen combinations
    else if (gene === 'CYP2D6' && medication === 'tamoxifen') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may further reduce tamoxifen activation to endoxifen in CYP2D6 poor metabolizers.',
          severity: 'Very High',
          clinicalNote: 'Consider alternative endocrine therapy or increased monitoring.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter tamoxifen metabolism in CYP2D6 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for therapeutic response and consider dose adjustment.',
        };
      }
    }
    
    // CYP2C9 + Celecoxib combinations
    else if (gene === 'CYP2C9' && medication === 'celecoxib') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may increase celecoxib exposure in CYP2C9 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for increased NSAID effects and gastrointestinal side effects.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter celecoxib metabolism in CYP2C9 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for therapeutic response and adjust dose if needed.',
        };
      }
    }
    
    // CYP3A4 + Carbamazepine combinations
    else if (gene === 'CYP3A4' && medication === 'carbamazepine') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may alter carbamazepine metabolism and auto-induction in CYP3A4 poor metabolizers.',
          severity: 'Very High',
          clinicalNote: 'Monitor carbamazepine levels closely and watch for toxicity or reduced efficacy.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may affect carbamazepine metabolism in CYP3A4 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor carbamazepine levels and adjust dose as needed.',
        };
      }
    }
    
    // CYP2C19 + Tamoxifen combinations
    else if (gene === 'CYP2C19' && medication === 'tamoxifen') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect tamoxifen metabolism in CYP2C19 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for therapeutic response and consider dose adjustment.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter tamoxifen metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for therapeutic response and adjust dose if needed.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may affect tamoxifen metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for therapeutic response.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may affect tamoxifen metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for therapeutic response.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter tamoxifen metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor for therapeutic response.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect tamoxifen metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor for any changes in therapeutic response.',
        };
      }
    }
    
    // CYP2C19 + Warfarin combinations
    else if (gene === 'CYP2C19' && medication === 'warfarin') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect warfarin metabolism in CYP2C19 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor INR closely and adjust dose as needed.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter warfarin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor INR and adjust dose if needed.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may affect warfarin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor INR for changes.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may affect warfarin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor INR for changes.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter warfarin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor INR for any changes.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect warfarin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor INR for any changes.',
        };
      }
    }
    
    // CYP2C19 + Phenytoin combinations
    else if (gene === 'CYP2C19' && medication === 'phenytoin') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect phenytoin metabolism in CYP2C19 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor phenytoin levels closely and watch for signs of toxicity.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter phenytoin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor phenytoin levels and adjust dose as needed.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may affect phenytoin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor phenytoin levels for changes.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may affect phenytoin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor phenytoin levels for changes.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter phenytoin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor phenytoin levels for any changes.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect phenytoin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor phenytoin levels for any changes.',
        };
      }
    }
    
    // CYP2C19 + Celecoxib combinations
    else if (gene === 'CYP2C19' && medication === 'celecoxib') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect celecoxib metabolism in CYP2C19 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for increased NSAID effects and gastrointestinal side effects.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter celecoxib metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for therapeutic response and adjust dose if needed.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may affect celecoxib metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for NSAID effects.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may affect celecoxib metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for NSAID effects.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter celecoxib metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor for therapeutic response.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect celecoxib metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor for any changes in therapeutic response.',
        };
      }
    }
    
    // CYP2C19 + Atorvastatin combinations
    else if (gene === 'CYP2C19' && medication === 'atorvastatin') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect atorvastatin metabolism in CYP2C19 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for muscle pain and consider dose reduction. Check CK levels.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter atorvastatin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for statin effects and adjust dose if needed.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may affect atorvastatin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for muscle pain.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may affect atorvastatin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for muscle pain.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter atorvastatin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor for statin effects.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect atorvastatin metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor for any changes in statin effects.',
        };
      }
    }
    
    // CYP2C19 + Carbamazepine combinations
    else if (gene === 'CYP2C19' && medication === 'carbamazepine') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect carbamazepine metabolism in CYP2C19 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor carbamazepine levels closely and watch for toxicity or reduced efficacy.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter carbamazepine metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor carbamazepine levels and adjust dose as needed.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may affect carbamazepine metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor carbamazepine levels for changes.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may affect carbamazepine metabolism in CYP2C19 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor carbamazepine levels for changes.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter carbamazepine metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor carbamazepine levels for any changes.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect carbamazepine metabolism in CYP2C19 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor carbamazepine levels for any changes.',
        };
      }
    }
    
    // CYP2D6 + Clopidogrel combinations
    else if (gene === 'CYP2D6' && medication === 'clopidogrel') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect clopidogrel metabolism in CYP2D6 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor platelet function and consider dose adjustment.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter clopidogrel metabolism in CYP2D6 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for unexpected drug response and adjust dose if needed.',
        };
      } else if (ph < 7.35) {
        result = {
          effect: 'Acidosis may affect clopidogrel metabolism in CYP2D6 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor platelet function for changes.',
        };
      } else if (o2 < 90) {
        result = {
          effect: 'Hypoxia may affect clopidogrel metabolism in CYP2D6 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor platelet function for changes.',
        };
      } else if (ph > 7.45) {
        result = {
          effect: 'Alkalosis may alter clopidogrel metabolism in CYP2D6 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor for any changes in drug response.',
        };
      } else if (o2 > 100) {
        result = {
          effect: 'Hyperoxia may affect clopidogrel metabolism in CYP2D6 poor metabolizers.',
          severity: 'Low',
          clinicalNote: 'Monitor for any changes in drug response.',
        };
      }
    }
    
    // CYP2D6 + Omeprazole combinations
    else if (gene === 'CYP2D6' && medication === 'omeprazole') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect omeprazole metabolism in CYP2D6 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for increased acid suppression and potential side effects.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter omeprazole metabolism in CYP2D6 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor gastric pH and adjust dose if needed.',
        };
      }
    }
    
    // CYP2D6 + Warfarin combinations
    else if (gene === 'CYP2D6' && medication === 'warfarin') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect warfarin metabolism in CYP2D6 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor INR closely and adjust dose as needed.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter warfarin metabolism in CYP2D6 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor INR and adjust dose if needed.',
        };
      }
    }
    
    // CYP2D6 + Phenytoin combinations
    else if (gene === 'CYP2D6' && medication === 'phenytoin') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect phenytoin metabolism in CYP2D6 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor phenytoin levels closely and watch for signs of toxicity.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter phenytoin metabolism in CYP2D6 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor phenytoin levels and adjust dose as needed.',
        };
      }
    }
    
    // CYP2D6 + Celecoxib combinations
    else if (gene === 'CYP2D6' && medication === 'celecoxib') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect celecoxib metabolism in CYP2D6 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for increased NSAID effects and gastrointestinal side effects.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter celecoxib metabolism in CYP2D6 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for therapeutic response and adjust dose if needed.',
        };
      }
    }
    
    // CYP2D6 + Diazepam combinations
    else if (gene === 'CYP2D6' && medication === 'diazepam') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect diazepam metabolism in CYP2D6 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Use lower doses and monitor sedation levels closely.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter diazepam metabolism in CYP2D6 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor sedation levels and adjust dose as needed.',
        };
      }
    }
    
    // CYP2D6 + Midazolam combinations
    else if (gene === 'CYP2D6' && medication === 'midazolam') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect midazolam metabolism in CYP2D6 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Use lower doses and monitor sedation levels closely.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter midazolam metabolism in CYP2D6 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor sedation levels and adjust dose as needed.',
        };
      }
    }
    
    // CYP2D6 + Atorvastatin combinations
    else if (gene === 'CYP2D6' && medication === 'atorvastatin') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect atorvastatin metabolism in CYP2D6 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for muscle pain and consider dose reduction. Check CK levels.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter atorvastatin metabolism in CYP2D6 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for statin effects and adjust dose if needed.',
        };
      }
    }
    
    // CYP2D6 + Carbamazepine combinations
    else if (gene === 'CYP2D6' && medication === 'carbamazepine') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect carbamazepine metabolism in CYP2D6 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor carbamazepine levels closely and watch for toxicity or reduced efficacy.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter carbamazepine metabolism in CYP2D6 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor carbamazepine levels and adjust dose as needed.',
        };
      }
    }
    
    // CYP2C9 + Clopidogrel combinations
    else if (gene === 'CYP2C9' && medication === 'clopidogrel') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect clopidogrel metabolism in CYP2C9 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor platelet function and consider dose adjustment.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter clopidogrel metabolism in CYP2C9 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for unexpected drug response and adjust dose if needed.',
        };
      }
    }
    
    // CYP2C9 + Metoprolol combinations
    else if (gene === 'CYP2C9' && medication === 'metoprolol') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect metoprolol metabolism in CYP2C9 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor heart rate and blood pressure closely. Consider dose reduction.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter metoprolol metabolism in CYP2C9 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for enhanced or reduced beta-blockade effects.',
        };
      }
    }
    
    // CYP2C9 + Tamoxifen combinations
    else if (gene === 'CYP2C9' && medication === 'tamoxifen') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect tamoxifen metabolism in CYP2C9 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for therapeutic response and consider dose adjustment.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter tamoxifen metabolism in CYP2C9 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for therapeutic response and adjust dose if needed.',
        };
      }
    }
    
    // CYP2C9 + Omeprazole combinations
    else if (gene === 'CYP2C9' && medication === 'omeprazole') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect omeprazole metabolism in CYP2C9 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for increased acid suppression and potential side effects.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter omeprazole metabolism in CYP2C9 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor gastric pH and adjust dose if needed.',
        };
      }
    }
    
    // CYP2C9 + Diazepam combinations
    else if (gene === 'CYP2C9' && medication === 'diazepam') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect diazepam metabolism in CYP2C9 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Use lower doses and monitor sedation levels closely.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter diazepam metabolism in CYP2C9 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor sedation levels and adjust dose as needed.',
        };
      }
    }
    
    // CYP2C9 + Midazolam combinations
    else if (gene === 'CYP2C9' && medication === 'midazolam') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect midazolam metabolism in CYP2C9 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Use lower doses and monitor sedation levels closely.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter midazolam metabolism in CYP2C9 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor sedation levels and adjust dose as needed.',
        };
      }
    }
    
    // CYP2C9 + Atorvastatin combinations
    else if (gene === 'CYP2C9' && medication === 'atorvastatin') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect atorvastatin metabolism in CYP2C9 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for muscle pain and consider dose reduction. Check CK levels.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter atorvastatin metabolism in CYP2C9 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for statin effects and adjust dose if needed.',
        };
      }
    }
    
    // CYP3A4 + Clopidogrel combinations
    else if (gene === 'CYP3A4' && medication === 'clopidogrel') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect clopidogrel metabolism in CYP3A4 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor platelet function and consider dose adjustment.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter clopidogrel metabolism in CYP3A4 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for unexpected drug response and adjust dose if needed.',
        };
      }
    }
    
    // CYP3A4 + Metoprolol combinations
    else if (gene === 'CYP3A4' && medication === 'metoprolol') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect metoprolol metabolism in CYP3A4 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor heart rate and blood pressure closely. Consider dose reduction.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter metoprolol metabolism in CYP3A4 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for enhanced or reduced beta-blockade effects.',
        };
      }
    }
    
    // CYP3A4 + Tamoxifen combinations
    else if (gene === 'CYP3A4' && medication === 'tamoxifen') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect tamoxifen metabolism in CYP3A4 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for therapeutic response and consider dose adjustment.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter tamoxifen metabolism in CYP3A4 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for therapeutic response and adjust dose if needed.',
        };
      }
    }
    
    // CYP3A4 + Warfarin combinations
    else if (gene === 'CYP3A4' && medication === 'warfarin') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect warfarin metabolism in CYP3A4 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor INR closely and adjust dose as needed.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter warfarin metabolism in CYP3A4 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor INR and adjust dose if needed.',
        };
      }
    }
    
    // CYP3A4 + Phenytoin combinations
    else if (gene === 'CYP3A4' && medication === 'phenytoin') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect phenytoin metabolism in CYP3A4 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor phenytoin levels closely and watch for signs of toxicity.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter phenytoin metabolism in CYP3A4 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor phenytoin levels and adjust dose as needed.',
        };
      }
    }
    
    // CYP3A4 + Celecoxib combinations
    else if (gene === 'CYP3A4' && medication === 'celecoxib') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect celecoxib metabolism in CYP3A4 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for increased NSAID effects and gastrointestinal side effects.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter celecoxib metabolism in CYP3A4 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor for therapeutic response and adjust dose if needed.',
        };
      }
    }
    
    // CYP3A4 + Omeprazole combinations
    else if (gene === 'CYP3A4' && medication === 'omeprazole') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect omeprazole metabolism in CYP3A4 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Monitor for increased acid suppression and potential side effects.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter omeprazole metabolism in CYP3A4 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor gastric pH and adjust dose if needed.',
        };
      }
    }
    
    // CYP3A4 + Diazepam combinations
    else if (gene === 'CYP3A4' && medication === 'diazepam') {
      if (ph < 7.35 && o2 < 90) {
        result = {
          effect: 'Acidosis and hypoxia may affect diazepam metabolism in CYP3A4 poor metabolizers.',
          severity: 'High',
          clinicalNote: 'Use lower doses and monitor sedation levels closely.',
        };
      } else if (ph > 7.45 && o2 > 100) {
        result = {
          effect: 'Alkalosis and hyperoxia may alter diazepam metabolism in CYP3A4 poor metabolizers.',
          severity: 'Moderate',
          clinicalNote: 'Monitor sedation levels and adjust dose as needed.',
        };
      }
    }
    
    // Default case - use database lookup
    if (!result) {
      const found = interactionDatabase.find(
        (item) => item.gene === gene && item.medication === medication
      );
      if (found) {
        result = found;
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-indigo-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center">
            <Dna className="mr-4" size={32} />
            <h1 className="text-4xl font-bold">GENOVA</h1>
          </div>
          <p className="text-lg mt-2">Genetics and Medicine Interaction</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">Explore how genetic markers affect medicine response</h2>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="character">
              Select a Character:
            </label>
            <Select
              id="character"
              value={selectedCharacter}
              onChange={option => {
                setSelectedCharacter(option);
                setSelectedMedication(null);
              }}
              options={characterOptions}
              classNamePrefix="react-select"
              placeholder="Select a character"
              isSearchable
            />
          </div>

          {selectedCharacter && (
            <div className="mb-6">
              <p className="text-lg">
                <b>{selectedCharacter.value}</b> has the genetic marker <b>{selectedCharacter.gene}</b>
              </p>
            </div>
          )}

          {selectedCharacter && (
            <div className="mb-8">
              <label className="block text-gray-700 mb-2" htmlFor="medication">
                Select a Medication:
              </label>
              <Select
                id="medication"
                value={selectedMedication}
                onChange={setSelectedMedication}
                options={medicationOptions}
                classNamePrefix="react-select"
                placeholder="Select a medication"
                isSearchable
              />
            </div>
          )}

          {/* Sliders for pH and O2 */}
          {selectedCharacter && selectedMedication && (
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-700 mb-2">Blood pH: <b>{ph.toFixed(2)}</b></label>
                <input
                  type="range"
                  min="6.8"
                  max="7.8"
                  step="0.01"
                  value={ph}
                  onChange={e => setPh(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs mt-1">
                  <span className={ph < 7.35 ? 'text-red-500 font-bold' : ''}>Acidic (&lt;7.35)</span>
                  <span className={ph >= 7.35 && ph <= 7.45 ? 'text-green-600 font-bold' : ''}>Normal (7.35–7.45)</span>
                  <span className={ph > 7.45 ? 'text-blue-600 font-bold' : ''}>Alkaline (&gt;7.45)</span>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Oxygen Saturation (SpO₂): <b>{o2}%</b></label>
                <input
                  type="range"
                  min="70"
                  max="105"
                  step="1"
                  value={o2}
                  onChange={e => setO2(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs mt-1">
                  <span className={o2 < 90 ? 'text-red-500 font-bold' : ''}>Low (&lt;90%)</span>
                  <span className={o2 >= 90 && o2 <= 100 ? 'text-green-600 font-bold' : ''}>Normal (90–100%)</span>
                  <span className={o2 > 100 ? 'text-blue-600 font-bold' : ''}>High (&gt;100%)</span>
                </div>
              </div>
            </div>
          )}

          {selectedCharacter && selectedMedication && (
            <div className="mt-6">
              {result ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-md shadow-md">
                  <Check className="mr-2 inline" />
                  <strong>Interaction Found!</strong>
                  <p className="mt-2">Effect: {result.effect}</p>
                  <p className="font-semibold text-red-600">
                    Severity: {result.severity}
                  </p>
                  {result.clinicalNote && (
                    <p className="mt-2 text-indigo-800 font-semibold">Clinical note: {result.clinicalNote}</p>
                  )}
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
