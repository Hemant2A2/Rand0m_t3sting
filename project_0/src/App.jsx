import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

function App() {
  return (
    <>
      <Textarea
          className="bg-blue-100 h-50 border-purple-600"
        >

        </Textarea>
      <div className="grid justify-center items-center">
        
        <Button 
        className="font-mono rounded-xl text-black-600 bg-blue-600 m-10 animate-bounce w-64 "
        onClick={() => alert("Hello World")}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default App;
