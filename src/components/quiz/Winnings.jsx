import { winningMultiplier } from '../../data';
import WinningItem from './WinningItem';
export default function Winnings({ level }) {
  let levelPoints;
  if (level === 'easy') {
    levelPoints = 500;
  } else if (level === 'medium') {
    levelPoints = 1000;
  } else {
    levelPoints = 5000;
  }

  return (
    <div className="basis-1/3 bg-gray-100 p-6 ">
      <ul className="flex flex-col gap-2">
        {winningMultiplier
          .map((winning, i) => (
            <WinningItem
              key={winning}
              winnings={levelPoints * winning}
              index={i}
            />
          ))
          .reverse()}
      </ul>
    </div>
  );
}
