import { useState, useEffect } from 'react';
import { winningMultiplier } from '../../data';
import WinningItem from './WinningItem';
import { useQuestion } from '../../context/QuestionProvider';
export default function Winnings() {
  const { level } = useQuestion();
  const [levelPoints, setLevelPoints] = useState(0);

  useEffect(() => {
    if (level === 'easy') {
      setLevelPoints(500);
    } else if (level === 'medium') {
      setLevelPoints(1000);
    } else {
      setLevelPoints(5000);
    }
  }, [level]);

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
