import { aboutUs } from "../../helper/constant";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./About.css";
import bgImg from '../../images/Carousel/1.jpeg'
import { useSearchParams } from "react-router-dom";

function About() { 


  return (
    <div>
      <Header />
      <div className="about-ctn">
        <div className="about-us-text-ctn">
        {aboutUs.map((item) => {
          return (
            <div id={item.id} className={item.class} key={item.id}>
              <h2>{item.title}</h2>
              {item.paragraph ? <p className="about-us-paragraph">{item.paragraph}</p> : null}
              {
                item.points?.length ? (
                <div>
                    {
                      item.points.map((points,i) => {
                        return(
                          <p key={points} className="about-us-points" >  {points}</p>
                        )
                      })
                    }
              </div>
                ) : null
              }
            </div>
          );
        })}
        </div>
   
        <img src={bgImg} alt="bgImg" className="bg-img" />
      </div>
      <Footer />
    </div>
  );
}

export default About;
