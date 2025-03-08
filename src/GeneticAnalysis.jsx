import React, { useState } from "react";

const GeneticAnalysis = () => {
  const [dnaSequence, setDnaSequence] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [reaction, setReaction] = useState(null);
  const [error, setError] = useState(""); // To store any error messages

  const analyzeDNA = () => {
    if (!dnaSequence) {
      setError("DNA sequence is required.");
      return;
    }

    // Validate if the input contains only A, T, C, G characters
    const isValidDna = /^[ATCG]*$/i.test(dnaSequence);
    if (!isValidDna) {
      setError("Invalid DNA sequence. Only characters A, T, C, G are allowed.");
      return;
    }

    setError(""); // Clear any previous errors

    const gcContent =
      (dnaSequence.split("G").length - 1 + dnaSequence.split("C").length - 1) /
      dnaSequence.length;

    let result = "Normal";
    if (gcContent > 0.6) {
      result = "High GC Content - Possible Mutation";
    } else if (gcContent < 0.4) {
      result = "Low GC Content - Possible Instability";
    }

    setAnalysisResult(result);
    setReaction(null); // Reset reaction when new analysis is done
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Genetic Analysis Tool</h2>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows="4"
        placeholder="Enter DNA sequence..."
        value={dnaSequence}
        onChange={(e) => setDnaSequence(e.target.value.toUpperCase())}
      />
      <button
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={analyzeDNA}
      >
        Analyze
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {analysisResult && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          <p className="font-semibold">Result: {analysisResult}</p>
          <div className="flex gap-2 mt-2">
            <button
              className={`p-2 rounded ${reaction === "👍" ? "bg-green-300" : "bg-gray-200"}`}
              onClick={() => setReaction("👍")}
              aria-label="Thumbs up reaction"
            >
              👍
            </button>
            <button
              className={`p-2 rounded ${reaction === "👎" ? "bg-red-300" : "bg-gray-200"}`}
              onClick={() => setReaction("👎")}
              aria-label="Thumbs down reaction"
            >
              👎
            </button>
            <button
              className={`p-2 rounded ${reaction === "😮" ? "bg-yellow-300" : "bg-gray-200"}`}
              onClick={() => setReaction("😮")}
              aria-label="Surprised reaction"
            >
              😮
            </button>
            <button
              className={`p-2 rounded ${reaction === "😐" ? "bg-blue-300" : "bg-gray-200"}`}
              onClick={() => setReaction("😐")}
              aria-label="Neutral reaction"
            >
              😐
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneticAnalysis;
