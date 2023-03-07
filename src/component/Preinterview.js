import React from 'react';
import inverviewDB from '../json/interveiw.json'

function Preinterview(props) {

    const inverviewDATA = inverviewDB;

    const handleClick = ()=>{
        alert('클릭')
    }

    return (
        <div className='previewsec'>
            <section className="section py-5 text-center">
                <h3 className='mb-5'>먼저 답하기<span class="point"></span>
                    {/* <button id='allbtn_interview'>전체보기</button> */}
                </h3>
                <dl className='faq container'>
                    <dt onClick={() => handleClick()} className='preview_dt1 border-top border-dark pt-3 d-flex justify-content-between align-items-center'>
                        <i><h4>협업을 잘 해낼 수 있나요?</h4></i>
                    </dt>
                    {
                        inverviewDATA.content1.map((item, index)=>{
                            const myclass = item.d1.cls.join(" ");

                            return <dd className={myclass} key={'interview' + index}>
                                {item.d1.text}
                            </dd>
                        })
                    }

                    <dt onClick={() => handleClick()} className='preview_dt2 border-top border-dark pt-3 d-flex justify-content-between align-items-center'>
                        <i><h4>자신이 생각하는 <span className='orange'>장점</span>과 <span className='green'>단점</span>은?</h4></i>
                    </dt>
                    {
                        inverviewDATA.content2.map((item, index)=>{
                            const myclass = item.d1.cls.join(" ");

                            return <dd className={myclass} key={'interview' + index}>
                                {item.d1.text}
                            </dd>
                        })
                    }
                    <dt onClick={() => handleClick()} className='preview_dt3 border-top border-dark pt-3 d-flex justify-content-between align-items-center'>
                        <i><h4>6개월 간의 프론트엔드 훈련, 무엇을 배웠나?</h4></i>
                    </dt>
                    {
                        inverviewDATA.content3.map((item, index)=>{
                            const myclass = item.d1.cls.join(" ");

                            return <dd className={myclass} key={'interview' + index}>
                                {item.d1.text}
                            </dd>
                        })
                    }
                    <dt onClick={() => handleClick()} className='preview_dt4 border-top border-dark pt-3 d-flex justify-content-between align-items-center'>
                        <i><h4>기획<span className='orange'>,</span> 기술<span className='orange'>,</span> 디자인<span className='orange'>,</span> 가장 <span className='green'>중점</span>을 둔 곳은?</h4></i>
                    </dt>
                    {
                        inverviewDATA.content4.map((item, index)=>{
                            const myclass = item.d1.cls.join(" ");

                            return <dd className={myclass} key={'interview' + index}>
                                {item.d1.text}
                            </dd>
                        })
                    }
                </dl>
            </section>
        </div>
    );
}

export default Preinterview;