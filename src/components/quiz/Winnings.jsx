import { winningMultiplier } from '../../data';
import WinningItem from './WinningItem';
import { useQuestion } from '../../context/QuestionProvider';
export default function Winnings() {
  const { levelPoints } = useQuestion();

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
