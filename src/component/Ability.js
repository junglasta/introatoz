import abilityDB from '../json/ability.json'

const Ability = (props)=>{
    const ableDB = abilityDB.able;

    return (
        <div className="abilitysec">
            <section className="section py-5 text-center">
                <h3 className="mb-5">기술력<span class="point"></span></h3>
                <div className="abilityline"></div>
                <div>
                    <ul className="abilityul d-flex justify-content-between">
                        {
                            ableDB.map((item, index)=>{
                                const myclass = item.cls.join(" ");

                                return <li key={'ability' + index} className={myclass}>
                                    <h6><span className={item.color}>{item.text}</span></h6>
                                    <a href="#" style={{zIndex:1}}><img src={item.stick} alt="" /></a>
                                    <a href="#"><img src={item.logoimg} alt="" /></a>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Ability;