import { numberWithCommas } from '../../utils/formatters';
import { useQuestion } from '../../context/QuestionProvider';

export default function WinningItem({ winnings, index }) {
  const { questionNo } = useQuestion();
  const highlightedAmount = questionNo - 2;
  return (
    <li
      className={`px-6 py-3   rounded-md text-center text-base md:text-2xl text-stone-800 transition-all ${
        highlightedAmount === index ? 'bg-green-400 scale-x-105 ' : 'bg-red-100'
      }`}
    >
      {numberWithCommas(winnings)}
    </li>
  );
}
