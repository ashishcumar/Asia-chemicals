import { useNavigate } from "react-router-dom";
import { whatsappContactNumber } from "../../helper/constant";
import "./Header.css";
function Header() {
  const navigate = useNavigate();


  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title" onClick={() => window.location.pathname = '/'}>Asia Chemical</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a onClick={() => navigate('/?products=true')} >
          Products
        </a>
        <a  onClick={() => navigate('/about-us')}>
          About us
        </a>
        <a href={`https://api.whatsapp.com/send?phone=91${whatsappContactNumber}`} >
          Contact us
        </a>
      </div>
    </div>
  );
}

export default Header;
