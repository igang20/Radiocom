import "./AccordionsSection.css"
import PaymentAccordion from "./Accordion/Accordion"


export default function AccordionsSection({ children }) {
    return (
        <div className="AccordionsSection">
            <PaymentAccordion />
            <PaymentAccordion />
            <PaymentAccordion />
            <PaymentAccordion />
        </div>
    )
}