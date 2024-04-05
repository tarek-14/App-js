let ProductsInCart = localStorage.getItem("ProductsInCart")
var allProducts = document.querySelector(".products")
let badge = document.querySelector(".badge")


if(ProductsInCart){
    let item = JSON.parse(ProductsInCart);
    drawCartProducts(item)
}
function drawCartProducts(products){
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
                <button class="add-to-cart" onclick="removeCart(${item.id})">Remove cart </button>
                </div>
            </div>
           `
    })
    allProducts.innerHTML = x
}
// function removeCart(id){
//     let products = JSON.parse(localStorage.getItem("ProductsInCart"))
//     products = products.filter(item => item.id !== id)
//     localStorage.setItem("ProductsInCart", JSON.stringify(products))
//     badge.innerHTML = products.length
//     drawCartProducts(products)
//  } 

function removeCart(id){
    let products = JSON.parse(localStorage.getItem("ProductsInCart"))
    const index = products.findIndex(item => item.id === id )
    if(index !== -1){
       products.splice(index, 1)
       localStorage.setItem("ProductsInCart", JSON.stringify(products))
       badge.innerHTML = products.length
       drawCartProducts(products)
    } else {
       console.log("Product not found.")
    }
 } 


 
function noProducts() {
    if (allProducts.childElementCount === 0) {
         allProducts.innerHTML = `<li><p> No products were selected.</p> Go to the products page to shop  <a href="index.html">Products</a> </li>`
        console.log('لا يوجد منتجات.');
    } else {
        console.log('هناك منتجات.');
    }
}
noProducts()


