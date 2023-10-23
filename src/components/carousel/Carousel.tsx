import "./Carousel.css";
import { CarouselImages } from "../../helper/constant";
function Carousel() {
  return (
    <div>
    <div className="pic-ctn">
      {
        CarouselImages.map((pic, index) => {
          return (
            <img src={pic} alt="product" className="pic" key={index} />
          )
        })
      }
    </div>
    <div className="company-text">
        <div className="company-text-ctn">
          <p className="company-name-opq"> Asia Chemical </p>
          <p className="company-paragraph"> The PU adhesive & binder brand which you can rely on, Engineering innovation for decades, manufacturing products of superior quality, Experts in the manufacture of high-quality PU binders for rubber as well as rebonded foam,rebonded foam,PU paints. </p>
        </div>
    </div>
    </div>
  );
}

export default Carousel;
