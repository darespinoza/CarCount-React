import CountItem from "./components/CountItem";
import { VEHICLE_COUNTERS } from "./constants/vehicleTypes";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { Counter } from "./types";

function App() {
  const [counts, setCounts] = useLocalStorage<Counter[]>("car-counts", VEHICLE_COUNTERS);

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
