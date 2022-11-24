import {connect, useDispatch} from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {useEffect, useState} from "react";
import {toObjectList} from "../helpers/transformations";
import ProjectTab from "../Components/Projects/ProjectTab";

const mapStateToProps = (state) => {
    return {
        projects: state.project
    }
}
const Projects = (props) => {
    const [project, setProject] = useState([])
    useEffect(() => {
        setProject(toObjectList(props.projects, "PROJECT"))
    }, [props.projects])


    return (<Grid container spacing={4}>
        <Grid item xs={12} >
            <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                <ProjectTab project={project}/>
            </Paper>
        </Grid>
        <Grid item xs={4} >
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