import React, {PureComponent, useEffect, useState} from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {connect} from "react-redux";
import {toObjectList} from "../../helpers/transformations";

const mapStateToProps = (state) => {
    return {
        clients: state.client.clients,
        projects: state.project.projects
    }
}


const Chart = (props) => {
    const [clientsNb, setClientsNb] = useState(0)
    const [projectNb, setProjectNb] = useState(0)

    const calcInvoice = () => {
      const invoices=[]
        for(const i in props.projects){
            invoices.push(props.projects[i].relationships.invoice.data.id)

        }
        console.log(invoices)
    }
    useEffect(() => {
        calcInvoice()
        setClientsNb(props.clients.length)
        setProjectNb(props.projects.length)
    }, [props.clients, props.c])

    const data = [
        {
            name: 'My statistics',
            Projects: projectNb,
            Clients: clientsNb,
            Earning: 1,
        }

    ];


    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="Projects" fill="#8884d8" label="test"/>
                <Bar dataKey="Clients" fill="#435676"/>
                <Bar dataKey="Earning" fill="#86ca9d"/>

            </BarChart>
        </ResponsiveContainer>
    );

}
export default connect(mapStateToProps)(Chart)