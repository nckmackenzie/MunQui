import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
export default function HomeForm() {
  let navigate = useNavigate();
  const difficultyRef = useRef();
  const onSubmitHandler = e => {
    e.preventDefault();
    const selectedDifficulty = difficultyRef.current.value;
    navigate(`/quiz?level=${selectedDifficulty}`);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="flex gap-1 flex-col mb-3">
        <label htmlFor="difficulty">Select level of difficulty</label>
        <select
          name="difficulty"
          id="difficulty"
          ref={difficultyRef}
          className="w-full px-2 py-1 outline-none bg-white rounded-sm text-base cursor-pointer border border-solid border-slate-400"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <Button type="submit">Start</Button>
    </form>
  );
}
