import {
    getAll,
    deleteByID,
    patchByID,
    getByID,
    post,
    putByID,
} from "./myrequest.js";

let featured = document.querySelector("#featured-carts") 
let newcards = document.querySelector("#new-carts")
let bags = await getAll()
bags.forEach(function(bag) {
    console.log(bag.isfeatured);
    if (bag.isfeatured===true) {
    featured.innerHTML+=`<div class="cart col-6">             
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
            <img src="${bag.img}"
                alt="">
    </div>
    </div>
    <div class="cart-text-content d-flex flex-column justify-content-center container">
        <p class="desc">${bag.name}</p>
        <div class="price">
            <span class="new-price">$130.00</span>
            <span class="old-price">From $ ${bag.price}</span>
        </div>
        <button class="add-to-card d-flex justify-content-center align-self-center align-items-center ">
            <span>Add to card</span>
        </button>
    </div>

    `
    }
    else if (bag.isnew === true) {
        newcards.innerHTML +=
        `
        <div class="cart col-6">             
    <div class="cart-img-box">
        <div class="cart-img-items d-flex justify-content-between">
        <div class="new d-flex text-center align-items-center justify-content-center">
        <span class="m-auto">New</span>
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
            <img src="${bag.img}"
                alt="">
    </div>
    </div>
    <div class="cart-text-content d-flex flex-column justify-content-center container">
        <p class="desc">${bag.name}</p>
        <div class="price">
            <span class="new-price">$130.00</span>
            <span class="old-price">From $ ${bag.price}</span>
        </div>
        <button class="add-to-card d-flex justify-content-center align-self-center align-items-center ">
            <span>Add to card</span>
        </button>
    </div>
        `
        
    }
    
});
// let salam = document.querySelector("#salam")
// salam.addEventListener("click",async function () {
//     console.log(this);
//     await post(
//     "Shoulder Bag Leather Bag Leather undertakes laborious physical physical",
//     "bag",
//     true,
//     "xl",
//     200,
//     false,
//     "brown",
//     "https://s3-alpha-sig.figma.com/img/3bf4/9f6f/fdb1dc0fcecdc64b53c6dd0bdac4b7db?Expires=1700438400&Signature=mRZmL0LMxsWJyhJVTER87K4d5tdrdK7YmYtT5sdcbXH7ThwU0J~ws0UgWJKmVj8JiX3KKkwhS0I7jorVQCMCtfW5PW~w0LxWkmdfR2Bl7CzI-b47uOQ6FgzkPDCGuceOUvFu6TytHhiRGJoEwfBckNBAMzKh2sWhY4L7gNEpfZmsXPzLlfFGY0xdJUqncNEGX0ewpP-laaJgy1IV780MDGJ~ek9Ma5-dvzSI1dqRvR~YQWkRjbAhRHBCWRDuvNRsJ2OCpFckN8wBR2POr9LefTk0bnNU2JCMCaHixn-kaNPgh-90sKHBQMhshmTV2uYF5NkCLhwGBrYVpCnlJOeoKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
//     )
// })
