import { getByID } from "./myrequest.js";
let id = new URLSearchParams(location.search).get('id');
console.log(id);
let name = document.querySelector(".product-name")
let img = document.querySelector(".product-img")
let sizeimg = document.querySelectorAll(".product-mini-img")
let desc = document.querySelector(".desctext")
let bag = await getByID(id)
name.innerHTML = `${bag.name}`
img.innerHTML = ` <img src="${bag.img}" alt="">`
console.log(bag);
sizeimg.forEach(img=>{
    img.innerHTML = ` <img src="${bag.img}" alt="">`
})
desc.innerHTML = `${bag.description}`