import type { Counter } from "../types";

type Props = {
  counter: Counter;
  addUnit: (id: number) => void;
  subsUnit: (id: number) => void;
};

const CountItem = ({ counter, addUnit, subsUnit }: Props) => {
  return (
    <li>
      <button className="btn btn-primary" onClick={() => subsUnit(counter.id)}>
        -
      </button>
      {counter.text} {counter.numero}
      <button className="btn btn-primary" onClick={() => addUnit(counter.id)}>
        +
      </button>
    </li>
  );
};

export default CountItem;
