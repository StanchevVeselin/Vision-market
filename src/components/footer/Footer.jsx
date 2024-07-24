// Footer.js
import './footer.css'; // Импорт на CSS стиловете

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <h3>Информация</h3>
            <ul>
              <li><a href="https://vision-shop.bg/about_us">За мен - Независим дистрибутор на Vision</a></li>
              <li><a href="https://vision-shop.bg/dostavka">Доставка</a></li>
              <li><a href="https://vision-shop.bg/poveritelnost">Декларация за поверителност</a></li>
              <li><a href="https://vision-shop.bg/uslovia-za-polzvane">Условия за ползване</a></li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h3>Полезни връзки</h3>
            <ul>
              <li><a href="https://vision-shop.bg/contact">Контакти</a></li>
              <li><a href="https://vision-shop.bg/sitemap">Карта на сайта</a></li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h3>Профил</h3>
            <ul>
              <li><a href="https://vision-shop.bg/account">Профил</a></li>
              <li><a href="https://vision-shop.bg/index.php?route=account/order">История на поръчките</a></li>
              <li><a href="https://vision-shop.bg/index.php?route=account/newsletter">Бюлетин</a></li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h3>Свържи се с нас</h3>
            <div className="foot-phone">
              <div className="fleft">
                <i className="fa fa-phone"></i>
              </div>
              <div className="extra-wrap">
                <div>0886 246 217</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div style={{ paddingLeft: '14px' }}>
            Този сайт е собственост на независимия дистрибутор на компания VISION International People Group Тонка Трендафилова. Информацията е получена от официалните сайтове: www.visionbulgaria.com, www.visionbalkan.com, и друга рекламна продукция на компания "Vision International People Group".
          </div>
        </div> */}
      </div>
      <div id="powered">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <a href="https://vision-shop.bg/">Vision-shop.bg</a> ©
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
