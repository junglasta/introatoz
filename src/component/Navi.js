import React, { useState } from 'react';
import navicss from '../css/navi.module.css'
import { Link } from "react-router-dom";
import ScrollSpy from 'react-scrollspy';

function Navi(props) {
    const [naviText, updatenaviText] = useState(true);

    return (
        <div className={`${navicss.hd} border-bottom py-2 fixed-top`}>
            <header id="hd" className='container-lg d-flex mx-auto justify-content-between align-items-center'>
                <h1>
                    <Link to="/"><img src="./img/logo_1116.svg" className="img-fluid w-100" alt="logo" /></Link>
                </h1>
                <ScrollSpy id="gnb" className='d-flex'>
                    <li>
                        <Link to="#about" className={`${navicss.me} px-3 font141619`}>내소개</Link>
                    </li>
                    <li>
                        <a href="#portfolio" className='px-3 font141619'>작업물</a>
                    </li>
                    <li>
                        <a href="#contact" className='px-3 font141619'>면접제안</a>
                    </li>
                </ScrollSpy>
                <ul id="sns" className='d-flex'>
                    <li><a href="#" onClick={()=>{updatenaviText(!naviText)}} target="_blank">{ naviText ? '한국어' : 'ENG'}
                        </a>
                    </li>
                    {/* <li><a href="" target="_blank">노션</a></li>
                    <li><a href="" target="_blank">기획</a></li> */}
                </ul>
            </header>
        </div>
    );
}

export default Navi;
