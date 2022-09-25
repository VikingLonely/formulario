
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import QuestionMain from './pages/AltQuestion/questionMain';
import FeedBack from '../feedback/feedback';

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/question/:id" element={<QuestionMain />}></Route>
                <Route path='/feedback' element={<FeedBack />} />
            </Routes>
        </Router>
    )
}

export default Rotas;