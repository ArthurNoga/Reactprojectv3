import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from "@mui/material/Grid";
import {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";
import {changePassword} from "../../features/User/AuthSlice";


const mapStateToProps = (state) => {
    return {user: state.auth.user}
}

const DialogChangePassword = (props) => {
    const [chngPassword, setChngPassword] = useState("")
    const [color, setColor] = useState("warning")
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        id: props.user.id,
        firstname: props.user.attributes.firstname,
        lastname: props.user.attributes.lastname,
        username: props.user.attributes.username,
        password: props.user.attributes.password,
        price: props.user.attributes.price,
        globalEarnings: props.user.attributes.globalEarnings
    })


    const handleClose = () => {
        props.setOpen(false);
    };
    const handleChange = (e) => {
        setChngPassword(e.target.value)
        setUser({...user, password: e.target.value,})
    }
    const handleSubmit = () => {
        dispatch(changePassword({user}))
        props.setOpen(false);
    }
    useEffect(() => {
    }, [user])

    const checkMatchingPassword = (value) => {
        chngPassword === value ? setColor("success") : setColor("warning")
    }

    return (
        <div>

            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle> Change password</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="password"
                                name="password"
                                label="Actual password"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                onChange={event => handleChange(event)}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="rePassword"
                                name="rePassword"
                                label="Confirm password"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                                onChange={e => checkMatchingPassword(e.target.value)}
                                color={color}
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
export default connect(mapStateToProps)(DialogChangePassword)