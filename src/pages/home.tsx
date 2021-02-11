import React from 'react';

import { Button } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

export const Home = () => {
    const history = useHistory();

    function navigateToQuiz() {
        history.push('/quiz');
    }

    return (
        <div>
            <Button onClick={navigateToQuiz} color="primary">Start</Button>
        </div>
    );
};