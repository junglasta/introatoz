import Navi from '../component/Navi';
import React from 'react';

function Hd(props) {
    return (
        <div className='hdsec'>
            <Navi />
            <section className="section py-5 text-center position-relative">
                <div className='visual__list'>
                    <div className='topbgimg'></div>
                </div>
            </section>
            <section className="section py-5 text-center position-relative">
                <div>
                    <h3>기획하는 개발자 <span>Code:</span>밀레.</h3>
                    <p>코드는 깨끗하게 짧게 자신있게!</p>
                </div>
            </section>
        </div>
    );
}

export default Hd;