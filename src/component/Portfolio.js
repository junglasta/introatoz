import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/autoplay";
import '../css/sjy_style.min.css';
import dbportfolio from '../json/portfolioDB.json'

function Portfolio(props) {
    const portfolioDB = dbportfolio;

    return (
        <div id={props.id}>
            <Swiper
            modules={[Autoplay, Pagination]}
            className="sjy_Swiper"

            spaceBetween={0}
            slidesPerView={1.5}
            centeredSlides={true}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            // }}
            pagination={{
                clickable: true,
            }}

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <h2 className='text-md-center py-2'>{props.title}</h2>
            {
                portfolioDB.map((item, index)=>{
                    const myclass = item.swiperClass.join(" ");
                    const myHash = item.swiperBtnHash.join(" ");
                    const mytools = item.swiperTools.join(" ");

                    return(
                        <SwiperSlide className={myclass}>
                            <Link to={item.swiperBtnLink} className="text-decoration-none text-dark">
                                <ul className='d-flex'>
                                    <li><a href={item.swiperBtnText[0].btnTarget}>{item.swiperBtnText[0].btnText}</a></li>
                                    <li><a href={item.swiperBtnText[1].btnTarget}>{item.swiperBtnText[1].btnText}</a></li>
                                </ul>
                                <p>{myHash}</p>
                                <h2>{item.swiperImgTitle}</h2>
                                <p>{
                                item.swiperImgDesc[0]
                                }<br />
                                {
                                item.swiperImgDesc[1]
                                }
                                </p>
                                <p>{mytools}</p>
                                <ul className='d-flex'>
                                    <li>{item.swiperStacks.HTML5}</li>
                                    <li>{item.swiperStacks.CSS3}</li>
                                    <li>{item.swiperStacks.JavaScript}</li>
                                    <li>{item.swiperStacks.BOOTSTRAP}</li>
                                </ul>
                                <ul className='d-flex'>
                                    <li><a href=""><i className={item.swiperLinks[0].linkClass}></i></a></li>
                                    <li><a href=""><i className={item.swiperLinks[1].linkClass}></i></a></li>
                                    {/* <li><a href=""><i className={item.swiperLinks[2].linkClass}></i></a></li> */}
                                    {/* <li><a href=""><i className={item.swiperLinks[3].linkClass}></i></a></li> */}
                                </ul>
                            </Link>
                        </SwiperSlide>
                    )
                })
            }
            
            </Swiper>
        </div>
    );
}

export default Portfolio;