import { useContext, useState } from 'react';
import QuestionContext from './question.context';

const QuestionProvider = ({ children }) => {
  const [questionNo, setQuestionNo] = useState(1);
  return (
    <QuestionContext.Provider value={{ questionNo, setQuestionNo }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => {
  return useContext(QuestionContext);
};

export default QuestionProvider;
