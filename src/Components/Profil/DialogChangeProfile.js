import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {modifyUser, modifyUserInfo} from "../../features/User/AuthSlice";

export default function DialogChangeProfile(props) {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const [defineUser, setDefineUser] = useState(user.attributes)
    const handleChange = (e) => {
        setDefineUser({...defineUser, [e.target.name]: e.target.value})
        dispatch(modifyUserInfo(defineUser))
        dispatch(modifyUser(user))

    }

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
                                id="firstname"
                                name="firstname"
                                label="First name"
                                fullWidth
                                autoComplete={user.attributes.firstname}
                                variant="standard"

                                onKeyUp={event => handleChange(event)}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="lastname"
                                name="lastname"
                                label="Last name"
                                fullWidth
                                autoComplete={user.attributes.lastname}
                                variant="standard"
                                onKeyUp={event => handleChange(event)}
                            />
                        </Grid>

                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>)
}