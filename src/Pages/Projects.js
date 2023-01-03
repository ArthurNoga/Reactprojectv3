import {connect, useDispatch} from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {useEffect, useState} from "react";
import ProjectTab from "../Components/Projects/ProjectTab";
import {reserialize} from "../helpers/transformations";
import Button from "@mui/material/Button";
import DialogFormProject from "../Components/Projects/DialogFormProject";


const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        projects: state.project.projects
    }
}
const Projects = (props) => {
    const [projects, setProjects] = useState("")
    const handleOpenModalForm = () => {
        setAddProject(true)
    }
    const [addProject, setAddProject] = useState(false)
    useEffect(() => {
        setProjects(props.projects)
        console.log(props.projects)
    }, [props.projects])

    return (

        <Grid container spacing={4}>
            <Grid item xs={12} spacing={4}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Button variant="contained" color="primary" onClick={handleOpenModalForm}>Add Project</Button>
                    <DialogFormProject open={addProject} setOpen={setAddProject}/>
                </Paper>
            </Grid>
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