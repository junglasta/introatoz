import React, { useState } from 'react';
import navicss from '../css/navi.module.css'
import { Link } from "react-router-dom";
import ScrollSpy from 'react-scrollspy';
import naviDB from '../json/navi.json';

function Navi(props) {
    // const [naviText, updatenaviText] = useState(true);

    const naviDBfile = naviDB.naviDATA;

    return (
        <div className={`${navicss.hd} py-2 fixed-top`}>
            <header id="hd" className='container-lg d-flex mx-auto justify-content-between align-items-center'>
                <h1>
                    <Link to="/"><img src="./img/logo_1116.svg" className="img-fluid w-100" alt="logo" /></Link>
                </h1>
                
                <ScrollSpy id="gnb" className='naviul d-flex'>
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
                
                <div className="dropdown" >
                    <button type="button" className="dropdown__btn sp_ico" aria-expanded="false">한국어</button>
                    <ul id="sns" className='dropdown__list d-flex'>
                        <li className="dropdown__item on sp_ico">
                            <a href="/" className="dropdown__option" data-lang="ko">한국어</a>
                        </li>
                        <li className="dropdown__item">
                            <a href="/en/" className="dropdown__option" data-lang="en">english</a>
                        </li>
                        {/* <li>
                            <a href="#" onClick={()=>{updatenaviText(!naviText)}} target="_blank">{ naviText ? '한국어' : 'ENG'}</a>
                        </li> */}
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Navi;