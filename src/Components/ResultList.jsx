import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { InputContext } from "../App";
import MeaningList from "./MeaningList";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

axios.defaults.baseURL = `https://api.dictionaryapi.dev/api/v2/entries/en`;

const ResultList = () => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { inputValue } = useContext(InputContext);

  const handleSearch = async (param) => {
    try {
      setLoading(true);
      const response = await axios(`/${param}`); //    // Make an API request using axios to fetch data for the given word (param)
      setResults(response.data); // Set results with the fetched data
      setError(""); // Reset error on successful fetch
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false); // Reset loading status
    }
  };

  // useEffect hook to trigger the handleSearch function whenever inputValue changes
  useEffect(() => {
    if (inputValue) { // Check if inputValue is not empty
      handleSearch(inputValue);  // Call handleSearch with the current inputValue
    }
  }, [inputValue]); // Dependency array: effect runs whenever inputValue changes

  if (loading) {
    return (
      <div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
        <p className="text-center">Loading...</p>
        <div className="h-6 bg-gray-300 rounded-md"></div>
        <div className="h-40 bg-gray-300 rounded-md"></div>
        <div className="h-8 bg-gray-300 rounded-md"></div>
        <div className="h-40 bg-gray-300 rounded-md"></div>
      </div>
    );
  }

  if (error) {
    return (
      <h3 className="text-center mt-10 font-semibold text-gray-500">
        {error} 😥
      </h3>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {results && (
        <div>
          <h3 className="text-2xl font-bold mt-4">Meaning & Definitions:</h3>
          <MeaningList mean={results} />

          <h3 className="text-2xl font-bold mt-4">Synonyms:</h3>
          <Synonyms syno={results} />

          <h3 className="text-2xl font-bold mt-4">Antonyms:</h3>
          <Antonyms anto={results} />
        </div>
      )}
    </div>
  );
};

export default ResultList;
