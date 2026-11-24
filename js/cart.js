/* ==========================================================
   ShopZone Cart Helper
   Cart is stored in localStorage as an array of
   { id, qty } and merged with PRODUCTS (data.js) for display.
   ========================================================== */

const CART_KEY = "shopzone_cart";
const ADDRESS_KEY = "shopzone_address";

function getCart(){
  try{
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  }catch(e){
    return [];
  }
}

function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, qty = 1){
  const cart = getCart();
  const existing = cart.find(item => item.id === Number(id));
  if(existing){
    existing.qty += qty;
  }else{
    cart.push({ id:Number(id), qty });
  }
  saveCart(cart);
}

function updateQty(id, qty){
  let cart = getCart();
  if(qty <= 0){
    cart = cart.filter(item => item.id !== Number(id));
  }else{
    const existing = cart.find(item => item.id === Number(id));
    if(existing) existing.qty = qty;
  }
  saveCart(cart);
}

function removeFromCart(id){
  const cart = getCart().filter(item => item.id !== Number(id));
  saveCart(cart);
}

function clearCart(){
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

function getCartDetails(){
  return getCart().map(item => {
    const product = getProductById(item.id);
    return product ? { ...product, qty:item.qty } : null;
  }).filter(Boolean);
}

function getCartTotals(){
  const items = getCartDetails();
  const itemCount = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const originalTotal = items.reduce((sum, i) => sum + ((i.oldPrice || i.price) * i.qty), 0);
  const savings = originalTotal - subtotal;
  const delivery = subtotal > 999 || subtotal === 0 ? 0 : 49;
  const total = subtotal + delivery;
  return { itemCount, subtotal, savings, delivery, total };
}

function updateCartBadge(){
  const badges = document.querySelectorAll(".cart-badge");
  const count = getCart().reduce((sum, i) => sum + i.qty, 0);
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? "inline-flex" : "none";
  });
}

function saveAddress(address){
  localStorage.setItem(ADDRESS_KEY, JSON.stringify(address));
}

function getAddress(){
  try{
    return JSON.parse(localStorage.getItem(ADDRESS_KEY)) || null;
  }catch(e){
    return null;
  }
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
