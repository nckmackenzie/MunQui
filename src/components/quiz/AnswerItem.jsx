import React from 'react';

export default function AnswerItem({ answer, onClick }) {
  return (
    <li
      onClick={onClick}
      className="w-full px-2 py-1 bg-white border border-solid border-stone-400 cursor-pointer transition-all hover:bg-stone-400"
    >
      {answer}
    </li>
  );
}
