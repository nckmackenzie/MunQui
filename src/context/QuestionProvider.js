import { useContext, useState, useCallback, useEffect } from 'react';
import QuestionContext from './question.context';

const QuestionProvider = ({ children }) => {
  const [questionNo, setQuestionNo] = useState(1);
  const [level, setLevel] = useState();
  const [levelPoints, setLevelPoints] = useState(0);

  const changeLevel = useCallback(level => {
    setLevel(level);
  }, []);

  useEffect(() => {
    if (level === 'easy') {
      setLevelPoints(500);
    } else if (level === 'medium') {
      setLevelPoints(1000);
    } else {
      setLevelPoints(5000);
    }
  }, [level]);

  return (
    <QuestionContext.Provider
      value={{ questionNo, setQuestionNo, level, changeLevel, levelPoints }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => {
  return useContext(QuestionContext);
};

export default QuestionProvider;
