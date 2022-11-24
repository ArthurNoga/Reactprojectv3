import {DataGrid} from "@mui/x-data-grid";

export default function GridGenric(props) {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={props.rows} columns={props.columns} />
        </div>
    );
}