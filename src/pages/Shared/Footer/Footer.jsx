import logo from "../../../assets/language.png";
import {
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaMobile,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-8 bg-indigo-900 text-white">
        <div>
          <img className="w-14 h-12" src={logo} alt="" />
          <p>
            The Language Club
            <br />
            Hub of world communication
          </p>
        </div>
        <div className="flex justify-between w-full">
          <div>
            <h3 className=" mb-4">Catch Us on Social Platforms</h3>
            <div className="grid grid-flow-col gap-4">
              <a href="https://instagram.com/">
                <FaInstagram className="fill-current text-white" size={24} />
              </a>
              <a href="https://twitter.com/">
                <FaTwitter className="fill-current text-white" size={24} />
              </a>
              <a href="https://youtube.com/">
                <FaYoutube className="fill-current text-white" size={24} />
              </a>
              <a href="https://facebook.com/">
                <FaFacebook className="fill-current text-white" size={24} />
              </a>
            </div>
          </div>

          <div className="text-start">
            <div className="flex"><FaMobile className="text-white"></FaMobile><span className="">+49-15203555728</span></div>
            <p className="">
              Address: Reichenhainer str.51 <br /> 09126, Chemnitz <br />{" "}
              Germany
            </p>
          </div>

        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-indigo-900 text-white text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by The Language Club</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
