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
            <Link to='/'><img src="/imgs/logotype.svg" className="logo" alt='logo' /></Link>
            <Drawer open={open} onClose={() => { toggleDrawer(false) }}>
                <div className="drawer-list"></div>
            </Drawer>
        </header >
    )
}