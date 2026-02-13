function add(item){
  let cart = document.getElementById("cart");
  let li = document.createElement("li");
  li.innerText = item;
  cart.appendChild(li);
}
