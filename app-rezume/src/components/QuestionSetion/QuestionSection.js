
import './style.css'

function QuestionSection() {
  return (

    <section className='question-section'>
        <div className="question-conteiner">

            <div className="question-card">
                <div className="question-style">
                <div class="vertical-line"></div>
                <div class="question-description">
                    <div className="question-items">
                        <h4>2021-2022</h4>
                    </div>
                    <div className="question-item-style">
                        <h4>ui-ux designer</h4>
                    </div>
                    <div className="question-text">
                        <p> Worked as a freelance designer created websites on Tilda, Wordpress platforms.</p>
                    </div>
                </div>

                </div>
                
            </div>

            <div className="question-card">
                <div className="question-style">
                <div class="vertical-line"></div>
                <div class="question-description">
                    <div className="question-items">
                        <h4>2024</h4>
                    </div>
                    <div className="question-item-style">
                        <h4>junior full-stack Django developer</h4>
                    </div>
                    <div className="question-text">
                        <p>I handled both frontend layout and backend development.</p>
                    </div>
                </div>

                </div>
                
            </div>
        </div>
       
    </section>
    
  );
}

export default QuestionSection;