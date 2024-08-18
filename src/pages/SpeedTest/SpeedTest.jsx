import { useEffect } from 'react'

import { useMemo } from 'react'
import './SpeedTest.css'
import { useLocation } from 'react-router-dom'

export default function SpeedTest() {

    const ifReload = window.localStorage.getItem("fixingReaload")
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (ifReload === "true") {
                window.localStorage.setItem('fixingReaload', false)
                window.location.reload()
            }
        }, 800)
        return () => clearTimeout(timeout)
    }, [])
    return (
        <>
            <main>
                <div className='speed-test-block'>
                    <h1>Проверка скорости</h1>
                    <div id="sc-container">
                        <div id="sc-branding" className="sc-bb">
                            <a target="_blank" href="https://www.speedcheck.org/">
                                <img src="https://cdn.speedcheck.org/branding/speedcheck-logo-18.png" alt="Speedcheck" />
                            </a>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}
