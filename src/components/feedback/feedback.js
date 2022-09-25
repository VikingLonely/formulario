import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useLocation, useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './feedback.css'




export default function Feedback() {
    const navigate = useNavigate();
    const valor = useLocation();

    const acertos = valor.state.acertos;
    const resUsuario = valor.state.resUsuario
    const res = valor.state.res
    const dica = valor.state.dica
    const nota = valor.state.notaF
    const frustado = valor.state.frustado

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (_event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <div className='frame'>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar >
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <Typography variant='h6' onClick={() => navigate('/')}> Home</Typography>
                            </IconButton>
                            <Typography variant="h3" align='center' component="div" sx={{ flexGrow: 1 }}>
                                Gabarito
                            </Typography>
                            <Typography variant='h6'>Nota: {nota}/10</Typography>
                        </Toolbar>
                    </AppBar>
                </Box >
            </div>

            <div className='main'>
                <div className='feedback'>
                    <Box component={"div"} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',

                    }}>
                        <h1 className='title'>Revisão:</h1>
                        {Object.values(acertos).map((item, key) => {
                            if (Boolean(item)) {
                                return (
                                    <Accordion key={key} expanded={expanded === ('panel' + key)} onChange={handleChange('panel' + key)}>

                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            sx={{ bgcolor: 'rgb(111, 247, 107)', border: 1 }}
                                        >
                                            <Typography >Questão {key + 1}</Typography>

                                        </AccordionSummary>
                                        <AccordionDetails sx={{ bgcolor: "rgb(95, 238, 243)", border: 1 }}>
                                            <Typography >Resposta correta: {res[key + 1]}</Typography>

                                        </AccordionDetails>
                                        <AccordionDetails sx={{ bgcolor: 'rgb(111, 247, 107)', border: 1 }}>

                                            <Typography>
                                                Sua resposta: {resUsuario[key + 1]}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            }
                            else {
                                return (
                                    <Accordion key={key} expanded={expanded === key} onChange={handleChange(key)}>

                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            sx={{ bgcolor: 'rgb(241, 123, 123)', border: 1 }}
                                        >
                                            <Typography >Questão {key + 1}</Typography>

                                        </AccordionSummary>
                                        <AccordionDetails sx={{ bgcolor: "rgb(95, 238, 243)", border: 1 }}>
                                            <Typography >Resposta correta: {res[key + 1]}</Typography>

                                        </AccordionDetails>
                                        <AccordionDetails sx={{ bgcolor: 'rgb(241, 123, 123)', border: 1 }}>

                                            <Typography>
                                                Sua resposta: {resUsuario[key + 1]}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            }
                        })}
                    </Box>
                </div>
                <div className='Obs'>
                    <Accordion sx={{ border: 1 }}>

                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ bgcolor: 'rgb(95, 238, 243)', border: 1, ":hover": { border: 2, borderColor: '#0d47a1' } }}
                        >
                            <Typography >Observação</Typography>

                        </AccordionSummary>
                        <AccordionDetails sx={{ border: 1 }} >
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Botões</TableCell>
                                            <TableCell align="center">Dica</TableCell>
                                            <TableCell align="center">Estou Frustado</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                Cliques
                                            </TableCell>
                                            <TableCell align="center">{dica}</TableCell>
                                            <TableCell align="center">{frustado}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </AccordionDetails>

                    </Accordion>
                </div>
            </div>

        </div >
    );
}