import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Lose from '../components/results/Lose';
import Win from '../components/results/Win';

export default function Result() {
  const [result, setResult] = useState();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setResult(searchParams.get('outcome'));
  }, [searchParams]);
  return (
    <article className="px-2 md:p-0 h-screen max-w-lg  mx-auto flex">
      <div className="w-full h-max my-auto shadow-lg rounded-2xl bg-red-400 px-8 py-6">
        {result === 'lose' && <Lose />}
        {result === 'win' && <Win />}
      </div>
    </article>
  );
}
