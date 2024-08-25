import "./AccordionsSection.css"
import PaymentAccordion from "./Accordion/Accordion"
import { PaymentData } from "../../hooks/const"
import { v4 as uuidv4 } from 'uuid';


export default function AccordionsSection({ children }) {

    return (
        <div className="AccordionsSection">
            {PaymentData.map((data, index) => {
                const componentKey = uuidv4()
                return (<div key={componentKey} ><PaymentAccordion {...data} /></div>)
            })}
        </div >
    )
}