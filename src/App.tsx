import { useState } from "react";
import CountItem from "./components/CountItem";
import type { Counter } from "./types";

function App() {
  const [counts, setCounts] = useState<Counter[]>([
    { id: 1000, numero: 0, text: "Liviano" },
    { id: 2000, numero: 0, text: "Pesado" },
    { id: 3000, numero: 0, text: "Taxi" },
  ]);

  // Add unit to counter
  const addUnit = (id: number) => {
    setCounts(
      counts.map((count) =>
        count.id === id ? { ...count, numero: count.numero + 1 } : count,
      ),
    );
  };

  // Substract unit to counter
  const subsUnit = (id: number) => {
    setCounts(
      counts.map((count) =>
        count.id === id
          ? { ...count, numero: count.numero - 1 > 0 ? count.numero - 1 : 0 }
          : count,
      ),
    );
  };

  return (
    <div className="container m-5">
      <h1 className="text-center mb-4">Conteo vehicular</h1>
      <ul>
        {counts.map((count) => (
          <CountItem
            key={count.id}
            counter={count}
            addUnit={addUnit}
            subsUnit={subsUnit}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
