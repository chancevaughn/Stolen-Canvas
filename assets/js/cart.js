const cartButton = document.querySelector('#cartButton');

const cartAddHandler = async () => {
    const productID = cartButton.dataset.id;
    console.log(productID);

    const response = await fetch('/api/product/add', {
        method: 'POST',
        body: JSON.stringify({ productID: productID }),
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        cartButton.innerHTML = "ADDED TO CART";
    }
    else {

    }
}

cartButton.addEventListener("click", cartAddHandler); 