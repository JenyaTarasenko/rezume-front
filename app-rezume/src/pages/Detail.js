
import NavigationBar from  '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import DetailSection from '../components/DetailSection/DetailSection';
import SectionButton from '../components/SectionButton/SectionButton';
import { Helmet } from "react-helmet";  // компонент SEO



function DetailPage(){

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
            <DetailSection  />
            <SectionButton />
            <Footer/>
        </div>
    );
}
export default DetailPage;