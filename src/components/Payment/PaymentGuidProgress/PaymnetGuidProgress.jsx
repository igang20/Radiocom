
import { Navigation, Pagination, } from 'swiper/modules'
import './PaymentGuidProgreess.css'
import { SwiperSlide, Swiper } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid';
import Dialog from '@mui/material/Dialog';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useWindowDimensions from '../../../hooks/WindowDimensions';
import { useRef, useState } from 'react';
import { DialogActions, DialogContent } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { red } from '@mui/material/colors';



export default function PaymentGuidProgreess(props) {
    const [open, setOpen] = useState(false)
    const selectedPhoto = useRef(null)
    const [PhotoScale, setScale] = useState(1)



    const dimensions = useWindowDimensions()

    const handleClickOpen = (e) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Swiper
            navigation={true}
            pagination={true}
            modules={[Pagination, Navigation,]} className="paymnetSwiper">
            {props.data.map((data, index) => {
                const swipertextStyle = `
                    content:"${index + 1}";
                    font-size: 400px;
                    font-family: inherit !important;
                    display: block;
                    position: absolute;
                    z-index: -1;
                    bottom: 3%;
                    color: rgb(29, 122, 193);
                    opacity: 0.3;
                    `

                const swipertextStyleMobile = `
                    content:"${index + 1}";
                    font-size: 150px;
                    font-family: inherit !important;
                    display: block;
                    position: absolute;
                    z-index: -1;
                    bottom: 3%;
                    color: rgb(29, 122, 193);
                    opacity: 0.3;
                
                `
                const ClassSalt = uuidv4()
                const UK = uuidv4()
                const imgId = uuidv4()
                return (
                    <div key={UK}>
                        <SwiperSlide >

                            <img src={data.img} className='GuidIllustration' alt='GuidIllustration' id={imgId} onClick={(e) => {

                                selectedPhoto.current = e.target.currentSrc
                                if (e.target.naturalHeight < 600) {
                                    setScale(2)
                                }
                                handleClickOpen()
                            }} />

                            <div className='TextWrapp'>
                                <style>
                                    {`.swiper-text${ClassSalt}::before {

                                        ${dimensions.width > 650 ? swipertextStyle : swipertextStyleMobile}
                                        }
                                      `}
                                </style>
                                <p className={`swiper-text${ClassSalt} .swiper-text-style`}>{data.text}</p>
                            </div>
                        </SwiperSlide>
                    </div>)
            })}

            <Dialog open={open} onClose={() => { handleClose() }} id='paymendial'>
                <DialogActions className='dialActions'><CloseIcon onClick={() => { handleClose() }} sx={{ fill: 'red !important' }} /></DialogActions>
                <DialogContent sx={{ padding: 0 }}>

                    <div className="DialContentn" >
                        <style>
                            {`.MuiDialog-paper{
                                scale: ${PhotoScale};
                            
                            }

                        `}
                        </style>
                        <img src={selectedPhoto.current} alt="" />
                    </div>
                </DialogContent>
            </Dialog>
        </Swiper>
    )
}