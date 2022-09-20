import React, { useRef } from "react";
import { Form } from "@unform/web";
import Input from "../../../Form/input";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import './home.css';

//supabase

const Home = () => {
    const formRef = useRef(null)
    const navigate = useNavigate();

    async function handleSubmit(data, { reset }) {
        // try {
        //     const schema = Yup.object().shape({
        //         name: Yup.string().required('Nome é obrigatorio'),
        //         email: Yup.string()
        //             .email('Digite um email valido').required('O email é obrigatorio')
        //     })
        //     await schema.validate(data, {
        //         abortEarly: false,
        //     })
        //     formRef.current.setErrors({})
        //     navigate('/question/1')
        //     reset();
        // } catch (err) {
        //     if (err instanceof Yup.ValidationError) {
        //         const errorMessages = {}
        //         err.inner.forEach(error => {
        //             errorMessages[error.path] = error.message;
        //         })
        //         formRef.current.setErrors(errorMessages)
        //     }
        // }`
        navigate('/question/1')
    }


    return (

        <div className="home">
            <Form className="form" ref={formRef} onSubmit={handleSubmit}>
                <h2>Cadastro</h2>
                <label className="label-home" name='name'>Nome:</label>
                <Input className='input' name="name"></Input>
                <label className="label-home" name='Email'>Email:</label>
                <Input className='input' name='email' type='email'></Input>
                <button className="main-but" type='submit'>Iniciar</button>
            </Form>
        </div>

    )
}

export default Home;
