import { useState } from "react";
import Input from "./components/Input";
import Square from "./components/Square";

export default function App() {
  const [colorValue, setColorValue] = useState(null);
  const [hex, setHex] = useState(null);

  return (
    <main className="App">
      <Square colorValue={colorValue} hex={hex} />
      <Input colorValue={colorValue} setColorValue={setColorValue} setHex={setHex} />
    </main>
  );
}
