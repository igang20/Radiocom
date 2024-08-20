
import './SpeedTest.css'


export default function SpeedTest() {


    return (
        <>
            <main>

                <div className='speed-test-block'>
                    <h1>Проверка скорости</h1>
                    {/* <div id="sc-container">
                        <div id="sc-branding" className="sc-bb">
                            <a target="_blank" href="https://www.speedcheck.org/">
                                <img src="https://cdn.speedcheck.org/branding/speedcheck-logo-18.png" alt="Speedcheck" />
                            </a>
                        </div>
                    </div> */}
                    <div className='speedTestFrame '>
                        <iframe src="https://2ip.ru/speed-widget/?id=769" height={600} width={500} style={{ border: 'none' }} title='speedtest'></iframe>
                    </div>
                </div>

            </main >
        </>
    )
}
