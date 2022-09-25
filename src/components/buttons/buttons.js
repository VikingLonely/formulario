import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import AlertButton from "./alertButton";


const acertos = {}
const resposta = {}
const resUsuario = {}


const Buttons = (props) => {
    const navigate = useNavigate();
    const [frustado, setFrustado] = useState(0);
    const [dica, setDica] = useState(0);
    const [nota, setNota] = useState(0);

    return (
        <Grid container
            direction="row"
            justifyContent="space-around"
            alignItems="center">
            <Stack direction="row" spacing={2} >
                {props.page !== 1 && (
                    <Button variant="contained" onClick={() => navigate(`/question/${Number(props.page) - 1}`)}>Voltar</Button>
                )}

                <AlertButton mensage={props.dica} id={1} title={'Dica'} value={"Dica"} contDica={(aux) => {
                    var aux2 = Number(dica) + aux
                    setDica(aux2)
                    console.log(dica)
                }} />

                <AlertButton mensage={props.mensage} id={2} title={"Mensagem Motivadora"} value={"Estou Frustado"} contFrustado={(aux) => {
                    var aux2 = Number(frustado) + aux
                    setFrustado(aux2)
                    console.log(frustado)
                }} />
                {
                    props.page !== 10 && (
                        <Button variant="contained" onClick={() => {
                            if (props.resUsuario[props.page] === props.res) {
                                acertos[props.page] = true
                                setNota(Number(nota) + 1)
                            }
                            else {
                                acertos[props.page] = false
                            }
                            resposta[props.page] = [props.res + ": " + props.alter[props.res]]
                            resUsuario[props.page] = [props.resUsuario[props.page] + ": " + props.alter[props.resUsuario[props.page]]]
                            navigate(`/question/${Number(props.page) + 1}`)
                        }}>Próxima</Button>
                    )
                }
                {props.page === 10 && (
                    <Button variant="contained" onClick={async () => {
                        if (props.resUsuario[props.page] === props.res) {
                            acertos[props.page] = true
                            setNota(Number(nota) + 1)
                            resposta[props.page] = [props.res + ": " + props.alter[props.res]]
                            resUsuario[props.page] = [props.resUsuario[props.page] + ": " + props.alter[props.resUsuario[props.page]]]

                            navigate('/feedback', { state: { resUsuario: resUsuario, res: resposta, acertos: acertos, notaF: nota + 1, dica: dica, frustado: frustado } })
                        }
                        else {
                            acertos[props.page] = false
                            resposta[props.page] = [props.res + ": " + props.alter[props.res]]
                            resUsuario[props.page] = [props.resUsuario[props.page] + ": " + props.alter[props.resUsuario[props.page]]]


                            navigate('/feedback', { state: { resUsuario: resUsuario, res: resposta, acertos: acertos, notaF: nota, dica: dica, frustado: frustado } })
                        }


                    }
                    }> Finalizar</Button>
                )}
            </Stack>

        </Grid >
    )
}

export default Buttons;