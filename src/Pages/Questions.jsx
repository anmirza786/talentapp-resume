import React from 'react';
import { Container } from '@mui/system';
import QuestionList from '../Components/QuestionList';

const Questions = () => {
    return (
        <Container>
            <h1>Questions</h1>
            <p>Question List</p>
            <QuestionList />
        </Container>
    );
};

export default Questions;