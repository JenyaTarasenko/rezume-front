
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
import CreativeSection from "../components/CreativeSection/CreativeSection";
import ComponentCard from "../components/ComponentCard/ComponentCard"

import { Helmet } from "react-helmet";  // компонент SEO
import favicon from "../../src/images/Im2.ico";




function HomePage(){
    

    return(

        <div>

            <Helmet>
                <title>React Django developer</title>
                <meta name="description" content="Hire an experienced Fullstack React Django developer for scalable web applications, REST API integration, and cloud deployment." />
                <meta name="keywords" content="Fullstack Developer, React Django Developer, Web Development, REST API, PostgreSQL, Docker, AWS Deployment" />
                <meta name="author" content="Jenya Tarasenko" />
                <meta property="og:title" content="Jenya Tarsenko| React Django" />
                <meta property="og:description" content="Hire an experienced Fullstack React Django developer for scalable web applications, REST API integration, and cloud deployment." />
                <meta property="og:image" content="URL_изображения_для_OG_тега" />
                <meta property="og:url" content="https://rezume-front.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Jenya Tarsenko| React Django"/>
                <meta name="twitter:description" content="Hire an experienced Fullstack React Django developer for scalable web applications, REST API integration, and cloud deployment." />
                <link rel="icon" href={favicon} type="image/x-icon" />
                
            </Helmet>

            <NavigationBar/>
            <FirstPage/>
            <AbouMe />
            <CreativeSection />
            <QuestionSection />
            <JobSection/>
            <TextWho/>
            <BasComponent />
            <BastText />
            <CardSection/>
            <BastSection  />
            <BastBox />
            <SectionButton />
            <ComponentCard />
            <Footer/>
        </div>
    );
}
export default HomePage;

