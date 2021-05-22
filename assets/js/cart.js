const deleteButton = document.querySelector('#deleteButton');
const checkoutButton = document.querySelector('#checkoutButton');

const deleteHandler = async () => {
    const productID = deleteButton.dataset.id;
    console.log(productID);

    const response = await fetch('/api/product/remove', {
        method: 'PUT',
        body: JSON.stringify({ productID: productID }),
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        document.location.replace('/cart');
    }
    else {
        console.log("Could not remove from cart");
    }
}

const checkoutHandler = async () => {

    const response = await fetch('/api/product/checkout', {
        method: 'PUT',
        body: JSON.stringify(),
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        document.location.replace('/account');
    }
    else {
        console.log("Failed to Checkout");
    }
}

deleteButton.addEventListener("click", deleteHandler);
checkoutButton.addEventListener("click", checkoutHandler);