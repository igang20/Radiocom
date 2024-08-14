import './Accordion.css'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function PaymentAccordion() {

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} id={'Guide1'}>
                Способ оплаты
            </AccordionSummary>
            <AccordionDetails>
                <div className='DetailsSection'>
                    Перечень картинок с гайдом
                </div>
            </AccordionDetails>
        </Accordion>
    )
}