import { products } from "./db/products.js";


const productContainer = document.getElementById("products");

for(let product of products){
    let cardContainer = document.createElement("div");
    cardContainer.classList.add(
        "card",
        "card-vertical",
        "d-flex",
        "direction-column",
        "relative",
        "shadow"
    );  
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("card-image-container");

    const image = document.createElement("image");
    image.classList.add("card-image");
    image.setAttribute("src",product.img);
    image.setAttribute("alt",product.name);
    imageContainer.appendChild(image);

    const cardDetailsContainer = document.createElement("div");
    cardDetailsContainer.classList.add("card-details");
    const brandContainer = document.createElement("div");
    brandContainer.classList.add("card-title");
    brandContainer.innerText = product.brand;
    cardDetailsContainer.appendChild(brandContainer);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("card-description");
    
    const name = document.createElement("p");
    name.classList.add("card-des");
    name.innerText = product.name;
    descriptionContainer.appendChild(name);

    const price = document.createElement("p");
    price.classList.add("card-price");
    price.innerText = `Rs. ${product.price}`;

    const oldPrice = document.createElement("span");
    oldPrice.classList.add("price-strike-through");
    oldPrice.innerText = `Rs. ${product.oldPrice}`;
    price.appendChild(oldPrice);


    productContainer.appendChild(cardContainer);

}