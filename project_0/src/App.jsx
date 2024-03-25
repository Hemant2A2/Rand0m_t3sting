import "./App.css";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import React, { useState } from "react";
import TextResponseModel from "./components/TextResponseModel";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await TextResponseModel(userInput);
    console.log(response);
  };

  return (
    <>
      <h1>Enter your Query here</h1>
      <Textarea
        className="bg-blue-100 h-50 border-purple-600 mt-5"
        value={userInput}
        onChange={handleInputChange}
      />
      <div className="grid justify-center items-center">
        <Button
          className="font-mono rounded-xl text-black-600 bg-blue-600 m-10 animate-bounce w-64"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default App;
