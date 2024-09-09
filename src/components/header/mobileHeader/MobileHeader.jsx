import "./MobileHeader.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import SelectPackage from "../../main-page/main-slide/SelectPackage/SelectPackage";




export default function MobileHeader() {
    const [open, setOpne] = useState(false)
    const [openForm, setOpenForm] = useState(false)
    const handleOpen = () => setOpenForm(true);
    const handleClose = () => setOpenForm(false);

    function toggleDrawer(value) {
        setOpne(value)
    }
    return (
        <header className="mobile-header">
            <button onClick={() => { setOpne(true) }}><MenuIcon /></button>
            <Link to='/' style={{ height: 'auto', }}><img src="/imgs/Logo.svg" className="logo" alt='logo' /></Link>
            <Drawer open={open} onClose={() => { toggleDrawer(false) }}>
                <div className="header-links drawer-links" >
                    <Link onClick={() => { toggleDrawer(false) }} to='/'>Главная</Link>
                    <Link onClick={() => { toggleDrawer(false) }} to="/payment">Оплата</Link>
                    <Link onClick={() => { toggleDrawer(false) }} to="/support">Поддержка</Link>
                    <Link onClick={() => { toggleDrawer(false) }} to="/speedtest">Тест скорости</Link>
                    <Link onClick={() => { toggleDrawer(false) }} to="/about">О компании</Link>
                    <button className="main-slide-connect-button" onClick={handleOpen} style={{ margin: 0 }}>
                        Подключить
                    </button>
                    <SelectPackage open={openForm} onClose={handleClose} />
                </div>
            </Drawer>
        </header >
    )
}