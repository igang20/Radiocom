import AccordionsSection from '../../components/Payment/AccodionsSection'
import './Payment.css'

export default function Payment() {
    return (
        <main>
            <div className='payment-block'>
                <h1 className="payment-heading">Способы оплаты</h1>
                <div className="payment-variables">
                    <h3>Оплата наличными</h3>
                    <div className="banks">
                        <p>Оплата наличными возможна в отделениях следующих банков:</p>
                        <ul className='banks-list'>
                            <li><a> ОАО "Эксимбанк"</a></li>
                            <li><a>ЗАО "Агропромбанк"</a></li>
                        </ul>
                    </div>
                </div>
                <div className="payment-guides payment-variables">
                    <h3>Инструкции по оплате онлайн</h3>
                    <AccordionsSection>

                    </AccordionsSection>
                </div>
            </div>
        </main >
    )
}