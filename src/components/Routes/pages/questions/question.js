import React, { Fragment, useEffect, useState } from "react";
import { useParams, Navigate, useNavigate, Link } from "react-router-dom";

async function getQuestions(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data;
}

const Question = () => {
    const [questions, setQuestions] = useState({});
    const [alternativa, setAlternativa] = useState({});
    const [redirect, setRedirect] = useState(false);
    let { id } = useParams();
    let history = useNavigate();

    useEffect(() => {
        getQuestions(id).then(data => {
            setQuestions(data['data']);
            setAlternativa(data['alternativas']);
        }, error => {
            setRedirect(true);
        })
    }, [id]);

    const pagMain = () => {
        if (history === '/') {
            return true
        }
        return false
    }

    if (redirect)
        return <Navigate to={'/'}></Navigate>
    return (
        <Fragment>
            <div className="container" >
                <div className="question">
                    <h1>{questions.titulo}</h1>
                    <p>{questions.pergunta}</p>
                </div>
                <br></br>
                <div className="options">
                    <input type={'radio'} name="option" ></input>{alternativa.alt1}
                    <input type={'radio'} name="option" ></input>{alternativa.alt2}
                    <input type={'radio'} name="option" ></input>{alternativa.alt3}
                    <input type={'radio'} name="option" ></input>{alternativa.alt4}
                    <input type={'radio'} name="option"></input>{alternativa.alt5}
                </div>
                <div className="buttons">

                </div>

            </div>
        </Fragment >
    )
}

export default Question;