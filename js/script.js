var allProducts = document.querySelector(".products")
var products = [
    {
        id: 1,
        titel:'Iphone 15 pro',
        descP: 'The ultimate iPhone.',
        descSpan:'From $999 or $41.62/mo. for 24 mo.',
        imgUrl:'images/iPhone 15 Pro.png'
    },
    {
        id: 2,
        titel:'Iphone 15',
        descP: 'A total powerhouse.',
        descSpan:'From $799 or $33.29/mo. for 24 mo.',
        imgUrl:'images/iPhone 15.png'
    },
    {
        id: 3,
        titel:'Iphone 14',
        descP: 'As amazing as ever.',
        descSpan:'From $699 or $29.12/mo. for 24 mo.',
        imgUrl:'images/iPhone 14.png'
    },
    {
        id: 4,
        titel:'Iphone 13',
        descP: 'All kinds of awesome.',
        descSpan:'From $599 or $24.95/mo. for 24 mo.',
        imgUrl:'images/iPhone 13.png'
    }
]
function drowItem(){
    let x = products.map((item ) => {
        return`
        <div class="product-itme">
                <img src="${item.imgUrl}" alt="">
                <div class="product-desc">
                    <h2>${item.titel}</h2>
                    <p>${item.descP}</p>
                    <span>${item.descSpan}</span>
                    <a href="#">learn more...</a >
                </div>
                <div class="product-item-action">
                    <button class="add-to-cart" onclick="addToCart(${item.id})">Add To Cart</button>
                    <i class="fa-regular fa-heart heart" onclick="addfavorite(id)" ></i>
                </div>
            </div>
           `
    })
    allProducts.innerHTML = x
}
drowItem()
var heart = document.querySelector(".heart")
function addfavorite(id){
    products.forEach((item => {
        heart.style.Color =" red"
    }))()
}

let cartProductsDiv = document.querySelector(".cart-products div")
let badge = document.querySelector(".badge")

let addedItem = localStorage.getItem("ProductsInCart")? JSON.parse(localStorage.getItem("ProductsInCart")):[]
    if(addedItem){
        addedItem.map(item =>{
            cartProductsDiv.innerHTML += `<p>${item.titel}</p>`   
        })
        badge.style.display= 'block'
        badge.innerHTML = addedItem.length
    }
    if (localStorage.getItem =("username") ){
        function addToCart(id){
            let choosenItem = products.find((item) => item.id === id)
            cartProductsDiv.innerHTML += `<p>${choosenItem.titel}</p>`
            addedItem = [...addedItem ,choosenItem]
            localStorage.setItem("ProductsInCart" ,JSON.stringify(addedItem) )
            let cartProductsLength = document.querySelectorAll(".cart-products div p")
            badge.innerHTML = cartProductsLength.length
        }
    }else{
        window.location="login.html"
    }
    
    // console.log(localStorage)
    // console.log(ProductsInCart)
// ////////////////////////////////////
let shoppingCart = document.querySelector(".shopping-cart")
let cartProducts = document.querySelector(".cart-products")
shoppingCart.addEventListener("click", opencart)
function opencart(){
    if(cartProductsDiv.innerHTML !="" ){
        if(cartProducts.style.display=="none"){
            cartProducts.style.display="block"
        }else{
            cartProducts.style.display="none"
        }
    }
}
