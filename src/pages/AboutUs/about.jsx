import './about.css'


export default function about() {
    return (
        <main>
            <div className="info-block">

                <h1 className="about-us">О нас</h1>
                <div className="info">
                    <p>
                        Наша компания предоставляет высококачественные интернет-услуги, ориентированные на удобство и потребности пользователей. Мы верим, что быстрый и стабильный доступ к сети — это не просто инструмент, а основа для развития, образования и развлечений. Наши передовые технологии и дружелюбная поддержка обеспечивают надежное подключение, где бы вы ни находились. С нами вы всегда на связи, ведь мы делаем интернет доступным и простым для всех!


                    </p>
                </div>
                <div className="contacts-container">
                    <ul className="contacts">
                        <strong className="heading-contacts">Контакты :</strong>
                        <li className="phone-text">
                            <img src="./imgs/AboutPageRefs/Phone.svg" alt='phone' />
                            <a href="tel:0 (777) 6-12-12 ">0 (777) 6-12-12</a>
                        </li>
                        <li className="contact-text">
                            <img src="./imgs/AboutPageRefs/Online Support.svg" alt='support
                            '/>
                            <a href="tel:0 (219) 3-40-40">0 (219) 3-40-40</a>
                        </li>
                        <li className="contact-text">
                            <img src="./imgs/AboutPageRefs/Email.svg" alt='email' />
                            <a href="mailto:dnestrradiocom@gmail.com"> dnestrradiocom@gmail.com</a>
                        </li>
                        <li className="contact-text">
                            <img src="./imgs/AboutPageRefs/Location.svg" alt="location" />Днестровск, ул. Строителей, 33
                        </li>
                        <li className="contact-text">
                            <img src="./imgs/AboutPageRefs/document.svg" alt="document" width={20} className='publicOferta' />
                            <a href="" download={true}>Публичная оферта</a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}