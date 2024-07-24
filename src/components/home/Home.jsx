// import "./home.css"

// function Home() {
//     return (
//         <div className="section">
//         <div className="section__content">
//           <h2>Добре дошли в Vision-shop.bg</h2>
//           <p>ХРАНИТЕЛНИ ДОБАВКИ ВИЖЪН</p>
//           <p>Биологично активни добавки към храната за цялото семейство - за нея, за него и за децата. Доказани продукти за балансиране и подобряване на вашето здраве, за отличен тонус, самочувствие и красота.</p>
//           <p>БЪРЗИ ПОРЪЧКИ НА ТЕЛЕФОН: <a href="tel:0886246217">0886 246 217</a></p>
//         </div>
//         <img src="https://vision-shop.bg/image/cache/data/vision-shopping-1170x492.jpg" alt="Vision Shop" className="section__image" />
//       </div>
//     )
// }

// export default Home

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';
import geImage from './999.jpg';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Сменя се автоматично след 2 секунди
  };

  return (
    
      // <div className="section">
      //   <div className="section__content">
      //     <h2>Добре дошли в Vision-shop.bg</h2>
      //     <p className='p__1'>ХРАНИТЕЛНИ ДОБАВКИ ВИЖЪН</p>
      //     <p className='description'>Биологично активни добавки към храната за цялото семейство - за нея, за него и за децата. Доказани продукти за балансиране и подобряване на вашето здраве, за отличен тонус, самочувствие и красота.</p>
      //     <p>БЪРЗИ ПОРЪЧКИ НА ТЕЛЕФОН: <a href="tel:0886246217">0886 246 217</a></p>
      //   </div>
      //   <div className='home__image'>
      //       <img src="https://vision-shop.bg/image/cache/data/vision%20background-1170x492.jpg?1716912254084" alt="Vision Shop" />
      //   </div>
      // </div>

       <div className="section">
          
            <img src={geImage} className='homeImage' alt="Vision Shop" />
          
          <div className="wrapper">
              <h2>Добре дошли в Vision-Мarket</h2>
              <h6 className='p__1'>ХРАНИТЕЛНИ ДОБАВКИ </h6>
              <h4 className='description'>Хранителни добавки към храната за цялото семейство - за нея, за него и за децата. Доказани продукти за балансиране и подобряване на вашето здраве, за отличен тонус, самочувствие и красота.</h4>
              <h5>БЪРЗИ ПОРЪЧКИ НА ТЕЛЕФОН: <a href="tel:099 999 999">099 999 999</a></h5>
          </div>
      </div>
    
  )
}

export default Home;
