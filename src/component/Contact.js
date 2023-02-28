const Contact = (props)=>{

    // var popupDark = document.querySelector('#agree + label a');
    // var popupExit = document.querySelector('#popagree a');

    // popupDark.addEventListener('click', function(){
    //     document.body.classList.add('show');
    // })
    // popupExit.addEventListener('click', function(){
    //     document.body.classList.remove('show');
    // })

    // $('form').on('click submit', '[type="image"]', function(){
    //     if( !($('#agree').is(":checked")) ){
    //         alert('개인정보정책에 동의해주세요');
    //         return false;
    //     }else{
    //         return true;
    //     }
    // })

    return (
        <div id="contactsec">
            <section className="section py-5 text-center">
                
                
                <div className="container form">
                    <h3>면접 제안하기.</h3>
                    <form action="http://c0ffee24.cafe24.com/pwa/" method="post" name="contact" id="contact">
                    
                        <ul className="row d-flex flex-wrap">
                            <li className="col-md-12 py-4 px-0">
                                <ul className="line lineRound d-flex flex-wrap justify-content-md-center align-items-center">
                                    <li className="col-lg-3 col-6">
                                        <input type="checkbox" name="position[0]" id="position0" value="frontend" className="d-none"></input>
                                        <label for="position0">프론트엔드</label>
                                    </li>
                                    <li className="col-lg-3 col-6">
                                        <input type="checkbox" name="position[1]" id="position1" value="publisher" className="d-none"></input>
                                        <label for="position1">퍼블리셔</label>
                                    </li>
                                    <li className="col-lg-3 col-6">
                                        <input type="checkbox" name="position[2]" id="position2" value="marketing" className="d-none"></input>
                                        <label for="position2">기획/마케팅</label>
                                    </li>
                                    <li className="col-lg-3 col-6">
                                        <input type="checkbox" name="position[3]" id="position3" value="design" className="d-none"></input>
                                        <label for="position3">디자인</label>
                                    </li>
                                </ul>
                            </li>

                            <li className="mt-5">
                                <ul className="row d-flex flex-wrap">
                                    <li className="col-md-4 col-6">
                                        <div className="line lineB px-md-5 px-sm-5">
                                            <p className="formIndent borderB">
                                                <input type="text" name="company" id="company" placeholder="기 업 명" requierd></input>
                                            </p>
                                        </div>
                                    </li>
                            
                                    <li className="col-md-4 col-6">
                                        <div className="line lineB px-md-5 px-sm-5">
                                            <p className="formIndent borderB">
                                                <input type="text" name="manager" id="manager" placeholder="담당자 명"></input>
                                            </p>
                                        </div>
                                    </li>
                            
                                    <li className="col-md-4 col-6">
                                        <div className="line lineB px-md-5 px-sm-5">
                                            <p className="formIndent borderB">
                                                <input type="text" name="loaction" id="loaction" placeholder="회사 위치"></input>
                                            </p>
                                        </div>
                                    </li>
                            
                                    <li className="col-md-4 col-6 mt-4">
                                        <div className="line lineB px-md-5 px-sm-5">
                                            <p className="formIndent borderB">
                                                <input type="text" name="email" id="email" placeholder="이 메 일" requierd></input>
                                            </p>
                                        </div>
                                    </li>
                            
                                    <li className="col-md-4 col-6 mt-4">
                                        <div className="line lineB px-md-5 px-sm-5">
                                            <p className="formIndent borderB">
                                                <input type="text" name="isBoss" id="isBoss" placeholder="사수 여부"></input>
                                            </p>
                                        </div>
                                    </li>
                            
                                    <li className="col-md-4 col-6 calendar mt-4">
                                        <div className="line lineB d-flex px-md-5 px-sm-5 col">
                                            <p className="formIndent borderB">
                                                <input type="text" name="datepicker" id="datepicker" placeholder="월 / 일 / 시"></input>
                                            </p>
                                            {/* <a className="js_calendar" href="#"><i className="bi bi-calendar-week-fill col"></i></a> */}
                                        </div>
                                    </li>
                    
                                    <li className="col-md-12 mt-4">
                                        <div className=" line d-flex justify-content-center align-items-center text-align-center">
                                            <p className="formIndent">
                                                <input type="textarea" name="message" id="message" placeholder="남기실 말"></input>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        
                        <p className="d-md-flex justify-content-md-between align-items-md-center mb-0">
                            <p className="mb-0">
                                <input type="checkbox" id="agree" className="d-none"></input>
                                <label for="agree" className="bi bi-circle">개인정보수집이용동의<a href="#popagree">약관</a></label>
                            </p>
                            <input type="image" src="./img/contactBtn.png" value="제안하기" className="col-md-3 col-6"></input>
                        </p>
                            
                        <div id="popagree" className="position-absolute bg-white border p-3">
                            <div className="popcontent">
                                <iframe src="https://thankyou.jobaba.net/Public/Member/IFrame/iframe_terms_01_9243.html" frameborder="0"></iframe>
                                <a href=""><i className="bi bi-x-square-fill"></i></a>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;