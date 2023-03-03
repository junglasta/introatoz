import Navi from '../component/Navi';
import React from 'react';

function Hd(props) {
    return (
        <div className='hdsec'>
            <Navi />
            <section  style={{height:"100vh"}} className="section py-5 text-center position-relative">
                <div className='visual__list'>
                    <div className='topbgimg'></div>
                </div>
            </section>
            <section style={{height:"35vh"}} className="section py-5 text-center position-relative">
                <div className='introsec'>
                    <h3>기획하는 개발자 <span>Code:</span>밀레<span class="point"></span></h3>
                    <p className='fw-bold'>코드는 깨끗하게 짧게 자신있게!</p>
                </div>
            </section>
        </div>
    );
}

export default Hd;