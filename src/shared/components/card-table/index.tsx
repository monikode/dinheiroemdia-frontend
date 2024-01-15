import { Grid, Typography, Box, IconButton, Button } from "@mui/material";
import { Pagination } from "../../../../node_modules/@mui/material/index";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./index.css"
import { StyledCard } from "../card/index";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { useNavigate } from "react-router-dom"; 

function CardItem() {
    
    return <StyledCard className="card-item">
        <Grid container direction="column" alignItems="center">
            <Grid item alignItems="center"> <FastfoodIcon className="icon" /></Grid>
            <Grid item > <Typography variant="h5" textAlign='center'>Alimentação</Typography></Grid>
            <Grid item > <Typography textAlign='center'>R$100,00 gastos esse mês</Typography></Grid>
            <Grid item > <Typography textAlign='center'>10% do consumo geral</Typography></Grid>
        </Grid>
        <IconButton className="options"><MoreVertIcon /></IconButton >
    </StyledCard>
}
export function CardTable() {
    const navigate = useNavigate();
    const link="/categoria/"

    const click = () => {
        navigate(link+"10")
    }

    return (
        <Grid container direction={"column"} flexWrap={"nowrap"}>

            <Box className="card-grid">


                <Box item xs={'auto'} className="grid-item">
                    <Button variant="contained">+</Button>
                </Box>

                {

                    Array(100).fill((<Box item xs={'auto'} className="grid-item" onClick={()=>  navigate(link+"10")}>
                        <CardItem></CardItem>
                    </Box>))}


            </Box>
            <Grid item xs={'auto'} justifyContent={"flex-end"}>
                <Pagination count={10} color="primary" />
            </Grid>
        </Grid>
    );
}
