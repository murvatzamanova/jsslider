
// const products = document.querySelector(".products");
// const search = document.getElementById("search");
// const btn = document.getElementById("btn");

// let data = [];
// const showData = () => {
//   products.innerHTML = "";
//   data
//     .filter((a) => a.title.toLowerCase().startsWith(search.value.toLowerCase()))
//     .map((a) => {
//       const product = document.createElement("div");
//       product.classList.add("product");
//       const productImage = document.createElement("div");
//       productImage.classList.add("product__image");
//       const photo = document.createElement("img");
//       photo.src = a.image;
//       productImage.append(photo);
//       const productDetails = document.createElement("div");
//       productDetails.classList.add("product__details");
//       const name = document.createElement("h3");
//       name.textContent = a.title;
//       const price = document.createElement("h2");
//       price.textContent = `${a.price}$`;
//       productDetails.append(name, price);
//       product.append(productImage, productDetails);
//       products.append(product);
//     });
// };


// btn.addEventListener("click", () => {
//   showData();
// });

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((responseData) => {
//     data = responseData;
//     showData();
//   });





let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}