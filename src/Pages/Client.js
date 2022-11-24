import {connect} from "react-redux";
import ClientTab from "../Components/ClientsTab/ClientTab";
import Grid from "@mui/material/Grid";
import {Pages} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {useEffect, useState} from "react";
import {toObjectList} from "../helpers/transformations";


const mapStateToProps = (state) => {
    return {clients: state.client.clients}
}
const Client = (props) => {
    const[clients,setClients]=useState([])
    useEffect(() => {
        setClients(toObjectList(props.clients,"CLIENT"))

    }, [props.clients])

    return (<div>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <ClientTab rows={clients}/>
                </Paper>
            </Grid>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={8}>

            </Grid>
        </Grid>
    </div>)
}

export default connect(mapStateToProps)(Client)