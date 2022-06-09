import { useRef } from 'react';

export default function AnswerItem({ answer, onClick }) {
  const answerRef = useRef();
  const onClickHandler = () => {
    const selectedAnswer = String(answerRef.current.innerText).trim();
    onClick(selectedAnswer);
  };
  return (
    <li
      onClick={onClickHandler}
      ref={answerRef}
      className="w-full px-2 py-1 bg-white border border-solid border-stone-400 cursor-pointer transition-all hover:bg-stone-400 hover:text-gray-900"
    >
      {answer}
    </li>
  );
}
