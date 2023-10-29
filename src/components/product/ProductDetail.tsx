import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import { ProductCardsDetails } from "../../helper/constant";
import './ProductDetail.css'
import whatsappIcon from '../../images/whatsappIcon.png'

function ProductDetail() {
  const param = useParams();
  const [productDetails, setProductDetails] = useState<any>();
  const [productImage,setProductImage] = useState<any>("")

  useEffect(() => {
    if (param?.id) {
      setProductDetails(
        ProductCardsDetails.filter((item) => item.id === Number(param.id))[0]
      );
    }
  }, [param]);


  return (
    <>
      <Header />
      <div className="pd-container">
        <div className="pd-product-details">
          <div className="pd-product-slider">
            <div className="pd-product-image">
              <img
                src={productImage ? productImage : productDetails?.productImages[0]}
                alt={productDetails?.productName}
                style={{width: productDetails?.id == 7 && (!productImage || productImage === productDetails?.productImages[0]) ?  "60%" :  "100%"}}
              />
            </div>
            <div className="pd-product-image-options">
              {productDetails?.productImages?.map((item: any,i:number) => {
                return (
                  <img
                    src={item}
                    alt={`${item}_${i}`}
                    key={`${item}_${i}`}
                    onClick={() => setProductImage(item)}
                  />
                );
              })}
            </div>
          </div>

          <div className="pd-product-description">
            <div className="pd-product-title">{productDetails?.productName}</div>
            {/* <div className="product-price">$19.99</div> */}
            {/* <div className="product-summary">
              This is a brief summary of the product. It can be a few lines
              long.
            </div> */}
            <div className="pd-product-features">
              <h4>Key Features :- </h4>
              <ul>
                {productDetails?.details?.map((item: string) => {
                  return (
                    <li key={item} className="pd-feature-li">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <button className="pd-buy-button">Contact Now</button>
          </div>
        </div>
      </div>
      <img src={whatsappIcon} alt='whatsappIcon' className='whatsapp-icon'/>
      <Footer />
    </>
  );
}

export default ProductDetail;
