import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import {useDemoData} from '@mui/x-data-grid-generator';
import {clientColumns} from "./ClientColumn";
import GridGenric from "../GridGenric";
import {GridRowsProp} from "@mui/x-data-grid";
import {useEffect, useState} from "react";

const ClientTab = (props) => {
    const [clients,setClients]=useState([])
    useEffect(()=>{filter()},[props.clients])
    const client={
        id:"",
        firstname:"",
        lastname:"",
        mail:"",
        tel:"",
    }
    const filter=()=>{
       for(const n in props.clients){
           console.log(Object.values(props.clients[n]));
       }

    }

    return (<div>
        <GridGenric rows={clients} columns={clientColumns}/>
    </div>)
}

export default ClientTab;




