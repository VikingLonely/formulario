import React, { Fragment, useEffect, useState } from "react";
import { useParams, Navigate, useNavigate, Link } from "react-router-dom";

async function getQuestions(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data;
}

const question = () => {
    const [questions, setQuestions] = useState({});
    const [alternativa, setAlternativa] = useState([{}]);
    const [redirect, setRedirect] = useState(false);
    let { id } = useParams();
    let history = useNavigate();

    useEffect(() => {
        getQuestions(id).then(data => {
            setQuestions(data['data']);
            setAlternativa(data['alteranativas']);
        }, error => {
            setRedirect(true);
        })
    }, [id]);

    if (redirect)
        return <Navigate to={'/'}></Navigate>
    return (
        <Fragment>
            <div className="container">
                <div className="question">
                    <h1>{questions.titulo}</h1>
                    <p>{questions.pergunta}</p>
                </div>
                <br></br>
                <div className="options">
                    {alternativa.map((n, index) =>
                        <input type={'radio'} name="option" key={index}>{n.alteranativas}</input>
                    )}
                </div>

            </div>
        </Fragment >
    )
}

export default question;