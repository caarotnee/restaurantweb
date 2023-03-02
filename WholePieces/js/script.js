const btn = document.querySelectorAll(".table-price-btn");
// console.log(btn);
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target;
        var product1 = btnItem.parentElement;
        var productPr = btnItem.parentElement.querySelector("p.table-price-pr");
        var productPrice = productPr.querySelector("span").innerText;
        var product2 = product1.parentElement;
        var productName = product2.querySelector("h1").innerText;
        var product3 = product2.parentElement;
        var product4 = product3.parentElement;
        var product5 = product4.parentElement;
        var product6 = product5.querySelector(".table-price-left");
        var productImg = product6.querySelector("img").src;
        addCart(productImg, productPrice, productName);
    });
});
function addCart(productImg, productPrice, productName) {
    var addTr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-name");
        if (productT[i].innerHTML == productName) {
            alert("Your product is already in the cart");
            return;
        }
    }
    var trContent =
        '<tr class="cart-content"> <td class="cart-img"> <img style="margin-right: 10px" src=" ' +
        productImg +
        ' " width="70" alt="" /> <span class="cart-name">' +
        productName +
        '</span > </td> <td class="cart-price"> <p> <sub>$</sub><span class="cart-product-pr">' +
        productPrice +
        '</span ><sub style="margin-left: 5px">e/o</sub> </p> </td> <td class="cart-input"> <input style="width: 50px; outline: none" type="number" value="1" min="1" /> </td> <td style="cursor: pointer" class="cart-del"> Delete </td> </tr>';
    addTr.innerHTML = trContent;
    var cartTable = document.querySelector("tbody");
    cartTable.append(addTr);
    cartTotal();
    deleteCart();
}
/* totalPrice */
function cartTotal() {
    var cartItem = document.querySelectorAll("tbody tr");
    var totalC = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value;
        var productPrice =
            cartItem[i].querySelector(".cart-product-pr").innerHTML;
        totalA = inputValue * productPrice * 1000;
        // totalB = totalA.toLocaleString("de-DE");
        totalC += totalA;
    }
    var cartTotalA = document.querySelector(".cart-pr-p span");
    cartTotalA.innerHTML = totalC.toLocaleString("de-DE");
    inputChange();
}

/* deleteCart */
function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var product = document.querySelectorAll(".cart-del");
        product[i].addEventListener("click", function (event) {
            var cartDelete = event.target;
            var cartItemD = cartDelete.parentElement;
            cartItemD.remove();
            cartTotal();
        });
    }
}

function inputChange() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change", function () {
            cartTotal();
        });
    }
}
// Modal
var modal = document.getElementById("cart");
var cartBTN = document.getElementById("shopping-cart");
var closeCart = document.getElementsByClassName("cart-icon")[0];
var order = document.getElementsByClassName("cart-finish-ord")[0];
cartBTN.onclick = function () {
    modal.style.display = "block";
};
closeCart.onclick = function () {
    modal.style.display = "none";
};
order.onclick = function () {
    alert("Cảm ơn bạn đã thanh toán đơn hàng");
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
