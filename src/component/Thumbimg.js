import thumbDB from '../json/thumb.json';

const Thumbimg = (props)=>{
    return (
        <div>
            <section className="section py-5 text-center">
                <h6>"나를 있게 한 소중한 시간들"</h6>
                <div id="thumbs" className="d-flex flex-wrap justify-content-center">
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