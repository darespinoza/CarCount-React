import type { Counter } from "../types";

type Props = {
  counter: Counter;
};

const CountItem = ({ counter }: Props) => {
  return (
    <li>
      {counter.text} {counter.count}
    </li>
  );
};

export default CountItem;
