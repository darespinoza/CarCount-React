import { useState } from "react";
import CountItem from "./components/CountItem";
import type { Counter } from "./types";

function App() {
  const [counts, setCounts] = useState<Counter[]>([
    { id: Date.now(), count: 0, text: "Auto" },
  ]);

  return (
    <ul>
      {counts.map((count) => (
        <CountItem counter={count} />
      ))}
    </ul>
  );
}

export default App;
