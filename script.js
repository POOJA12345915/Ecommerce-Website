function add(item){
 let cart=document.getElementById("cart");
 let li=document.createElement("li");
 li.innerHTML=item;
 cart.appendChild(li);
}
