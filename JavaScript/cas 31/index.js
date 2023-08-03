let mainContainer = document.querySelector(
  '.mainContainer'
);

let counter = 2;

(function () {
  fetch('https://dummyjson.com/products')
    .then((el) => el.json())
    .then((el) => {
      el.products.forEach((product) => {
        // let productContainer;
        counter++;

        if (counter === 3) {
          productContainer = document.createElement('div');
          productContainer.classList.add(
            'productContainer'
          );
          counter = 0;
          mainContainer.append(productContainer);
          // console.log(productContainer);
        }

        let productContainer2 = document.querySelectorAll(
          '.productContainer'
        );

        let childProduct = document.createElement('div');
        childProduct.classList.add('childProduct');
        productContainer2[
          productContainer2.length - 1
        ].append(childProduct);

        childProduct.innerHTML = `  <img src="${product.images[0]}"> <h1> ${product.title} </h1> <p class='price'> $${product.price} </p> `;
        console.log(product);
      });
    });
})();
