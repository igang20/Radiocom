import './about.css'


export default function about() {
    return (
        <main>
            <div className="info-block">

                <h1 className="about-us">О нас</h1>
                <div className="info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        lectus risus, finibus ornare vestibulum et, feugiat quis dui.
                        Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus
                        est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat
                        posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu
                        purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros.
                        Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat.
                        Pellentesque quis augue quis elit tristique auctor. Integer varius
                        est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet
                        turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices
                        diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis
                        mollis dolor. Etiam viverra, arcu cursus porttitor porttitor, diam
                        nunc auctor nisl, quis placerat magna erat et odio. Phasellus
                        feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis
                        pharetra ac non arcu.

                        <br />
                        <br />In a dapibus nulla. Aenean erat orci, egestas non orci at,
                        varius tempus risus. Ut suscipit lorem magna, quis auctor leo
                        molestie ac. Integer ut efficitur neque. Curabitur sollicitudin
                        ipsum dolor, et tempus massa lacinia a. Donec efficitur egestas
                        facilisis. Aliquam feugiat convallis arcu quis sollicitudin. Nullam
                        eleifend iaculis sapien id scelerisque.
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
                            <img src="./imgs/AboutPageRefs/Email.svg" alt='email' />
                            <a href="mailto:eample@email.com "> xample@email.com</a>
                        </li>

                        <li className="contact-text">
                            <img src="./imgs/AboutPageRefs/Online Support.svg" alt='support
                            '/>
                            <a href="tel:0 (219) 3-40-40">0 (219) 3-40-40</a>
                        </li>

                        <li className="contact-text">
                            <img src="./imgs/AboutPageRefs/Location.svg" alt="location" />Днестровск, ул. Строителей, 33
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}