
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import ExtraSection from "../ExtraSection";
import ChartPie from "../ChartPie";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <ChartPie></ChartPie>
            <ExtraSection></ExtraSection>
          
        </>
    );
};

export default Home;