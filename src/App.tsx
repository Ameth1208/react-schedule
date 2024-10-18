import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        label={`count is ${count}`}
        onClick={() => setCount((count) => count + 1)}
      />
    </>
  );
}

export default App;
