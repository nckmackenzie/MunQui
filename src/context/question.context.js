import { createContext } from 'react';

const QuestionContext = createContext({
  level: '',
  questionNo: '',
  levelPoints: '',
});

export default QuestionContext;
