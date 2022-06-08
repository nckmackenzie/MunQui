import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Questions from '../components/quiz/Questions';
import Winnings from '../components/quiz/Winnings';
import QuestionProvider from '../context/QuestionProvider';

export default function Quiz() {
  let [searchParams] = useSearchParams();
  const [level, setLevel] = useState();

  useEffect(() => {
    setLevel(searchParams.get('level'));
  }, [level, searchParams]);

  return (
    <QuestionProvider>
      <article className="px-2 md:p-0 h-screen max-w-7xl  mx-auto flex">
        <div className="w-full h-max my-auto shadow-lg rounded-md flex flex-col md:flex-row">
          <Questions level={level} />
          <Winnings level={level} />
        </div>
      </article>
    </QuestionProvider>
  );
}
