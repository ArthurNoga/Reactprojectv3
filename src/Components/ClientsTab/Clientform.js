import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import {Button} from "@mui/material";
import {connect, useDispatch} from "react-redux";


const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export const Clientform=(props)=> {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Client
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="mail"
                        name="mail"
                        label="@"
                        fullWidth
                        autoComplete="adresse mail"
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={6} sm={6}>
                    <TextField
                        required
                        id="Tel"
                        name="Tel"
                        label="Phone"
                        fullWidth
                        autoComplete="phone number"
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={6} sm={6}>
                    <Button variant="outlined">Enregistrer</Button>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}



export default connect(mapDispatchToProps)(Clientform)