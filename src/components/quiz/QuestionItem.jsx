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
  const { setQuestionNo } = useQuestion();
  const onClickHandler = () => {
    setQuestionNo(questionNo + 1);
  };

  return (
    <article
      className={`px-8 pt-4 absolute top-1/2 -translate-y-1/2 transition-all ${
        index === questionNo ? 'opacity-100' : 'opacity-0'
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
