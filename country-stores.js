





function getCountryName(url) {
	var parser = document.createElement('a');
  parser.href = url;
	var query = parser.search.substring(1);
  var countryName = query.split("=")[1];
  return countryName
};

async function storePage(){
  
  const time = new Date();
  const month = time.toLocaleString('default', { month: 'long'});
  const year = time.getFullYear();

  document.querySelector('meta[name="description"]').setAttribute("content", "Save online with AliExpress promo codes & coupons for "+ month+'-'+year);


  new ClipboardJS('.copy');
  const countryName = getCountryName(window.location.href)
  var coupons = []
  const response = await fetch("stores.json")
  const data = await response.json()
  coupons = data.filter(coupon => {
    return coupon.country.toLowerCase() === countryName.toLowerCase();
  })

  

  var allCpns = coupons.filter(data => data.type === 'coupon');
  console.log("only coupons", allCpns);
  var allDls = coupons.filter(data => data.type === 'deal');
  console.log("only deals", allDls);

  document.getElementById('country-name').textContent = countryName;

  if(countryName === 'germany'){
    
    document.querySelector('meta[name="keywords"]').setAttribute("content", "AliExpress, coupon, promo, coupon, voucher, discount, code, promotion, sale, deals, offers, rabatt, rabattcode, Gutschein, Gutscheine, neukunden, rabatt " + month+'-'+year);
    document.title = "Aliexpress Germany Coupons and Deals";
  }else if(countryName === 'france'){
    document.querySelector('meta[name="keywords"]').setAttribute("content", "AliExpress, coupon, promo, coupon, voucher, discount, code, promotion, sale, deals, offers, code promo, 2021, 2022, reduction, promotionnel, Remise, bon, reduc,  " + month+'-'+year);
    document.title = "Aliexpress France Coupons and Deals";
  }
  else if(countryName === 'spain'){
    document.querySelector('meta[name="keywords"]').setAttribute("content", "AliExpress, coupon, promo, coupon, voucher, discount, code, promotion, sale, deals, offers, codigo, codigos, promocional, hoy, promocionales, descuento, descuentos, ofertas, nuevo usuario, rebajas, para, primer pedido, envio gratis " + month+'-'+year);
    document.title = "Aliexpress Spain Coupons and Deals";
  }
  else if(countryName === 'brazil'){
    document.querySelector('meta[name="keywords"]').setAttribute("content", "AliExpress, coupon, promo, coupon, voucher, discount, code, promotion, sale, deals, offers, código, cupom, promocional, desconto, codigo, primeira, compra,cupon, nuevo usuario, ofertas" + month+'-'+year);
    document.title = "Aliexpress Brazil Coupons and Deals";
  }
  else if(countryName === 'netherlands'){
    document.querySelector('meta[name="keywords"]').setAttribute("content", "AliExpress, coupon, promo, coupon, voucher, discount, code, promotion, sale, deals, offers, kod, kortingscode, korting, promotiecode " + month+'-'+year);
    document.title = "Aliexpress Netherlands Coupons and Deals";
  }
  else if(countryName === 'poland'){
    document.querySelector('meta[name="keywords"]').setAttribute("content", "AliExpress, coupon, promo, coupon, voucher, discount, code, promotion, sale, deals, offers, Kod, Kupon, Kod, promocyjny, Promocja, Znizka, Kod, rabatowy " + month+'-'+year);
    document.title = "Aliexpress Poland Coupons and Deals";
  }
  else if(countryName === 'italy'){
    document.querySelector('meta[name="keywords"]').setAttribute("content", "AliExpress, coupon, promo, coupon, voucher, discount, code, promotion, sale, deals, offers, codice, sconto, buono, promozionale " + month+'-'+year);
    document.title = "Aliexpress Italy Coupons and Deals";
  }
  else if(countryName === 'mexico'){
    document.querySelector('meta[name="keywords"]').setAttribute("content", "AliExpress, coupon, promo, coupon, voucher, discount, code, promotion, sale, deals, offers, codigo, codigos, promocional, hoy, promocionales, descuento, descuentos, ofertas, nuevo usuario, rebajas, para, primer pedido, envio gratis" + month+'-'+year);
    document.title = "Aliexpress Mexico Coupons and Deals";
  }
  else{
    document.querySelector('meta[name="keywords"]').setAttribute("content", "AliExpress, coupon, promo, coupon, voucher, discount, code, promotion, sale, deals, offers, код купона, kod, kupona, промокод, promokod, код, скидка, skidka " + month+'-'+year);
    document.title = "Aliexpress Russia Coupons and Deals";
  }


  for(let i=0; i<allCpns.length; i++){
    document.querySelector('.allCoupons').innerHTML += `
    <div class="coupon-card">
    <div class="img-card-img">
        <h4>${allCpns[i].discount}</h4>
    </div>
    <div class="coupons-details">
        <p class="coupon-info coupon-title">${allCpns[i].title}</p>
        <div class="star-rating store-stars mt-1 mb-1">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
        </div>
        <p style="font-size: 12px; color: rgb(95, 94, 94); height: inherit;">${allCpns[i].uses}</p>
        <div class="button-code store-code-btn-res">
            <h6 class="couponCode">${allCpns[i].code}</h6>
  
            <div class="peel-btn">
                <a href="${allCpns[i].actionUrl}" target="_blank">
                    <button class="get-code" id="${allCpns[i].id}" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Code</button>
                </a>
            </div>
        </div>
        
  
        
    </div>
    <div class="button-code store-code-btn-desk">
        <h6 class="couponCode">${allCpns[i].code}</h6>
  
        <div class="peel-btn">
            <a href="${allCpns[i].actionUrl}" target="_blank">
                <button class="get-code" id="${allCpns[i].btnId}" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Code</button>
            </a>
        </div>
    </div>
  </div>
    `;

	
      
  
  };

  for(let i=0; i<allDls.length; i++){
    document.querySelector('.allCoupons').innerHTML += `
    <div class="deal-card">
    <div class="img-card-img deal-img-card">
      <h4>${allDls[i].discount}</h4>
    </div>
    <div class="coupons-details">
        <p class="coupon-info coupon-title">${allDls[i].title}</p>
        <div class="star-rating store-stars mt-1 mb-1">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
        </div>
        <p style="font-size: 12px; color: rgb(95, 94, 94); height: inherit;">${allDls[i].uses}</p>
        <a href="${allDls[i].actionUrl}" target="_blank" class="get-deal-res">
            <button class="get-deal">Get Deal</button>
        </a>
  
        
    </div>
    <a href="${allDls[i].actionUrl}" target="_blank" class="get-deal-desk">
        <button class="get-deal">Get Deal</button>
    </a>
  </div>
    `;
  
  };
  
  
  var idArr = allCpns.map(a => a.btnId);
  var btnIdArr = allCpns.map(a => a.id);
    for(let i=0; i<idArr.length; i++){
      document.getElementById(idArr[i]).addEventListener('click', function(){
        document.querySelector('.modal-body').innerHTML = `
        <img src="images/aliexpress.webp" alt="store-logo">
        <h6 class="mt-3 mb-3">${allCpns[i].title}</h6>
        <div class="copy-code">
            <span class="modal-code" id="modalCode">${allCpns[i].code}</span>
            <button class="copy" data-clipboard-target="#modalCode">Copy</button>
        </div>
        <p class="mt-2 mb-2">${allCpns[i].modalInfo}</p>
        <a href="#">
            <button class="store">Visit Store</button>
        </a>
        `
      });
    }
    for(let i=0; i<btnIdArr.length; i++){
      document.getElementById(btnIdArr[i]).addEventListener('click', function(){
        document.querySelector('.modal-body').innerHTML = `
        <img src="images/aliexpress.webp" alt="store-logo">
        <h6 class="mt-3 mb-3">${allCpns[i].title}</h6>
        <div class="copy-code">
            <span class="modal-code" id="modalCode">${allCpns[i].code}</span>
            <button class="copy" data-clipboard-target="#modalCode">Copy</button>
        </div>
        <p class="mt-2 mb-2">${allCpns[i].modalInfo}</p>
        <a href="#">
            <button class="store">Visit Store</button>
        </a>
        `
      });
    }

  const tabsArr = ["deals-tab", "coupons-tab", "all-tab", "expired-tab"];

  const tabs = document.getElementsByClassName('tab-link');
  for(let i=0; i<tabs.length; i++){
    tabs[i].addEventListener('click', function(){
        var current = document.getElementsByClassName('active-tab');
        current[0].className = current[0].className.replace(" active-tab", "");
        this.className += " active-tab";
  });




  const couponCards = document.querySelectorAll('.coupon-card');
  const noOfCoupons = couponCards.length;
  const dealCards = document.querySelectorAll('.deal-card');
  const noOfDeals = dealCards.length;


  document.querySelector('.active-deals').innerHTML = `Active Deals: <span class="activeDeals">${noOfDeals}</span>`;
  document.querySelector('.active-coupons').innerHTML = `Active Coupons: <span class="activeCoupons">${noOfCoupons}</span>`;

  document.querySelector('.all').textContent = noOfCoupons+noOfDeals;
  document.querySelector('.coupons').textContent = noOfCoupons;
  document.querySelector('.deals').textContent = noOfDeals;

  tabsArr.forEach(element => {
      if(element === "all-tab"){
        document.getElementById('all-tab').addEventListener('click', showAll);
        function showAll(){
          couponCards.forEach(el => {
            el.style.display = "flex";
          });
          dealCards.forEach(elem => {
            elem.style.display = "flex";
          });
        }
      }else if(element === "deals-tab"){
        document.getElementById('deals-tab').addEventListener('click', showDeals);
        function showDeals(){
          couponCards.forEach(ele => {
            ele.style.display = "none";
          });
          dealCards.forEach(ele => {
            ele.style.display = "flex";
          });
        }
      }else if(element === "coupons-tab"){
        document.getElementById('coupons-tab').addEventListener('click', showDeals);
        function showDeals(){
          dealCards.forEach(ele => {
            ele.style.display = "none";
          });
          couponCards.forEach(ele => {
            ele.style.display = "flex";
          });
        }
      }else if(element === "expired-tab"){
        document.getElementById('expired-tab').addEventListener('click', showExpired);
        function showExpired(){
          dealCards.forEach(ele => {
            ele.style.display = "none";
          });
          couponCards.forEach(ele => {
            ele.style.display = "none";
          });
        }
      }
    });
  }




}


// first page  => countries = germany, france, USA
// aliexpress.html?country=germany
// aliexpress.html?country=france
// onload="storePage()"
// var country = getCountry(window.location.href)
//










