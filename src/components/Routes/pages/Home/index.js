import React, { useRef } from "react";
import { Form } from "@unform/web";
import Input from "../../../Form/input";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import './home.css';



const Home = () => {
    const formRef = useRef(null)
    const navigate = useNavigate();
    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome é obrigatorio'),
                email: Yup.string()
                    .email('Digite um email valido').required('O email é obrigatorio')
            })
            await schema.validate(data, {
                abortEarly: false,
            })
            formRef.current.setErrors({})
            navigate('/question/question1')
            console.log(data)
            reset();
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {}
                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })
                formRef.current.setErrors(errorMessages)
            }
        }
    }

    return (

        <div className="home">
            <Form className="form" ref={formRef} onSubmit={handleSubmit}>
                <h2>Cadastro</h2>
                <babel name='Nome'>Nome:</babel>
                <Input className='Input' name="name"></Input>
                <babel name='Email'>Email:</babel>
                <Input className='Input' name='email' type='email'></Input>
                <button type='submit'>Iniciar</button>
            </Form>
        </div>

    )
}

export default Home;

