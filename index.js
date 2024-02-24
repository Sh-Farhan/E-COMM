import { products } from "./db/products.js";


const productContainer = document.getElementById("products");

for(let product of products){
    const cardContainer = document.createElement("div");
    cardContainer.classList.add(
        "card",
        "card-vertical",
        "d-flex",
        "direction-column",
        "relative",
        "shadow"
    );  
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("card-image-container");

    const image = document.createElement("image");
    image.classList.add("card-image");
    image.setAttribute("src",product.img);
    image.setAttribute("alt",product.name);
    imageContainer.appendChild(image);

    cardContainer.appendChild(imageContainer); 

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
    price.classList.add("card-price","d-flex","align-end","gap-sm");
    price.innerText = `Rs. ${product.price}`;

    const oldPrice = document.createElement("span");
    oldPrice.classList.add("price-strike-through");
    oldPrice.innerText = `Rs. ${product.oldPrice}`;
    price.appendChild(oldPrice);

    const discount = document.createElement("span");
    discount.classList.add("discount");
    discount.innerText =  `(${product.discount}% OFF)`;
    price.appendChild(discount);

    descriptionContainer.appendChild(price);

    const ratings = document.createElement("p");
    ratings.classList.add("d-flex","align-center");

    const star = document.createElement("span");
    star.classList.add("material-icons-outlined"); 
    star.innerText = "star";
    ratings.appendChild(star);

    descriptionContainer.appendChild(ratings);

    cardDetailsContainer.appendChild(descriptionContainer);

    // const ctaButton = document.createElement("div");
    // ctaButton. classList.add("cta-btn");
    // const cartButton = document.createElement("button");
    // cartButton.classList.add("button", "btn-primary", "btn-icon"," cart-btn", "d-flex", "align-center", "justify-center", "gap", "cursor", "btn-margin");

    // const cart = document.createElement("span");
    // cart.classList.add("material-icons-outlined"); 
    // cart.innerText = "shopping_cart";
    // cartButton.appendChild(cart);
    // cartButton.innerText = "Add to cart";
    // ctaButton.appendChild(cartButton);
    // cardDetailsContainer.appendChild(ctaButton);

    // cardContainer.appendChild(imageContainer);  
    cardContainer.appendChild(cardDetailsContainer);


    productContainer.appendChild(cardContainer);

}