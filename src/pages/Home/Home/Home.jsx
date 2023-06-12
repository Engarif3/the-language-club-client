import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import ExtraSection from "../ExtraSection";
import TestingSection from "../TestingSection";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>The Language Club | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>
            <TestingSection></TestingSection>
        </div>
    );
};

export default Home;