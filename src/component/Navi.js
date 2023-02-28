import React, { useState } from 'react';
import navicss from '../css/navi.module.css'
import { Link } from "react-router-dom";
import ScrollSpy from 'react-scrollspy';
import naviDB from '../json/navi.json';

function Navi(props) {
    const [naviText, updatenaviText] = useState(true);

    const naviDBfile = naviDB.naviDATA;

    return (
        <div className={`${navicss.hd} py-2 fixed-top`}>
            <header id="hd" className='container-lg d-flex mx-auto justify-content-between align-items-center'>
                <h1>
                    <Link to="/"><img src="./img/logo_1116.svg" className="img-fluid w-100" alt="logo" /></Link>
                </h1>
                <ScrollSpy id="gnb" className='d-flex'>
                    {
                        naviDBfile.map((item, index)=>{
                            const myclass = item.d1.cls.join(" ");
                            
                            if(item.d1.type){
                                return (
                                        <li key={ 'navi'+index } className={myclass}>
                                        <a href={item.d1.href} >
                                        {item.d1.naviText}
                                        </a>
                                        </li>
                                        )
                            }else{
                                return (
                                    <li key={ 'navi'+index } className={myclass}>
                                    <Link to={item.d1.href} >
                                    {item.d1.naviText}
                                    </Link>
                                    </li>
                                )
                            }

                        })
                    }
                </ScrollSpy>
                <ul id="sns" className='d-flex'>
                    <li>
                        <a href="#" onClick={()=>{updatenaviText(!naviText)}} target="_blank">{ naviText ? '한국어' : 'ENG'}</a>
                    </li>
                    {/* <li><a href="" target="_blank">노션</a></li>
                    <li><a href="" target="_blank">기획</a></li> */}
                </ul>
            </header>
        </div>
    );
}

export default Navi;