document.addEventListener("DOMContentLoaded", () => {
    const productList = document.querySelector(".product-list");

    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            const selectedIndices = [2, 3, 5, 6];

            const selectedItems = selectedIndices.map((index) => data[index]);

            selectedItems.forEach((product) => {
                const productItem = document.createElement("div");
                productItem.classList.add("product-item");
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" />
                    <h2>${product.title}</h2>
                    <p>Price: $${product.price}</p>
                `;
                productList.appendChild(productItem);
            });
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
});