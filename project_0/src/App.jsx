import "./App.css";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import React, { useState } from "react";
import TextResponseModel from "./components/TextResponseModel";
import ImageResponseModel from "./components/ImageResponseModel";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleTextSubmit = async () => {
    const response = await TextResponseModel(userInput);
    console.log(response);
  };

  const handleImageSubmit = async () => {
    const response = await ImageResponseModel(userInput);
    console.log(response);
  };

  return (
    <>
      {/* <h1>Enter your Query here</h1> */}
      {/* <Textarea
        className="bg-blue-100 h-50 border-purple-600 mt-5"
        value={userInput}
        onChange={handleInputChange}
      /> */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
        <Label htmlFor="picture">Picture</Label>
        <Input
          id="picture"
          type="file"
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
              setUserInput(reader.result);
            };
            reader.readAsDataURL(file);
          }}
        />
      </div>
      <div className="grid justify-center items-center">
        <Button
          className="font-mono rounded-xl text-black-600 bg-blue-600 m-10 animate-bounce w-64"
          onClick={handleImageSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default App;
