
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Question from './pages/questions/question';

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/question/:id" element={<Question />}></Route>
            </Routes>
        </Router>
    )
}

export default Rotas;