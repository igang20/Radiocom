import "./MobileHeader.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function MobileHeader() {
    const [open, setOpne] = useState(false)

    function toggleDrawer(value) {
        setOpne(value)
    }
    return (
        <header className="mobile-header">
            <button onClick={() => { setOpne(true) }}><MenuIcon /></button>
            <Link to='/'><img src="/imgs/logotype.png" className="logo" alt='logo' /></Link>
            <Drawer open={open} onClose={() => { toggleDrawer(false) }}>
                <div className="header-links drawer-links">
                    <Link to="/payment">Оплата</Link>
                    <Link to="/support">Поддержка</Link>
                    <Link to="#">Тест скорости</Link>
                    <Link to="/about">О компании</Link>
                </div>
            </Drawer>
        </header >
    )
}