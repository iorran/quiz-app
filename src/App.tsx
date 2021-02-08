import { Button } from '@material-ui/core';
import { api } from './services/api';
import Quiz from './pages/quiz'

import { useState } from 'react';

function App() {
  const [questions, setQuestions] = useState<any>([]);

  async function getQuestions() {
    const response = await api.get('?amount=10');
    console.log(response);
    setQuestions(response.data.results);
  }

  return (
    <div>
      <Quiz questions={questions} />
      <Button onClick={getQuestions} color="primary">Hello World</Button>
    </div>
  );
}

export default App;
   