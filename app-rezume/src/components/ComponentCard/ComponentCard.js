import './style.css';


function ComponentCard(){
    return(

        <section className='component-card-section'>
            <div className='component-card-conteiner'>

                <div id="git" className='component-card'>
                    <div className='style-component'>
                        <div className='style-line-git'></div>
                        <div className='style-description'>
                            <p>I have learned to use Git for version control and deploy websites on hosting platforms. Additionally, I gained experience deploying the frontend on one host and the backend on another, streamlining the development and deployment process.</p>
                        </div>

                    </div>
                </div>

                <div id="django" className='component-card'>
                    <div className='style-component'>
                        <div className='style-line-django'></div>
                        <div className='style-description'>
                            <p>I have gained practical experience with Django, Django ORM, SQLite, Docker, Jinja, SEO, Django PostgreSQL, and many other libraries for building websites. This knowledge has helped me develop full-featured web applications efficiently and optimize them for performance and search engines.</p>
                        </div>

                    </div>
                </div>

                <div id="css"className='component-card'>
                    <div className='style-component'>
                        <div className='style-line-css'></div>
                        <div className='style-description'>
                            <p>I am proficient in converting Figma designs into responsive websites and can also create layouts without a design. I’m skilled in Flexbox, Bootstrap 5, and currently learning Material UI for React project development.</p>
                        </div>
                    </div>

                </div>
                <div id="react" className='component-card'>
                    <div className='style-component'>
                        <div className='style-line-react'></div>
                        <div className='style-description'>
                            <p>I am learning and actively applying JavaScript, React, React Hooks, React Router, React Components, React Bootstrap, and Material UI to build dynamic and responsive web applications.</p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
export  default ComponentCard;