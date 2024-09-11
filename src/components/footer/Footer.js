import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-container-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam
            iusto aperiam consequatur libero voluptatem minus asperiores quidem
            odit nisi facere optio nulla porro aliquid aut consequuntur, dolore
            adipisci atque.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-container-center">
          <h2>COMPANy</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-container-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+254798899273</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Copyright 2024 &copy; Tomato.com - All Right Reversed
      </p>
    </div>
  );
};

export default Footer;
