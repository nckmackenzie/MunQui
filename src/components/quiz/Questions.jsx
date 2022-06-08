import { questions } from '../../data';
import QuestionItem from './QuestionItem';
import { useQuestion } from '../../context/QuestionProvider';

export default function Questions({ level }) {
  const { questionNo } = useQuestion();

  return (
    <div className="basis-2/3 py-2 relative">
      {questions
        .filter(q => q.difficulty.toLowerCase() === level)
        .map((quiz, i) => (
          <QuestionItem
            key={quiz.id}
            {...quiz}
            questionNo={questionNo}
            index={i + 1}
          />
        ))}
    </div>
  );
}
