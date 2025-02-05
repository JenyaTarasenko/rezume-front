import './style.css';
import naSige from '../../images/cofee.png';
import Cofee from '../../images/na-sige.png';
import Nimb from '../../images/nimb.png';


function BastBox() {
    return (
        <div className='bast-box_section'>
            <div className='bast-box_conteiner'>
                {/* card bast-box */}
                <div className='bast-box'>
                    <div className='box-avatar'>
                        <img src={naSige} alt="avatar" />
                    </div>
                    <div className='bast-box_items'>
                        <h4>I work 24/7.</h4>
                    </div>
                    <div className='bast-box_description'>
                        <p>I don't sleep much, I work a lot<strong style={{color:"#9900ff"}}>work hard</strong></p>
                    </div>
                </div>
                {/* card bast-box */}

                {/* card bast-box */}
                <div className='bast-box'>
                    <div className='box-avatar'>
                        <img src={Cofee} alt="avatar" />
                    </div>
                    <div className='bast-box_items'>
                        <h4>I'll see it through.</h4>
                    </div>
                    <div className='bast-box_description'>
                        <p>Bringing all projects to completion and delivering all projects on time <strong style={{color:"#9900ff"}}>“yesterday”.</strong></p>
                    </div>
                </div>
                {/* card bast-box */}

                {/* card bast-box */}
                <div className='bast-box'>
                    <div className='box-avatar'>
                        <img src={Nimb} alt="avatar" />
                    </div>
                    <div className='bast-box_items'>
                        <h4>Humor</h4>
                    </div>
                    <div className='bast-box_description'>
                        <p>I have a keen sense of humor <strong style={{color:"#9900ff"}}>charisma</strong> and curious</p>
                    </div>
                </div>
                {/* card bast-box */}
            </div>
        </div>
    );
}

export default BastBox;
