
// this function will set the default values

function defaultCost(getElement) {
    const element = getElement;
    // var defaultCostInt = parseInt(defaultCostText);
    if (getElement == 'memory-cost' || getElement == 'storage-cost' || getElement == 'shipping-cost') {
        return 0;
    }
}

document.getElementById('8gb-memory').addEventListener('click', function () {
    const getElement = defaultCost('memory-cost')
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = getElement;
    totalPrice();


})
document.getElementById('256gb-ssd').addEventListener('click', function () {
    const getElement = defaultCost('storage-cost')
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = getElement;
    totalPrice();

})
document.getElementById('free-shipping').addEventListener('click', function () {
    const getElement = defaultCost('shipping-cost')
    const shippingCost = document.getElementById('shipping-cost');
    shippingCost.innerText = getElement;
    totalPrice();

})


// --- default value configuration done --- \\


// ------this function is applicable if the user wishes to add extra components -------

function extraUtilities(getElement) {
    const element = getElement;
    var defaultCostText = element.innerText;
    if (getElement == 'memory-cost') {
        return 180;
    }
    else if (getElement == 'storage-cost') {
        return 100;
    }
    else if (getElement == 'shipping-cost') {
        return 20;
    }
}

document.getElementById('16gb-memory').addEventListener('click', function () {
    const getElement = extraUtilities('memory-cost')
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = getElement;
    totalPrice();

})
document.getElementById('512gb-ssd').addEventListener('click', function () {
    const getElement = extraUtilities('storage-cost')
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = getElement;
    totalPrice();

})
document.getElementById('20$-shipping').addEventListener('click', function () {
    const getElement = extraUtilities('shipping-cost')
    const shippingCost = document.getElementById('shipping-cost');
    shippingCost.innerText = getElement;
    totalPrice();

})

document.getElementById('1tb-ssd').addEventListener('click', function () {
    const getElement = extraUtilities('storage-cost') + 80;
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = getElement;
    totalPrice();

})
// --------------- done ------------------ 


// --- keeping a variable set to the best price for reference 
// and a temporary one to keep track of discount --- 

var total = 1299;
var totalTemp = 1299;


// this function will calculate the total price by getting 
// the numbers from the page at any giving moment \\
// used "best price" as a reference so that 
// it repeatedly adds numbers with 1299.

function totalPrice() {
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceInt = parseInt(bestPriceText);
    const totalCost = document.getElementById('total-cost');
    total = bestPriceInt;
    const memoryCost = document.getElementById('memory-cost');
    let memoryCostText = memoryCost.innerText;
    const storageCost = document.getElementById('storage-cost');
    let storageCostText = storageCost.innerText;
    const deliveryCost = document.getElementById('shipping-cost');
    let deliveryCostText = deliveryCost.innerText;

    total += parseInt(memoryCostText) + parseInt(storageCostText) + parseInt(deliveryCostText);
    totalCost.innerText = total;
}

// <--------- done -----------> 

// ---- this function will calculate the discounted price ---- \\

document.getElementById('promo-code-btn').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code');
    promoCodeValue = promoCode.value;
    if (promoCodeValue == 'stevekaku') {
        totalTemp = total - (total * 0.2);
        const getElement = document.getElementById('final-total');
        getElement.innerText = totalTemp;
    }
    else {
        alert("Invalid Promo Code");
    }
})






