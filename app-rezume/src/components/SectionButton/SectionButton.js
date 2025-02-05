import './style.css';
import ButtonSection from '../ButtonSection/ButtonSection';

function SectionButton() {

  return (

    <section className='section-button'>
        <div className='section-button-conteiner'>
            <div className='section-button-card'>

                <div className='button-left-style'>
                <div class="button-line"></div>
                    <h5>Let's talk about the project</h5>
                </div>

                <div className='button-right-style'>

                    <div className='button-right-conteiner-style'>
                        <ButtonSection />
                    </div>
                   
                    
                </div>
                


            </div>
        </div>

  

    </section>


  );
}

export default SectionButton;