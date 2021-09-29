const time = new Date();
const month = time.toLocaleString('default', { month: 'long'});
const year = time.getFullYear();
new ClipboardJS('.copy');
const allCoupons = [

  {
    id: "Aliexpressm1",
    discount: "30% OFF",
    title: "Save 30% Off w/ Promo Code",
    expiry: "Expires on 31-12-2021",
    code: "BRTOPDEAL3",
    modalInfo: "Use this Coupon to Save 30% Off w/ Promo Code",
    buttonId: "alim1",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "alim2",
    uses: "463 uses today"
  },
  {
    id: "Aliexpressm2",
    discount: "75% OFF",
    title: "Save 75% Off",
    expiry: "Expires on 31-12-2021",
    code: "HU5WKCA64OM9",
    modalInfo: "Use this Coupon to Save 75% Off",
    buttonId: "alim3",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "alim4",
    uses: "463 uses today"
  },
  {
    id: "Aliexpressm3",
    discount: "$11 OFF",
    title: "Take $11 Off on Purchase Worth $90 or More",
    expiry: "Expires on 31-12-2021",
    code: "8AESELETED11",
    modalInfo: "Use this Coupon to Take $11 Off",
    buttonId: "alim5",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "alim6",
    uses: "463 uses today"
  },
  {
    id: "Aliexpressm4",
    discount: "$19 OFF",
    title: "Take $19 Off",
    expiry: "Expires on 31-12-2021",
    code: "8AESELETED19",
    modalInfo: "Use this Coupon to Take $19 Off",
    buttonId: "alim7",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "alim8",
    uses: "463 uses today"
  },
  {
    id: "Aliexpressm5",
    discount: "$4 OFF",
    title: "Take $4 Off with Code",
    expiry: "Expires on 31-12-2021",
    code: "SMR12",
    modalInfo: "Use this Coupon to Take $4 Off",
    buttonId: "alim9",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "alim10",
    uses: "463 uses today"
  },
  {
    id: "Aliexpressm6",
    discount: "$3 OFF",
    title: "New Customers: Save $3 on Orders of $4 or More!",
    expiry: "Expires on 31-12-2021",
    code: "NB3",
    modalInfo: "Use this Coupon to Take $3 Off",
    buttonId: "alim11",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "alim12",
    uses: "463 uses today"
  },
  {
    id: "Aliexpressm7",
    discount: "$6 OFF",
    title: "Take $6 Off using Coupon Code",
    expiry: "Expires on 31-12-2021",
    code: "8AESELETED6",
    modalInfo: "Use this Coupon to Take $6 Off",
    buttonId: "alim13",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "alim14",
    uses: "463 uses today"
  },
  {
    id: "Aliexpressm8",
    discount: "$4 OFF",
    title: "Take $4 Off w/ Coupon Code",
    expiry: "Expires on 31-12-2021",
    code: "SUP4",
    modalInfo: "Use this Coupon to Take $4 Off",
    buttonId: "alim15",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "alim16",
    uses: "463 uses today"
  },
  {
    id: "Aliexpressm9",
    discount: "$4 OFF",
    title: "Take $4 Off w/ Coupon Code",
    expiry: "Expires on 31-12-2021",
    code: "ZW55",
    modalInfo: "Use this Coupon to Take $4 Off",
    buttonId: "alim17",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "alim18",
    uses: "463 uses today"
  },
  {
    id: "Aliexpressm10",
    discount: "$4 OFF",
    title: "Take $4 Off w/ Coupon Code",
    expiry: "Expires on 31-12-2021",
    code: "RQMY",
    modalInfo: "Use this Coupon to Take $4 Off",
    buttonId: "alim19",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "alim20",
    uses: "463 uses today"
  },
  {
    id: "Aliexpressm11",
    discount: "$14 OFF",
    title: "$14 Off $120+ Order On This Page",
    expiry: "Expires on 31-12-2021",
    code: "8AESELETED14",
    modalInfo: "Use this Coupon to Take $14 Off",
    buttonId: "alim21",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "alim22",
    uses: "463 uses today"
  },
  {
    id: "Aliexpress021",
    discount: "$3 OFF",
    title: "$3 OFF $4(Korea New Buyers Code)",
    expiry: "Expires on 02-09-2021",
    code: "KRQ1NB3",
    modalInfo: "Use this Coupon to get $4 Off",
    buttonId: "kr21",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "kr22",
    uses: "732 uses today"
  },
  {
    id: "Aliexpress022",
    discount: "$2 OFF",
    title: "$2 OFF $3(Italy New Buyers Code)",
    expiry: "Expires on 02-09-2021",
    code: "ITQ1NB2",
    modalInfo: "Use this Coupon to get $2 Off",
    buttonId: "it21",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "it22",
    uses: "732 uses today"
  },
  {
    id: "Aliexpress023",
    discount: "$3 OFF",
    title: "$3 OFF $4(Poland New Buyers Code)",
    expiry: "Expires on 02-09-2021",
    code: "PLQ1NB3",
    modalInfo: "Use this Coupon to get $3 Off",
    buttonId: "p21",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "p22",
    uses: "732 uses today"
  },
  {
    id: "Aliexpress023poland",
    discount: "$3 OFF",
    title: "$3 OFF $4(Poland New Buyers Code)",
    expiry: "Expires on 31-12-2021",
    code: "ZAGROSZE4",
    modalInfo: "Use this Coupon to get $3 Off",
    buttonId: "po21",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "po22",
    uses: "732 uses today"
  },
  {
    id: "Aliexpress024",
    discount: "€5 OFF",
    title: "€5 OFF €10(Spain New Buyers Code)",
    expiry: "Expires on 02-09-2021",
    code: "ESQ1NB5",
    modalInfo: "Use this Coupon to get €5 Off",
    buttonId: "s21",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "s22",
    uses: "732 uses today"
  },
  {
    id: "Aliexpress025",
    discount: "€3 OFF",
    title: "€3 OFF €4(Spain New Buyers Code)",
    expiry: "Expires on 02-09-2021",
    code: "ESQ1NB3",
    modalInfo: "Use this Coupon to get €3 Off",
    buttonId: "s23",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "s24",
    uses: "732 uses today"
  },
  {
    id: "Aliexpress026",
    discount: "€3 OFF",
    title: "€3 OFF €4(France New Buyers Code)",
    expiry: "Expires on 02-09-2021",
    code: "FRQ1NB3",
    modalInfo: "Use this Coupon to get €3 Off",
    buttonId: "fr23",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "fr24",
    uses: "732 uses today"
  },
  {
    id: "Aliexpress027",
    discount: "€5 OFF",
    title: "€5 OFF €10(France New Buyers Code)",
    expiry: "Expires on 02-09-2021",
    code: "FRQ1NB5",
    modalInfo: "Use this Coupon to get €5 Off",
    buttonId: "fr25",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "fr26",
    uses: "732 uses today"
  },
  {
    id: "Aliexpresspain06",
    discount: "€8 OFF",
    title: "€8 OFF €20(Spain New Buyers Code)",
    expiry: "Expires on 02-09-2021",
    code: "ESNEW8",
    modalInfo: "Use this Coupon to get €8 Off",
    buttonId: "spain25",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "spain26",
    uses: "732 uses today"
  },
  {
    id: "Aliexpresfrance6sep",
    discount: "€6 OFF",
    title: "€6 OFF €60(France New Buyers Code)",
    expiry: "Expires on 02-09-2021",
    code: "FRSEP06",
    modalInfo: "Use this Coupon to get €6 Off",
    buttonId: "sep6",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "sep7",
    uses: "732 uses today"
  },
  {
    id: "Aliexpresfrance7sep",
    discount: "€10 OFF",
    title: "€10 OFF €100(France New Buyers Code)",
    expiry: "Expires on 02-09-2021",
    code: "FRSEP10",
    modalInfo: "Use this Coupon to get €10 Off",
    buttonId: "sep8",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "sep9",
    uses: "732 uses today"
  },
  {
    id: "Aliexpresfrance8sep",
    discount: "€15 OFF",
    title: "€15 OFF €150(France New Buyers Code)",
    expiry: "Expires on 02-09-2021",
    code: "FRSEP15",
    modalInfo: "Use this Coupon to get €15 Off",
    buttonId: "sep10",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "sep11",
    uses: "732 uses today"
  },
  {
    id: "Aliexpresfrance9sep",
    discount: "€20 OFF",
    title: "€20 OFF €199(France New Buyers Code)",
    expiry: "Expires on 02-09-2021",
    code: "FRSEP20",
    modalInfo: "Use this Coupon to get €20 Off",
    buttonId: "sep12",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "sep13",
    uses: "732 uses today"
  },
  {
    id: "Aliexpresfrance10sep",
    discount: "€30 OFF",
    title: "€30 OFF €299(France New Buyers Code)",
    expiry: "Expires on 02-09-2021",
    code: "FRSEP30",
    modalInfo: "Use this Coupon to get €30 Off",
    buttonId: "sep14",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "sep15",
    uses: "732 uses today"
  },
  {
    id: "Aliexpresfrance11sep",
    discount: "€8 OFF",
    title: "€8 OFF €20(France New Buyers Code)",
    expiry: "Expires on 02-09-2021",
    code: "AENEW8",
    modalInfo: "Use this Coupon to get €8 Off",
    buttonId: "sep16",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "sep17",
    uses: "732 uses today"
  },
  {
    id: "Aliexpress023poland",
    discount: "$3 OFF",
    title: "$3 OFF $4(Poland New Buyers Code)",
    expiry: "Expires on 31-12-2021",
    code: "ZAGROSZE4",
    modalInfo: "Use this Coupon to get $3 Off",
    buttonId: "po21",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "po22",
    uses: "732 uses today"
  },
  {
    id: "Aliexpress017",
    discount: "$4 OFF",
    title: "$4 Off Any Order",
    expiry: "Expires on 31-12-2021",
    code: "WA22",
    modalInfo: "Use this Coupon to get $4 Off Any Order",
    buttonId: "1522",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "qq",
    uses: "552 uses today"
  },
  {
    id: "Aliexpress018",
    discount: "$5 OFF",
    title: "$5 Off Any Order",
    expiry: "Expires on 31-12-2021",
    code: "ALI567",
    modalInfo: "Use this Coupon to get $5 Off Any Order",
    buttonId: "1523",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "mm",
    uses: "463 uses today"
  },
  {
    id: "Aliexpress019",
    discount: "$5 OFF",
    title: "$5 Off First order",
    expiry: "Expires on 31-12-2021",
    code: "ALIMINUS162",
    modalInfo: "Use this Coupon to get $5 Off First order",
    buttonId: "1524",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "tt",
    uses: "485 uses today"
  },
  {
    id: "Aliexpress020",
    discount: "$4 OFF",
    title: "$4 Off Any Order",
    expiry: "Expires on 31-12-2021",
    code: "SUB4AE888",
    modalInfo: "Use this Coupon to get $4 Off Any order",
    buttonId: "sub",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "sub1",
    uses: "485 uses today"
  },
  
  
  
  {
    id: "Aliexpress004",
    discount: "$4 OFF",
    title: "$4 Off Sitewide",
    expiry: "Expires on 31-12-2021",
    code: "ALIYOUTUBE1",
    modalInfo: "Use this Coupon to get $4 Off Sitewide",
    buttonId: "3",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "d",
    uses: "745 uses today"
  },
  

  {
    id: "Aliexpress006",
    discount: "$5 OFF",
    title: "$5 Off Sitewide",
    expiry: "Expires on 31-12-2021",
    code: "ALI675",
    modalInfo: "Use this Coupon to get Up to $5 Off sitewide",
    buttonId: "5",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "f",
    uses: "458 uses today"
  },
  {
    id: "Aliexpress007",
    discount: "$4 OFF",
    title: "$4 Off Any Order",
    expiry: "Expires on 31-12-2021",
    code: "SUB4AE607",
    modalInfo: "Use this Coupon to get $4 Off on any order",
    buttonId: "6",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "g",
    uses: "857 uses today"
  },
  {
    id: "Aliexpress008",
    discount: "$4 OFF",
    title: "$4 Off Any Order",
    expiry: "Expires on 31-12-2021",
    code: "SUB4AE609",
    modalInfo: "Use this Coupon to get $4 Off on any order",
    buttonId: "7",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "h",
    uses: "732 uses today"
  }
  
  
        
        
]
const allDeals = [
  {
    discount: "$4 Off",
    expiry: "31-12-2021",
    title: "New Customers - Up To $4 In Coupons When You Join AliExpress",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Outdoor Apparel and Gear",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Home Improvement and Tools",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Home Decor",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Sale Items",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "60% OFF",
    expiry: "31-12-2021",
    title: "Up To 60% Off Dolls",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "HOT DEAL",
    expiry: "31-12-2021",
    title: "Latest Discounts From Aliexpress",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "HOT DEAL",
    expiry: "31-12-2021",
    title: "Exclusive Savings",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
      
]


var buttonId = allCoupons.map(a => a.id);

    for(let i=0; i < 8; i++) {
        document.querySelector('.home-coupons').innerHTML += `
        <div class="col-md-3">
        <div class="img-div">
          <img src="images/aliexpress.webp" alt="store">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <div class="coupon-content">
         <div class="star-rating mt-1 mb-1">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-half-o" aria-hidden="true"></i>
         </div>
         <p class="coupon-info">${allCoupons[i].title}</p>
          <div class="button-code">
            <h6 class="couponCode">${allCoupons[i].code}</h6>
    
              <div class="peel-btn">
                <a href="${allCoupons[i].actionUrl}" target="_blank">
                  <button class="get-code" id="${allCoupons[i].id}" data-bs-toggle="modal" data-bs-target="#exampleModal" >Get Code</button>
                </a>
              </div>
          </div>
        </div>
    
    
      </div>
        `;
    
    };



for(let i=0; i<8; i++){
    document.querySelector('.home-deals').innerHTML += `
    <div class="col-md-3">
    <div class="img-div deal-img-div">
        <img src="images/aliexpress.webp" alt="store">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </div>
    <div class="coupon-content">
        <div class="star-rating mt-1 mb-1">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-half-o" aria-hidden="true"></i>
        </div>
        <p class="coupon-info">${allDeals[i].title}</p>
        <a href="${allDeals[i].actionUrl}" target="_blank">
        <button class="get-deal">Get Deal</button>
        </a>
    </div>


    </div>
    `;
};


for(let i=0; i<buttonId.length; i++){
    document.getElementById(buttonId[i]).addEventListener('click', showModal);
    function showModal(){
      document.querySelector('.modal-body').innerHTML = `
      <img src="images/aliexpress.webp" alt="store-logo">
      <h6 class="mt-3 mb-3">${allCoupons[i].title}</h6>
      <div class="copy-code">
          <span class="modal-code" id="modalCode">${allCoupons[i].code}</span>
          <button class="copy" data-clipboard-target="#modalCode">Copy</button>
      </div>
      <p class="mt-2 mb-2">${allCoupons[i].modalInfo}</p>
  
      <a href="#">
          <button class="store">Visit Store</button>
      </a>
      `;


    };

    
  }









    
