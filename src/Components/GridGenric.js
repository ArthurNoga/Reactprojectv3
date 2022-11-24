import {DataGrid, GridToolbar} from "@mui/x-data-grid";

export default function GridGenric(props) {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid   components={{Toolbar: GridToolbar}}
                        getRowId={(row) => row.id}
                        rows={props.rows}
                        columns={props.columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]} />
        </div>
    );
}