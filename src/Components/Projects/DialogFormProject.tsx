import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import * as React from "react";
import {useDispatch} from "react-redux";
import {useState} from "react";

const DialogFormProject = (props) => {

    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(client)


    };

    const [client, setClient] = useState({

    });

    const handleChange = (event) => {
        setClient({
            ...client,
            [event.target.name]: event.target.value
        });
    };
    const handleClose = () => {
        props.setOpen(false);
    };
    return (
        <div>

            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <Typography variant="h6" gutterBottom>
                        Client
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstname"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                onChange={e => {
                                    handleChange(e)
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastname"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                                onChange={e => {
                                    handleChange(e)
                                }}
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
                                onChange={e => {
                                    handleChange(e)
                                }}
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
                                onChange={e => {
                                    handleChange(e)
                                }}
                            />
                        </Grid>


                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>)
}
export default DialogFormProject