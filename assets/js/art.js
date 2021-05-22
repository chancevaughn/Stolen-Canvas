const artButton = document.querySelector('#artButton');

const artAddHandler = async (event) => {
    event.preventDefault();
    const productID = artButton.dataset.id;
    console.log(productID);

    const response = await fetch('/api/product/add', {
        method: 'PUT',
        body: JSON.stringify({ productID: productID }),
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        artButton.innerHTML = "ADDED TO CART";
    }
    else {
        artButton.innerHTML = "USER MUST BE LOGGED IN TO ADD TO CART";
    }
}


artButton.addEventListener("click", artAddHandler);

