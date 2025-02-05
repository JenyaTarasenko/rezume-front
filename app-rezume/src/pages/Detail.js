
import NavigationBar from  '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import DetailSection from '../components/DetailSection/DetailSection';
import SectionButton from '../components/SectionButton/SectionButton';


function DetailPage(){

    return(

        <div>
            <NavigationBar/>
            <DetailSection  />
            <SectionButton />
            <Footer/>
        </div>
    );
}
export default DetailPage;