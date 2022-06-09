import { useNavigate } from 'react-router-dom';
import AnswerItem from './AnswerItem';
import { useQuestion } from '../../context/QuestionProvider';

export default function QuestionItem({
  question,
  answers,
  correct,
  id,
  questionNo,
  index,
}) {
  let navigate = useNavigate();
  const { setQuestionNo } = useQuestion();
  const onClickHandler = answer => {
    if (questionNo < 10) {
      if (answer === correct) {
        setQuestionNo(questionNo + 1);
      } else {
        navigate('/results?win=false', { replace: true });
      }
    } else {
      navigate('/result?win=true', { replace: true });
    }
  };

  return (
    <article
      className={`px-8 pt-4 absolute top-1/2 -translate-y-1/2 transition-all ${
        index === questionNo ? 'block' : 'hidden'
      }`}
    >
      <header className="mb-8">
        <div className="text-xl md:text-2xl font-display font-semibold text-slate-800">
          {question}
        </div>
      </header>
      <ul className="flex flex-col gap-2">
        {answers.map((answer, i) => (
          <AnswerItem key={i} answer={answer} onClick={onClickHandler} />
        ))}
      </ul>
    </article>
  );
}
