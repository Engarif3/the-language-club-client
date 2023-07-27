import { Outlet} from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { useContext} from "react";
import { AuthContext } from "../providers/AuthProvider";
import Container from "../Container";


const Main = () => {
  const {darkMode } = useContext(AuthContext);
 
  return (
   
      <div className={darkMode? "dark":""}>
      <div className="dark:bg-gray-800">
      <NavBar></NavBar>
      <Container>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
      </div>
    </div>
  
  );
};

export default Main;
