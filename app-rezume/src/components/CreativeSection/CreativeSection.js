import './style.css';
import aboutMe  from "../../images/about-me.png";

function CreativeSection() {
    return (

        <section id="about" className='about-me-section'>
            <div className='about-me-conteiner-about'>
                <div className='about-me-image'>
                    <img src={aboutMe} />
                </div>
                <div className='about-me-description'>
                    <h2>About</h2>
                    <p>I am a full-stack developer who enjoys working on interesting and challenging projects. I am always open to learning new technologies and improving my skills.I lead an active lifestyle, stay engaged in sports, and believe in continuous self-development.My goal is to work at Google and contribute to innovative solutions. Until then, I focus on building and refining my expertise in development.</p>
                </div>
            </div>
        </section>

    );
}  
export default CreativeSection;