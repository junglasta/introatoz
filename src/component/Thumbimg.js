import thumbDB from '../json/thumb.json';

const Thumbimg = (props)=>{
    return (
        <div id="sns_thumb">
            <section className="section py-5 text-center d-flex flex-wrap align-items-center justify-content-center text-center flex-column h-100">
                <h6><span>"나를</span> 있게 한 소중한 시간들"</h6>
                <div id="thumbs" className="">
                    <ul className="col-12 d-flex">
                        {
                            thumbDB.thumb1.map((item, index)=>{
                                return <li key={'thumb' + index}>
                                    <a href="#"><img src={item} alt="" /></a>
                                </li>
                            })
                        }
                    </ul>
                    <ul className="col-12 d-flex">
                        {
                            thumbDB.thumb2.map((item, index)=>{
                                return <li key={'thumb' + index}>
                                    <a href="#"><img src={item} alt="" /></a>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Thumbimg;