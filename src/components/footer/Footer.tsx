import { useNavigate } from "react-router-dom";
import "./Footer.css";
import { whatsappContactNumber } from "../../helper/constant";

function Footer() {

  const navigate = useNavigate();

  return (
    <footer>
      <div className="footer-content">
        <h3>Asia Chemicals</h3>
        <p>
          The PU adhesive & binder brand which you can rely on, Engineering
          innovation for decades, manufacturing products of superior quality,
          Experts in the manufacture of high-quality PU binders for rubber as
          well as rebonded foam,rebonded foam,PU paints.
        </p>
        {/* <ul className="socials">
        <SocialLink  />
        </ul> */}
      </div>
      <div className="footer-bottom">
        <p onClick={() => navigate('/')}> Home </p>
        <p onClick={() => navigate('/?products=true')}> Products </p>
        <p onClick={() => navigate('/about-us')}> About us </p>
        <p onClick={() => window.open(`https://api.whatsapp.com/send?phone=91${whatsappContactNumber}`,"_blank")}> Contact us </p>
        <p onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeR77GCxZ1-hi6ChgZYRTjKGLk2gzyDcns3qIPOZfphdo6eSg/viewform","_blank")}> Get in Touch </p>
      </div>
    </footer>
  );
}

export default Footer;
