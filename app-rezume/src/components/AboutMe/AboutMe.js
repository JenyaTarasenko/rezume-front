import './style.css'
import style from '../../images/jenya.jpg';




function AbouMe() {
    return (

        <section className='about-me-section'>
            <div className='about-me-conteiner'>
                <div className='about-me-image'>
                    <img src={style} />
                </div>
                <div className='about-me-description'>
                    <h2>Hi, my name is Jenya.</h2>
                    <p>I am a full-stack developer with expertise in Django and React. I love creating intuitive user interfaces with React and building robust backend logic and server-side applications with Django. I am well-versed in modern technologies such as React, JavaScript, Python, HTML, CSS, Bootstrap, DRF, Docker, and PostgreSQL. Always eager to learn, I stay updated with the latest trends in web development. I enjoy collaborating in teams and take on interesting projects that challenge my skills and knowledge</p>
                </div>
            </div>
        </section>

    );
}    


export default AbouMe;