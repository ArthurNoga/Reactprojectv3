import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Container from "@mui/material/Container";

export default function GridGenric(props) {
    return (
        <Container style={{height: 300, width: '100%'}}>
            <DataGrid components={{Toolbar: GridToolbar}}
                      getRowId={(row) => row.id}
                      rows={props.rows}
                      columns={props.columns}
                      pageSize={10}
                      rowsPerPageOptions={[10]}/>
        </Container>
    );
}