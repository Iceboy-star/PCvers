const products = [

    {
        id: 1,
        name: "AMD Ryzen 5 5600X",
        category: "cpu",
        price: 12999,
        image: "images/cpu.jpg"
    },

    {
        id: 2,
        name: "NVIDIA RTX 4060",
        category: "gpu",
        price: 29999,
        image: "images/gpu.jpg"
    },

    {
        id: 3,
        name: "16GB DDR4 RAM",
        category: "ram",
        price: 3999,
        image: "images/ram.jpg"
    },

    {
        id: 4,
        name: "1TB NVMe SSD",
        category: "storage",
        price: 5999,
        image: "images/ssd.jpg"
    },

    {
        id: 5,
        name: "B550 Gaming Motherboard",
        category: "motherboard",
        price: 8999,
        image: "images/motherboard.jpg"
    },

    {
        id: 6,
        name: "650W 80+ Bronze PSU",
        category: "psu",
        price: 5499,
        image: "images/psu.jpg"
    },

    {
        id: 7,
        name: "24-inch Gaming Monitor",
        category: "monitor",
        price: 11999,
        image: "images/monitor.jpg"
    },

    {
        id: 8,
        name: "Gaming PC Cabinet",
        category: "cabinet",
        price: 4499,
        image: "images/cabinet.jpg"
    }

];


let cart = [];


/* DISPLAY PRODUCTS */

function displayProducts(productList) {

    const container =
        document.getElementById("product-container");

    container.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product";

        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

                <button
                    class="add-button"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>
        `;

        container.appendChild(card);

    });

}


/* FILTER */

function filterProducts(category) {

    if (category === "all") {

        displayProducts(products);

        return;
    }

    const filtered =
        products.filter(
            product => product.category === category
        );

    displayProducts(filtered);
}


/* SEARCH */

function searchProducts() {

    const search =
        document
        .getElementById("search")
        .value
        .toLowerCase();

    const results =
        products.filter(product =>
            product.name
            .toLowerCase()
            .includes(search)
        );

    displayProducts(results);
}


/* ADD TO CART */

function addToCart(id) {

    const product =
        products.find(product =>
            product.id === id
        );

    cart.push(product);

    updateCart();

    alert(product.name + " added to cart!");
}


/* UPDATE CART */

function updateCart() {

    document.getElementById("cart-count")
        .textContent = cart.length;

    const items =
        document.getElementById("cart-items");

    items.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        const item =
            document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `

            <span>
                ${product.name}
            </span>

            <span>
                ₹${product.price.toLocaleString("en-IN")}

                <button
                    class="remove-button"
                    onclick="removeFromCart(${index})"
                >
                    X
                </button>
            </span>
        `;

        items.appendChild(item);

    });

    document.getElementById("cart-total")
        .textContent =
        total.toLocaleString("en-IN");
}


/* REMOVE */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


/* OPEN CART */

function openCart() {

    document.getElementById("cart-modal")
        .style.display = "block";

}


/* CLOSE CART */

function closeCart() {

    document.getElementById("cart-modal")
        .style.display = "none";

}


/* CHECKOUT */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    alert(
        "Checkout system will be connected in the next version!"
    );

}


/* START */

displayProducts(products);
