import { useContext, useState, useCallback } from 'react';
import QuestionContext from './question.context';

const QuestionProvider = ({ children }) => {
  const [questionNo, setQuestionNo] = useState(1);
  const [level, setLevel] = useState();

  const changeLevel = useCallback(level => {
    setLevel(level);
  }, []);

  return (
    <QuestionContext.Provider
      value={{ questionNo, setQuestionNo, level, changeLevel }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => {
  return useContext(QuestionContext);
};

export default QuestionProvider;
