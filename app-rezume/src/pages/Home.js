
import NavigationBar from  '../components/Navigation/Navigation';
import TextWho from '../components/TextWho/TextWho';
import JobSection from '../components/jobSection/jobSection';
import Footer from '../components/Footer/Footer';
import FirstPage from '../components/firstPage/firstPage';
import CardSection  from '../components/CardSection/CardSection';
import BastText from '../components/BastText/BastText';
import BastSection from '../components/BastSection/BastSection';
import BasComponent from '../components/BastComponents/BastComponents';
import BastBox from '../components/BastBox/BastBox';
import DetailSection from '../components/DetailSection/DetailSection';
import AbouMe from '../components/AboutMe/AboutMe';
import QuestionSection from '../components/QuestionSetion/QuestionSection';
import SectionButton from '../components/SectionButton/SectionButton';






function HomePage(){

    return(

        <div>
            <NavigationBar/>
            <FirstPage/>
            <AbouMe />
            <QuestionSection />
            <JobSection/>
            <TextWho/>
            <BasComponent />
            <BastText />
            <CardSection/>
            <BastSection  />
            <BastBox />
            <SectionButton />
            <Footer/>
        </div>
    );
}
export default HomePage;

