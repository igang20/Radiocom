
import { Navigation, Pagination, } from 'swiper/modules'
import './PaymentGuidProgreess.css'
import { SwiperSlide, Swiper } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function PaymentGuidProgreess(props) {

    return (
        <Swiper
            navigation={true}
            pagination={true}
            modules={[Pagination, Navigation,]} className="mySwiper">
            {props.data.map((data, index) => {

                const ClassSalt = uuidv4()
                const UK = uuidv4()
                return (
                    <div key={UK}>
                        <SwiperSlide >
                            <img src={data.img} className='GuidIllustration' alt='GuidIllustration' />
                            <div className='TextWrapp'>
                                <style>
                                    {`.swiper-text${ClassSalt}::before {
                                        content:"${index + 1}";
                                        font-size: 400px;
                                        font-family: inherit !important;
                                        display: block;
                                        position: absolute;
                                        z-index: -1;
                                        bottom: 3%;
                                        color: rgb(29, 122, 193);
                                        opacity: 0.3;}
                                        
                                      `}
                                </style>
                                <p className={`swiper-text${ClassSalt} .swiper-text-style`}>{data.text}</p>
                            </div>
                        </SwiperSlide>
                    </div>)
            })}

        </Swiper>
    )
}