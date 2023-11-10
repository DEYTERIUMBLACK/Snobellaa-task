import {
    getAll,
    deleteByID,
    patchByID,
    getByID,
    post,
    putByID,
  } from "./myrequest.js";


  let row = document.querySelector(".myrow") ;

  let search = document.getElementById('search') ;

  let search2 = document.getElementById('search2') ;

 


  let carts = await getAll() ;

  myFunction() ;

  function myFunction(){

    

    console.log(carts)

   carts.forEach((cart) => {

    // console.log(cart)

    row.innerHTML +=`
    
  
    <div class="cart col-6">             
    <div class="cart-img-box">
        <div class="cart-img-items d-flex justify-content-between">
            <div class="discount d-flex text-center align-items-center justify-content-center">
                <span class="m-auto">30%</span>
            </div>
            <div class="like">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.9997 19.25L9.67051 18.0631C4.94967 13.8639 1.83301 11.0944 1.83301 7.6955C1.83301 4.92602 4.05134 2.75 6.87467 2.75C8.46967 2.75 10.0005 3.47834 10.9997 4.62929C11.9988 3.47834 13.5297 2.75 15.1247 2.75C17.948 2.75 20.1663 4.92602 20.1663 7.6955C20.1663 11.0944 17.0497 13.8639 12.3288 18.0721L10.9997 19.25Z"
                        stroke="#DF4244" stroke-width="2" stroke-linecap="square" />
                </svg>
            </div>
        </div>
        <div class="cart-img justify-content-center m-auto d-flex">
            <img src="${cart.img}"
                alt="">
    </div>
    </div>
    <div class="cart-text-content d-flex flex-column justify-content-center container">
        <p class="desc">${cart.name}</p>
        <div class="price">
            <span class="new-price">$130.00</span>
            <span class="old-price">From $ ${cart.price}</span>
        </div>
        <button class="add-to-card d-flex justify-content-center align-self-center align-items-center ">
            <span>Add to card</span>
        </button>
    </div>

  
    
    `


   });

  }




  search.addEventListener("keyup", (e) => {
    axios
      .get("https://654baec75b38a59f28ef8700.mockapi.io/products")
      .then((response) => {
        row.innerHTML = '';
        const searchedData = response.data.filter((x) =>
          x.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim())
        );
  
        if (searchedData.length === 0) {
          row.innerHTML = '<h1 class="text-danger text-center mt-5 fw-bold">DATA DOES NOT EXIST!</h1>';
        } else {
          searchedData.forEach((cart) => {
            row.innerHTML += `
            <div class="cart col-6">             
            <div class="cart-img-box">
                <div class="cart-img-items d-flex justify-content-between">
                    <div class="discount d-flex text-center align-items-center justify-content-center">
                        <span class="m-auto">30%</span>
                    </div>
                    <div class="like">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="favIcon empty-heart">
                            <path
                                d="M10.9997 19.25L9.67051 18.0631C4.94967 13.8639 1.83301 11.0944 1.83301 7.6955C1.83301 4.92602 4.05134 2.75 6.87467 2.75C8.46967 2.75 10.0005 3.47834 10.9997 4.62929C11.9988 3.47834 13.5297 2.75 15.1247 2.75C17.948 2.75 20.1663 4.92602 20.1663 7.6955C20.1663 11.0944 17.0497 13.8639 12.3288 18.0721L10.9997 19.25Z"
                                stroke="#DF4244" stroke-width="2" stroke-linecap="square" />
                        </svg>
                    </div>
                </div>
                <div class="cart-img justify-content-center m-auto d-flex">
                    <img src="${cart.img}"
                        alt="">
            </div>
            </div>
            <div class="cart-text-content d-flex flex-column justify-content-center container">
                <p class="desc">${cart.name}</p>
                <div class="price">
                    <span class="new-price">$130.00</span>
                    <span class="old-price">From $ ${cart.price}</span>
                </div>
                <button class="add-to-card d-flex justify-content-center align-self-center align-items-center ">
                    <span>Add to card</span>
                </button>
            </div>
            `;
          });
        }
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  });


  search2.addEventListener("keyup", (e) => {
    axios
      .get("https://654baec75b38a59f28ef8700.mockapi.io/products")
      .then((response) => {
        row.innerHTML = '';
        const searchedData = response.data.filter((x) =>
          x.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim())
        );
  
        if (searchedData.length === 0) {
          row.innerHTML = '<h1 class="text-danger text-center mt-5 fw-bold">DATA DOES NOT EXIST!</h1>';
        } else {
          searchedData.forEach((cart) => {
            row.innerHTML += `
            <div class="cart col-6">             
            <div class="cart-img-box">
                <div class="cart-img-items d-flex justify-content-between">
                    <div class="discount d-flex text-center align-items-center justify-content-center">
                        <span class="m-auto">30%</span>
                    </div>
                    <div class="like">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="favIcon empty-heart">
                            <path
                                d="M10.9997 19.25L9.67051 18.0631C4.94967 13.8639 1.83301 11.0944 1.83301 7.6955C1.83301 4.92602 4.05134 2.75 6.87467 2.75C8.46967 2.75 10.0005 3.47834 10.9997 4.62929C11.9988 3.47834 13.5297 2.75 15.1247 2.75C17.948 2.75 20.1663 4.92602 20.1663 7.6955C20.1663 11.0944 17.0497 13.8639 12.3288 18.0721L10.9997 19.25Z"
                                stroke="#DF4244" stroke-width="2" stroke-linecap="square" />
                        </svg>
                    </div>
                </div>
                <div class="cart-img justify-content-center m-auto d-flex">
                    <img src="${cart.img}"
                        alt="">
            </div>
            </div>
            <div class="cart-text-content d-flex flex-column justify-content-center container">
                <p class="desc">${cart.name}</p>
                <div class="price">
                    <span class="new-price">$130.00</span>
                    <span class="old-price">From $ ${cart.price}</span>
                </div>
                <button class="add-to-card d-flex justify-content-center align-self-center align-items-center ">
                    <span>Add to card</span>
                </button>
            </div>
            `;
          });
        }
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  });



  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}






let favIcons = document.querySelectorAll('.favIcon') ;

let arr = [] ;

let localFavArr = JSON.parse(localStorage.getItem('fav')) ;

if(localFavArr){

  arr = localFavArr ;
}

// console.log(favIcons) ;


for(let icon of favIcons) {

  

  icon.addEventListener('click' , function() {

    if(this.className.includes("empty-heart")) {

      
        row.innerHTML += `
            <div class="cart col-6">             
            <div class="cart-img-box">
                <div class="cart-img-items d-flex justify-content-between">
                    <div class="discount d-flex text-center align-items-center justify-content-center">
                        <span class="m-auto">30%</span>
                    </div>
                    <div class="like">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" class="favIcon full-heart">
                    <path d="M11.0002 19.25L9.671 18.0631C4.95016 13.8639 1.8335 11.0944 1.8335 7.6955C1.8335 4.92602 4.05183 2.75 6.87516 2.75C8.47016 2.75 10.001 3.47834 11.0002 4.62929C11.9993 3.47834 13.5302 2.75 15.1252 2.75C17.9485 2.75 20.1668 4.92602 20.1668 7.6955C20.1668 11.0944 17.0502 13.8639 12.3293 18.0721L11.0002 19.25Z" fill="#DF4244" stroke="#DF4244" stroke-width="2" stroke-linecap="square"/>
                    </svg>
                    </div>
                </div>
                <div class="cart-img justify-content-center m-auto d-flex">
                    <img src="${cart.img}"
                        alt="">
            </div>
            </div>
            <div class="cart-text-content d-flex flex-column justify-content-center container">
                <p class="desc">${cart.name}</p>
                <div class="price">
                    <span class="new-price">$130.00</span>
                    <span class="old-price">From $ ${cart.price}</span>
                </div>
                <button class="add-to-card d-flex justify-content-center align-self-center align-items-center ">
                    <span>Add to card</span>
                </button>
            </div>
            `;

    // console.log(arr)

    localStorage.setItem('fav', JSON.stringify(arr)) ;

      this.classList.remove("empty-heart") ;
      this.classList.add("full-heart") ;

    } else{

      this.classList.remove("full-heart") ;
      this.classList.add("empty-heart") ;

      arr = arr.filter((element) => element.id != this.getAttribute('name')) ;

      localStorage.setItem('fav', JSON.stringify(arr)) ;
      
    }

  })
}


const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");
const searchForPriceButton = document.getElementById("searchForPrice");

searchForPriceButton.addEventListener("click", () => {
  const minPrice = parseFloat(minPriceInput.value);
  const maxPrice = parseFloat(maxPriceInput.value);

  const filteredProducts = carts.filter((product) => {
    const productPrice = parseFloat(product.price);
    return productPrice >= minPrice && productPrice <= maxPrice;
  });

  displayFilteredProducts(filteredProducts);
});

function displayFilteredProducts(filteredProducts) {
 
  row.innerHTML = ""; 

  if (filteredProducts.length === 0) {
    row.innerHTML = '<h1 class="text-danger text-center mt-5 fw-bold">NO PRODUCTS MATCH THE CRITERIA</h1>';
  } else {
    filteredProducts.forEach((product) => {
        row.innerHTML += `
        <div class="cart col-6">             
        <div class="cart-img-box">
            <div class="cart-img-items d-flex justify-content-between">
                <div class="discount d-flex text-center align-items-center justify-content-center">
                    <span class="m-auto">30%</span>
                </div>
                <div class="like">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" class="favIcon full-heart">
                <path d="M11.0002 19.25L9.671 18.0631C4.95016 13.8639 1.8335 11.0944 1.8335 7.6955C1.8335 4.92602 4.05183 2.75 6.87516 2.75C8.47016 2.75 10.001 3.47834 11.0002 4.62929C11.9993 3.47834 13.5302 2.75 15.1252 2.75C17.9485 2.75 20.1668 4.92602 20.1668 7.6955C20.1668 11.0944 17.0502 13.8639 12.3293 18.0721L11.0002 19.25Z" fill="#DF4244" stroke="#DF4244" stroke-width="2" stroke-linecap="square"/>
                </svg>
                </div>
            </div>
            <div class="cart-img justify-content-center m-auto d-flex">
                <img src="${cart.img}"
                    alt="">
        </div>
        </div>
        <div class="cart-text-content d-flex flex-column justify-content-center container">
            <p class="desc">${cart.name}</p>
            <div class="price">
                <span class="new-price">$130.00</span>
                <span class="old-price">From $ ${cart.price}</span>
            </div>
            <button class="add-to-card d-flex justify-content-center align-self-center align-items-center ">
                <span>Add to card</span>
            </button>
        </div>
        `;
    });
  }
}







  




