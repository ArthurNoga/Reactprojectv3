import {connect} from "react-redux";
import InvoiceTimer from "../Components/Invoices/InvoiceTimer";


const mapStateToProps = (state) => {
    return {}
}

const Invoices = (props) => {
    return (<><InvoiceTimer/>

    </>)
}


export default connect(mapStateToProps)(Invoices)