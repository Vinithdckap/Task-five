let infoLink = document.querySelector(".infoLink")
let formDetails = document.querySelectorAll(".formDetails");

// let addCoupon = document.querySelector(".offerCode");
let coupon = document.querySelector(".coupon");
let offerCode = document.querySelector(".offerCode")



infoLink.addEventListener("click", () => {

    for (let i = 0; i < formDetails.length; i++) {
        formDetails[i].classList.toggle("open");
    }


    if (infoLink.innerText == "Add Info") {
        infoLink.innerText = "Cancel";
    }
    else if (infoLink.innerText == "Cancel") {
        infoLink.innerText = "Add Info";
    }


})


offerCode.addEventListener("click", () => {

    coupon.classList.toggle("offerOpen");

    if (offerCode.innerText == "Add Coupon") {
        offerCode.innerText = "Cancel";
    }
    else if (offerCode.innerText == "Cancel") {
        offerCode.innerText = "Add Coupon"
    }
})