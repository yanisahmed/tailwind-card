// catch increment id
const increment  = document.getElementById("increment");
const decrement = document.getElementById('decrement');
const quantity = document.getElementById('quantity');
const totalPrice = document.getElementById('total-price')

increment.addEventListener('click', () => {
   quantity.innerText = parseInt(quantity.innerText) + 1;
   totalPrice.innerText = 500 * parseInt(quantity.innerText);
})

decrement.addEventListener('click', () => {
    if(parseInt(quantity.innerText) > 0 ){
        quantity.innerText = parseInt(quantity.innerText) - 1;
        totalPrice.innerText = 500 * parseInt(quantity.innerText);
    }
    
})
