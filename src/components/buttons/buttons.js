import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Dica from "./dica";

const Buttons = (props) => {
    const navigate = useNavigate();

    return (
        <Grid container
            direction="row"
            justifyContent="space-around"
            alignItems="center">
            <Stack direction="row" spacing={2} >
                {props.page !== 1 && (
                    <Button variant="contained" onClick={() => navigate(`/question/${Number(props.page) - 1}`)}>Voltar</Button>
                )}
                <Dica dica={props.dica} />
                <Button variant="contained">Estou Frustado</Button>
                {props.page !== 10 && (
                    <Button variant="contained" onClick={() => navigate(`/question/${Number(props.page) + 1}`)}>Próxima</Button>
                )}
                {props.page === 10 && (
                    <Button variant="contained" onClick={() => {
                        var checkradio = document.querySelector('input[name="Questão 1"]:checked')
                        if (checkradio != null) {
                            alert('teste');
                        }
                        else { alert('valido') }
                    }}>Finalizar</Button>
                )}
            </Stack>

        </Grid >
    )
}

export default Buttons;