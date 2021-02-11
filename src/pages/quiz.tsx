import { Button, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Question } from '../models/question';
import { api } from '../services/api';
import { TriviaResponse } from '../services/trivia-response';

export const Quiz = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [index, setIndex] = useState<number>(0);

    const currentQuestion = questions[index];

    useEffect(() => {
        async function getQuestions() {
            const { data } = await api.get<TriviaResponse>('?amount=10&type=multiple');
            const convertedQuestions: Question[] = data.results.map((result) => {

                return {
                    title: result.question,
                    alternatives:  []
                };
            });
            setQuestions(convertedQuestions);
        }
        getQuestions();
    }, [])

    function goNext() {
        setIndex(index + 1)
    }

    function goPrevious() {
        setIndex(index - 1)
    }

    if(questions.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <>
            <InputLabel>{currentQuestion.title}</InputLabel>

            <Button onClick={goPrevious} color="primary">Previous</Button>
            <Button onClick={goNext} color="primary">Next</Button>
        </>
    )
};