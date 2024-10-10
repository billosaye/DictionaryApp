import React, { useState, createContext } from "react";
import Header from "./Components/Header";
import ResultList from "./Components/ResultList";

// Create a context to share state between components
export const InputContext = createContext();

const App = () => {
  const [inputValue, setInputValue] = useState("");
  
// 'value' is an object that contains the state (inputValue) and its updater function (setInputValue)
  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <InputContext.Provider value={value}> {/*Provide the context value (inputValue and setInputValue) to all child components*/}
      <div className="App p-4 bg-gray-100 min-h-screen">
        <Header />
        <ResultList />
      </div>
    </InputContext.Provider>
  );
};

export default App;
