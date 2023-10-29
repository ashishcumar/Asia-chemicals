import { ProductCardsDetails } from "../../helper/constant";
import './ProductCards.css';

function ProductCards() {
  return (
    <div className="pc-product-ctn" id="product">
      <p className="pc-our-product"> Our Products </p>
      <div className="pc-card-ctn">
        {ProductCardsDetails.map((product, index) => {
          return (
            <div className="pc-product-card" key={index}>
              <div className="pc-product-image">
                <img src={product.productCardImage} alt={product.productName} id={`product_${product.id}`}/>
              </div>
              <div className="pc-product-title">{product.productName}</div>
              {/* <div className="product-description">This is a brief description of the product. It can be a few lines long.</div> */}
              <div className="pc-product-price">By Asia Chemicals</div>
              <button
                className="pc-buy-button"
                onClick={() => window.open(`/product/${product.id}`)}
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCards;
