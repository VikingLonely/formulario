import React, { Fragment, useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import Buttons from "../../../../Buttons/buttons";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './question.css'





const Question = (props) => {
    const [questions, setQuestions] = useState();
    const [redirect, setRedirect] = useState(false);
    const [value, setValue] = useState();
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            fetch(`http://localhost:3000/api/questions.json`).then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(data => {
                const res = data.find(pergunta => pergunta.id === Number(id))
                if (!res) {
                    navigate('/question/1')
                }
                setQuestions(res)
            });

        } catch (e) {
            console.log(e.message)
        }

    }, [id]);

    const handleChange = (e) => {
        setValue(e.target.value)
        props.onSetResponse(id, e.target.value);

    }


    if (redirect)
        return <Navigate to={'/'} ></Navigate>

    if (!questions) return <h3>Carregando</h3>

    else return (
        <Fragment>
            <div className='form-question'>
                <div className="container" >
                    <h1>{questions.titulo}</h1>

                    <br></br>
                    <div className="question">
                        <p>
                            {questions.pergunta}
                        </p>
                    </div>
                    <div className="options">
                        <FormControl >
                            <RadioGroup
                                value={value}
                                onChange={handleChange}>
                                {questions.alternativas.map((alternativa, index) => (
                                    <FormControlLabel value={index} name={questions.value} control={
                                        <Radio />
                                    } key={index} label={alternativa} checked={Number(props.info[id]) === Number(index)} className="radio" />
                                ))}
                            </RadioGroup>
                        </FormControl>

                    </div>

                    <div className="buttons">
                        <br></br>
                        <Buttons page={Number(id)} dica={questions.dica} res={questions.res} resUsuario={props.info} mensage={questions.mensage} alter={questions.alternativas} />
                    </div>

                </div>
            </div>
        </Fragment >
    )
}

export default Question;

