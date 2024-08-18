import { useState } from "react";
import Input from "./components/Input";
import Square from "./components/Square";

export default function App() {
  const [colorValue, setColorValue] = useState(null);

  return (
    <main className="App">
      <Square colorValue={colorValue}/>
      <Input colorValue={colorValue} setColorValue={setColorValue}/>
    </main>
  );
}
