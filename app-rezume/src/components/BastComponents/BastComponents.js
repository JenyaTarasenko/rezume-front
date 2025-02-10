import './style.css';
import bastOne from "../../images/bast1.png";
import bastTwo from "../../images/bast2.png";
import bastTree from "../../images/bast3.png";


function BasComponent() {
    return (
        <div>
            <div className='bast-box_section'>
                <div className='bast-box_conteiner'>
                    {/* card bast-box */}
                    <div className='bast-box'>
                        <div className='box-avatar'>
                            <img src={bastOne}/>
                        </div>
                        <div className='bast-box_items'>
                            <h4>Full cycle</h4>
                        </div>
                        <div className='bast-box_description'>
                            <p>Creating full-cycle web applications: from architecture design to launching the finished product.</p>
                        </div>
                    </div>
                    {/* card bast-box */}

                    {/* card bast-box */}
                    <div className='bast-box'>
                        <div className='box-avatar'>
                            <img src={bastTwo }/>
                        </div>
                        <div className='bast-box_items'>
                            <h4>Scaling</h4>
                        </div>
                        <div className='bast-box_description'>
                            <p>Optimization and scaling: ensuring your project is stable, fast, and ready to grow.</p>
                        </div>
                    </div>
                    {/* card bast-box */}

                    {/* card bast-box */}
                    <div className='bast-box'>
                        <div className='box-avatar'>
                            <img src={bastTree }/>
                        </div>
                        <div className='bast-box_items'>
                            <h4>Functional UI</h4>
                        </div>
                        <div className='bast-box_description'>
                            <p>Modern UI: developing adaptive, functional and intuitive UI based on React and other libraries.</p>
                        </div>
                    </div>
                    {/* card bast-box */}
                </div>
            </div>
        </div>
    );
}

export default BasComponent;


