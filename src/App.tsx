import { Grid } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import ProductCards from './components/product/ProductCards';
import Footer from './components/footer/Footer';
import whatsappIcon from './images/whatsappIcon.png'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import GetInTouch from './components/getInTouch/GetInTouch';


function App() {
  const [searchParams,setSearchParams] = useSearchParams();

  function handleClickScroll(value: string) {
    setTimeout(() => {
      const element = document.getElementById(value);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  }

  useEffect(() => {
    if(searchParams.get("products")){
      handleClickScroll("product")
      searchParams.delete('products')
      setSearchParams(searchParams);
    }

  },[searchParams.get("products")])

  return (
    <Grid className='app-ctn'>
       <Header />
       <Carousel />
       <ProductCards />
       <GetInTouch />
       <Footer />
       <img src={whatsappIcon} alt='whatsappIcon' className='whatsapp-icon'/>
    </Grid>
  );
}

export default App;
