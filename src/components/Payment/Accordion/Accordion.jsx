import './Accordion.css'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaymentGuidProgreess from '../PaymentGuidProgress/PaymnetGuidProgress';




export default function PaymentAccordion(props) {

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                {props.title}
            </AccordionSummary>
            <AccordionDetails>
                <div className='DetailsSection'>
                    <PaymentGuidProgreess data={props.data} />
                </div>
            </AccordionDetails>
        </Accordion>
    )
}