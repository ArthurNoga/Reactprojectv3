import {connect} from "react-redux";
import ClientTab from "../Components/ClientsTab/ClientTab";
import Grid from "@mui/material/Grid";
import {Pages} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";


const mapStateToProps = (state) => {
    return {clients: state.client.clients }
}
const Client = (props) => {

    return (<div>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <Paper sx={{p: 12, display: 'flex', flexDirection: 'column'}}>
                    <ClientTab clients={props.clients}/>
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