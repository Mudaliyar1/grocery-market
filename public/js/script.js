function ham_open() {
    let show = document.getElementById("hamburger-page");
    let crossIcon = document.getElementById("cross-icon");
    let hamIcon = document.getElementById("hamburger-icon");
    let hamStyle = document.getElementById("left-hamburger");
    let bodyScroll = document.getElementById("body");

    // Ensure the menu is initially set to be visible
    show.style.display = "block";
    show.style.zIndex = "20";
    show.style.overflowY= "scroll";

    // Remove any previous slide-out class before sliding in
    show.classList.remove("slide-out");
    show.classList.add("slide-in"); 
    
    crossIcon.style.display = "block";
    hamIcon.style.display = "none";
    hamStyle.style.backgroundColor = "transparent";
    hamStyle.style.zIndex = "21";
    bodyScroll.style.overflowY= "hidden";
}

function ham_close() {
    let close = document.getElementById("hamburger-page");
    let crossIcon = document.getElementById("cross-icon");
    let hamIcon = document.getElementById("hamburger-icon");
    let hamStyle = document.getElementById("left-hamburger");
    let bodyScroll = document.getElementById("body");

    // Add class for slide-out animation
    close.classList.remove("slide-in");
    close.classList.add("slide-out");

    // Wait for the animation to finish before hiding the menu
    close.addEventListener('animationend', function() {
        close.style.display = "none";
        close.classList.remove("slide-out");
    }, { once: true });

    crossIcon.style.display = "none";
    hamIcon.style.display = "block";
    hamStyle.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    // hamStyle.style.zIndex = "2000";
    bodyScroll.style.overflowY= "scroll";

}

function shopCart(){
    let cartIcon = document.getElementById("store-mobile-basket");
    let mobImg=document.getElementById("store-mobile-img");
    let mobDetail=document.getElementById("store-mobile-detail");
    let mobProduct=document.getElementById("store-mobile-product");
    let mobMap=document.getElementById("store-mobile-map");

    cartIcon.style.display ="block";
    mobImg.style.display="none"
    mobDetail.style.display="none"
    mobProduct.style.display="none"
    mobMap.style.display="none"
}

function shopClose(){
    let shopCloseicon=document.getElementById("store-mobile-basket");
    let mobImg=document.getElementById("store-mobile-img");
    let mobDetail=document.getElementById("store-mobile-detail");
    let mobProduct=document.getElementById("store-mobile-product");
    let mobMap=document.getElementById("store-mobile-map");

    shopCloseicon.style.display="none";
    mobImg.style.display="block"
    mobDetail.style.display="block"
    mobProduct.style.display="block"
    mobMap.style.display="block"
}


// function removeProduct(){
//     let remove= document.getElementById("product-basket-div");
//     remove.style.display="none";
// }