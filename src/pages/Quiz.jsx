import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Questions from '../components/quiz/Questions';
import Winnings from '../components/quiz/Winnings';
import { useQuestion } from '../context/QuestionProvider';

export default function Quiz() {
  let [searchParams] = useSearchParams();
  const { changeLevel } = useQuestion();

  useEffect(() => {
    changeLevel(searchParams.get('level'));
  }, [changeLevel, searchParams]);

  return (
    <article className="px-2 md:p-0 h-screen max-w-7xl  mx-auto flex">
      <div className="w-full h-max my-auto shadow-lg rounded-md flex flex-col md:flex-row">
        <Questions />
        <Winnings />
      </div>
    </article>
  );
}
