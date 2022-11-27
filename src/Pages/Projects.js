import {connect, useDispatch} from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {useEffect, useState} from "react";
import ProjectTab from "../Components/Projects/ProjectTab";
import {toObjectList} from "../helpers/transformations";


const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        projects: state.project.projects
    }
}
const Projects = (props) => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(toObjectList(props.projects, "PROJECT"))

    }, [props.projects])

    return (

        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <ProjectTab rows={projects}/>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper sx={{p: 10, display: 'flex', flexDirection: 'column'}}>

                </Paper>
            </Grid>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={8}>
                <Paper sx={{p: 10, display: 'flex', flexDirection: 'column'}}>

                </Paper>
            </Grid>
        </Grid>)
}


export default connect(mapStateToProps)(Projects)