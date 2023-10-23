import carouselPic1 from "../images/Carousel/1.jpeg";
import carouselPic2 from "../images/Carousel/2.jpg";
import mattressProdImg from "../images/Product_Images/Mattress/56101508SD05541_A1_546x307.jpg";
import puBinderProdImg from "../images/Product_Images/PU_binder/4001ISOR.webp";
import puPaintProdImg from "../images/Product_Images/PU_paint/plastiline-polyurethane-thmb.jpg";
import rebondedProdImg from "../images/Product_Images/Rebonded_Foam/2.png";
import resinProdImg from "../images/Product_Images/Resin/10670875475998.jpg";
import rubberBinderProdImg from "../images/Product_Images/Rubber_Binder/Screenshot 2023-10-14 at 6.58.30 PM.png";
import rebondedForm1 from '../images/Rebonded_Foam/1.png'
import rebondedForm2 from '../images/Rebonded_Foam/2.png'
import rubberBinder1 from '../images/Rubber_Binder/Screenshot 2023-10-14 at 6.58.14 PM.png'
import rubberBinder2 from '../images/Rubber_Binder/Screenshot 2023-10-14 at 6.58.30 PM.png'
import puBinder1 from '../images/PU_Binder/4001ISOR.webp'
import resinHardener1 from '../images/Resin_Hardner/10670875475998.jpg'
import resinHardener2 from '../images/Resin_Hardner/nylon-conveyor-roller.jpg'
import resinHardener3 from '../images/Resin_Hardner/wooden-handle-brush.jpg'
import puPaint1 from '../images/PU_Paint/epoxy-floor-painting-500x500.webp'
import puPaint2 from '../images/PU_Paint/plastiline-polyurethane-thmb.jpg'
import mattress1 from '../images/Mattress/56101508SD05541_A1_546x307.jpg'
import mattress2 from '../images/Mattress/nilkamal-bed-mattress.jpg'

export const whatsappContactNumber = "7506634450"
export const ProductCardsDetails = [
  {
    productName: "PU Rubber Binder",
    details: [
      `Single Component Product which acts as a glueing agent for rubber granules.`,
      `Manufactured with the best and pure raw materials.`,
      `Our recommendation:Use 8-10% binder with rubber granules. Eg. Add 8-10g for every 100g of rubber granules.`,
      `Supply Pan India.`,
      `Packaging- 50kg jerry cans, 225 kgs in steel drums.`,
      `End Applications:Manufacturing of rubber flooring which is used to prepare gym tiles, athletic tracks.`,
    ],
    productCardImage: rubberBinderProdImg,
    hasVideo: false,
    productImages: [rubberBinder1,rubberBinder2],
  },
  {
    productName: "PU Binder For Rebonded Foam",
    details: [
      `Single pack Application which acts as a glueing agent to manufacture rebonded foam.`,
      `Manufactured with the best and pure raw materials.`,
      `Our Recommendation: Use 10-12%% binder with Foam for best results. Eg. Add 20-22 kg for every 200 kg of foam Scrap.`,
      `Supply Pan India`,
      `Packaging: 225 kg in steel drums`,
      `End Application- Rebonded Foam which is used in the mattress industry`,
    ],
    productCardImage: puBinderProdImg,
    hasVideo: false,
    productImages: [puBinder1],
  },
  {
    productName: "Rebonded Foam",
    details: [
      `Produced with fresh PU scrap.`,
      `Best in class coverage between 35-45 Sq feet.`,
      `Cost Effective.`,
      `Best in class curing time.`,
      `PU Based Formula`,
      `Compatible with all construction materials from all types of paints, to bricks, RCC/PCC.`,
      `Available in packaging in 1,5,10kg`,
    ],
    productCardImage: rebondedProdImg,
    hasVideo: false,
    productImages: [rebondedForm1,rebondedForm2],
  },
  {
    productName: "Resin & Hardener for Rollers and Paint Brushes",
    details: [
      `2 Pack Solution which acts as a glueing agent for the paint bristles to its handles.`,
      `PU based solution.`,
      `Supply Pan India`,
      `Packaging- 1,5,10,20kg.`,
    ],
    productCardImage: resinProdImg,
    hasVideo: false,
    productImages: [resinHardener1,resinHardener2,resinHardener3],
  },
  {
    productName: "PU Paint",
    details: [
      `2 Pack solution`,
      `PU Floor Coating solutions for all commercial and industrial applications.`,
      `PU Floor Coating is mixed on-site and applied within a particular time frame. `,
      `easy to use and protects the base surface from heavy foot traffic and chemical impact.`,
      `Primer also available on demand`,
      `Supply Pan India.`,
    ],
    productCardImage: puPaintProdImg,
    hasVideo: false,
    productImages: [puPaint1,puPaint2],
  },
  {
    productName: "Mattresses",
    paragraph:
      "Asia Chemicals have launched a mattress line by the name of Cocoon Comfort and have been supplying PAN india as per our customers needs.",
    details: [
      `Fully Customizable mattress as per your requirement. Customizable as per your size requirements as well as as per your favoured materials`,
      `We either manufacture the products ourselves or procure materials from the best manufacturers who offer the best quality products`,
      `All mattress from latex, Spring, orthopaedics are available with us.`,
      `Freight charges may apply.`,
    ],
    productCardImage: mattressProdImg,
    hasVideo: false,
    productImages: [mattress1,mattress2],
  },
];

export const CarouselImages = [
  carouselPic1,
  carouselPic2,
  carouselPic1,
  carouselPic2,
  carouselPic1,
];

export const aboutUs = [
  {
    title: "About the company",
    points: [
      `Asia Chemicals Private Limited, with a remarkable legacy spanning over 75 years in the chemical industry.`,
      `We take pride in being the leading manufacturers of PU-based binders and Rebonded foam in India, supplying these essential components to the top mattress manufacturers nationwide. Our high-quality products are renowned for their durability and performance, making them a trusted choice in the industry.`,
      `With our expertise and experience in the chemical industry,we have pioneered a single-pack waterproofing solution designed for ease of use, cost-effectiveness, and, most importantly, unparalleled protection against water damage. Our commitment to product excellence drives us to create solutions that meet the evolving needs of our customers.`,
      `We believe in the relentless pursuit of excellence & satisfaction of our customers. We invest in research and development, striving to enhance our products and services continually. This dedication ensures that we are better equipped to serve our customers efficiently and effectively.`,
    ],
    id:'about',
    class:'section about-company'
  },
  {
    title: "Mision",
    paragraph:
      "To become one of the leading manufacturers in the PU industry by providing the highest quality products and services to our customers and keep on improving on our products to better serve our customers.",
      id:"mission",
      class:'section mission'
  },
  {
    title: "Vision",
    paragraph:
      "To Provide the best quality products and increase our reach in the underpenetrated market of our country.",
      id:"vision",
      class:`section vision`
  },
];
