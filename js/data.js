/* ==========================================================
   ShopZone Product Catalog
   Single source of truth for every product shown across
   category.html, product-detail.html, cart.html etc.
   ========================================================== */

const PRODUCTS = [

  /* ---------------- ELECTRONICS ---------------- */
  { id:101, category:"electronics", subcategory:"TV", name:"Samsung 43\" Crystal 4K Smart TV",
    image:"images/tv.jpg", price:24999, oldPrice:32999, rating:4.3, ratingCount:812,
    description:"A 43 inch Crystal 4K display with vibrant colour and a built in smart hub for all your favourite streaming apps.",
    specs:{ "Screen Size":"43 inch", "Resolution":"4K Ultra HD", "Display Type":"Crystal LED", "Smart OS":"Tizen", "Ports":"3x HDMI, 2x USB", "Warranty":"1 Year" },
    reviews:[
      { user:"Arun K.", rating:5, comment:"Picture quality is excellent for the price, very happy with this TV." },
      { user:"Priya S.", rating:4, comment:"Good sound and easy to set up, wish it had one more HDMI port." }
    ] },
  { id:102, category:"electronics", subcategory:"TV", name:"LG 55\" OLED Smart TV",
    image:"images/tv2.jpg", price:64999, oldPrice:79999, rating:4.6, ratingCount:340,
    description:"Self lit OLED pixels deliver perfect blacks and stunning contrast for movies, sports and gaming.",
    specs:{ "Screen Size":"55 inch", "Resolution":"4K OLED", "Display Type":"OLED", "Smart OS":"WebOS", "Ports":"4x HDMI, 2x USB", "Warranty":"2 Years" },
    reviews:[
      { user:"Karthik R.", rating:5, comment:"Blacks are true black, best TV I have owned so far." }
    ] },

  { id:103, category:"electronics", subcategory:"Mobiles", name:"Galaxy Nova 5G Smartphone",
    image:"images/mobile.jpg", price:24999, oldPrice:29999, rating:4.4, ratingCount:1230,
    description:"A snappy 5G smartphone with a smooth 120Hz display and an all day battery for everyday use.",
    specs:{ "Display":"6.5 inch AMOLED, 120Hz", "RAM":"8 GB", "Storage":"128 GB", "Battery":"5000 mAh", "Camera":"50 MP Triple", "Warranty":"1 Year" },
    reviews:[
      { user:"Divya M.", rating:4, comment:"Camera is great in daylight, battery easily lasts a full day." }
    ] },
  { id:104, category:"electronics", subcategory:"Mobiles", name:"Pixel Lite 5G",
    image:"images/mobile2.jpg", price:32999, oldPrice:37999, rating:4.5, ratingCount:560,
    description:"Clean software experience with a class leading camera, built for people who love photography.",
    specs:{ "Display":"6.1 inch OLED, 90Hz", "RAM":"8 GB", "Storage":"128 GB", "Battery":"4500 mAh", "Camera":"64 MP Dual", "Warranty":"1 Year" },
    reviews:[
      { user:"Ramesh V.", rating:5, comment:"Software updates are quick, camera output is beautiful." }
    ] },

  { id:105, category:"electronics", subcategory:"Laptops", name:"ProBook Gaming Laptop",
    image:"images/laptop.jpg", price:55999, oldPrice:69999, rating:4.2, ratingCount:410,
    description:"A powerful gaming laptop with a high refresh rate display and dedicated graphics for smooth gameplay.",
    specs:{ "Processor":"Intel Core i5, 12th Gen", "RAM":"16 GB", "Storage":"512 GB SSD", "Graphics":"4 GB Dedicated", "Display":"15.6 inch, 144Hz", "Warranty":"1 Year" },
    reviews:[
      { user:"Sanjay P.", rating:4, comment:"Handles most games at high settings, runs a bit warm under load." }
    ] },
  { id:106, category:"electronics", subcategory:"Laptops", name:"AirLight Ultrabook",
    image:"images/laptop2.jpg", price:48999, oldPrice:57999, rating:4.5, ratingCount:275,
    description:"Slim, light and quiet — built for students and professionals who work on the move.",
    specs:{ "Processor":"Intel Core i5, 13th Gen", "RAM":"16 GB", "Storage":"512 GB SSD", "Display":"14 inch FHD", "Battery Life":"Up to 14 hrs", "Warranty":"1 Year" },
    reviews:[
      { user:"Meena T.", rating:5, comment:"Extremely light to carry around, battery lasts the whole day." }
    ] },

  { id:107, category:"electronics", subcategory:"Watches", name:"PulseFit Smart Watch",
    image:"images/watch.jpg", price:3999, oldPrice:5499, rating:4.1, ratingCount:960,
    description:"Track your workouts, heart rate and sleep with a bright always on display.",
    specs:{ "Display":"1.4 inch AMOLED", "Battery":"Up to 7 days", "Water Resistance":"5 ATM", "Sensors":"Heart Rate, SpO2", "Compatibility":"Android & iOS", "Warranty":"1 Year" },
    reviews:[
      { user:"Vignesh S.", rating:4, comment:"Good value smart watch, step tracking is fairly accurate." }
    ] },
  { id:108, category:"electronics", subcategory:"Watches", name:"ChronoStyle Classic Watch",
    image:"images/watch2.jpg", price:6999, oldPrice:8999, rating:4.6, ratingCount:180,
    description:"A timeless analog watch with a stainless steel strap, built for daily wear and formal occasions.",
    specs:{ "Case Material":"Stainless Steel", "Strap":"Steel Chain", "Movement":"Quartz", "Water Resistance":"3 ATM", "Warranty":"2 Years" },
    reviews:[
      { user:"Anitha R.", rating:5, comment:"Looks premium and goes well with formal outfits." }
    ] },

  { id:109, category:"electronics", subcategory:"Headphones", name:"BassBoost Wireless Headphone",
    image:"images/headphone.jpg", price:1999, oldPrice:2999, rating:4.3, ratingCount:1450,
    description:"Over ear wireless headphones with deep bass and up to 30 hours of battery life.",
    specs:{ "Type":"Over Ear, Wireless", "Battery Life":"Up to 30 hrs", "Bluetooth":"5.3", "Mic":"Built in", "Warranty":"1 Year" },
    reviews:[
      { user:"Harish D.", rating:4, comment:"Bass is punchy, comfortable even after long use." }
    ] },

  { id:110, category:"electronics", subcategory:"Fridge", name:"CoolBreeze 260L Double Door Fridge",
    image:"images/fridge.jpg", price:23999, oldPrice:27999, rating:4.4, ratingCount:390,
    description:"A frost free double door refrigerator with a spacious interior and energy efficient cooling.",
    specs:{ "Capacity":"260 Litres", "Type":"Frost Free, Double Door", "Star Rating":"3 Star", "Compressor":"Inverter", "Warranty":"10 Years on Compressor" },
    reviews:[
      { user:"Lakshmi N.", rating:5, comment:"Cools quickly and runs very quietly." }
    ] },
  { id:111, category:"electronics", subcategory:"Fridge", name:"CoolBreeze 190L Single Door Fridge",
    image:"images/fridge2.jpg", price:14999, oldPrice:17999, rating:4.2, ratingCount:210,
    description:"A compact single door fridge ideal for small families and bachelor homes.",
    specs:{ "Capacity":"190 Litres", "Type":"Direct Cool, Single Door", "Star Rating":"3 Star", "Warranty":"5 Years on Compressor" },
    reviews:[
      { user:"Bala M.", rating:4, comment:"Perfect size for a small kitchen, does the job well." }
    ] },

  /* ---------------- DRESSES ---------------- */
  { id:201, category:"dresses", subcategory:"Men", name:"Men's Classic Cotton Shirt",
    image:"images/shirt-men.jpg", price:899, oldPrice:1299, rating:4.2, ratingCount:640,
    description:"A breathable cotton shirt with a regular fit, perfect for office wear or casual outings.",
    specs:{ "Fabric":"100% Cotton", "Fit":"Regular", "Sleeve":"Full Sleeve", "Pattern":"Solid", "Care":"Machine Wash", "Sizes":"S, M, L, XL, XXL" },
    reviews:[
      { user:"Naveen K.", rating:4, comment:"Fabric feels premium, fits true to size." }
    ] },
  { id:202, category:"dresses", subcategory:"Men", name:"Men's Slim Fit Chino Pant",
    image:"images/pant-men.jpg", price:1199, oldPrice:1699, rating:4.3, ratingCount:410,
    description:"A slim fit chino pant made from stretchable fabric for all day comfort.",
    specs:{ "Fabric":"Cotton Blend, Stretchable", "Fit":"Slim", "Closure":"Zip and Button", "Care":"Machine Wash", "Sizes":"30 to 38" },
    reviews:[
      { user:"Suresh B.", rating:4, comment:"Very comfortable, holds shape well after washing." }
    ] },
  { id:203, category:"dresses", subcategory:"Men", name:"Men's Korean Fit Wide Leg Pant",
    image:"images/korean-pant.jpg", price:1399, oldPrice:1899, rating:4.5, ratingCount:265,
    description:"Trendy Korean style wide leg pant with a relaxed silhouette, great for a street style look.",
    specs:{ "Fabric":"Cotton Linen Blend", "Fit":"Wide Leg, Relaxed", "Closure":"Elastic with Drawstring", "Care":"Machine Wash", "Sizes":"S, M, L, XL" },
    reviews:[
      { user:"Gokul R.", rating:5, comment:"Exactly the Korean style fit I was looking for, very comfortable." }
    ] },

  { id:204, category:"dresses", subcategory:"Women", name:"Women's Floral A-Line Dress",
    image:"images/dress-women.jpg", price:1499, oldPrice:1999, rating:4.4, ratingCount:520,
    description:"A flattering A-line dress with a floral print, suited for daywear and casual get togethers.",
    specs:{ "Fabric":"Rayon", "Fit":"A-Line", "Length":"Knee Length", "Sleeve":"Three Fourth", "Sizes":"S, M, L, XL" },
    reviews:[
      { user:"Swathi P.", rating:5, comment:"Fabric is soft and the print looks even better in person." }
    ] },
  { id:205, category:"dresses", subcategory:"Women", name:"Women's High Waist Palazzo Pant",
    image:"images/palazzo.jpg", price:999, oldPrice:1399, rating:4.2, ratingCount:330,
    description:"A high waisted flowy palazzo pant that pairs well with kurtas and crop tops alike.",
    specs:{ "Fabric":"Crepe", "Fit":"Flared", "Waist":"High Waist, Elastic", "Sizes":"S, M, L, XL" },
    reviews:[
      { user:"Deepa S.", rating:4, comment:"Very comfortable for daily wear, good stitching quality." }
    ] },

  { id:206, category:"dresses", subcategory:"Kids", name:"Kids Printed Cotton Frock",
    image:"images/frock-kids.jpg", price:699, oldPrice:999, rating:4.5, ratingCount:180,
    description:"A soft cotton frock with a fun print, comfortable for daily play and parties alike.",
    specs:{ "Fabric":"Cotton", "Fit":"Regular", "Age Group":"3 to 8 years", "Care":"Machine Wash" },
    reviews:[
      { user:"Revathi J.", rating:5, comment:"Good quality fabric, my daughter loves the print." }
    ] },
  { id:207, category:"dresses", subcategory:"Kids", name:"Kids Boys Casual Shirt & Shorts Set",
    image:"images/kids-set.jpg", price:799, oldPrice:1099, rating:4.3, ratingCount:150,
    description:"A comfortable shirt and shorts combo set, perfect for everyday casual wear.",
    specs:{ "Fabric":"Cotton Blend", "Set Includes":"1 Shirt, 1 Shorts", "Age Group":"4 to 10 years", "Care":"Machine Wash" },
    reviews:[
      { user:"Manoj K.", rating:4, comment:"Good fit and the fabric is soft on skin." }
    ] },

  /* ---------------- FOOTWEAR ---------------- */
  { id:301, category:"footwear", subcategory:"Men", name:"Men's Air Running Shoes",
    image:"images/shoe.jpg", price:2499, oldPrice:3499, rating:4.4, ratingCount:980,
    description:"Lightweight running shoes with a cushioned sole, built for daily runs and workouts.",
    specs:{ "Upper Material":"Mesh", "Sole":"EVA Cushioned", "Closure":"Lace Up", "Sizes":"6 to 11" },
    reviews:[
      { user:"Vinoth A.", rating:5, comment:"Very comfortable for daily runs, great grip." }
    ] },
  { id:302, category:"footwear", subcategory:"Women", name:"Women's Casual Sneakers",
    image:"images/sneakers-women.jpg", price:1799, oldPrice:2499, rating:4.3, ratingCount:420,
    description:"Comfortable everyday sneakers with a soft footbed and breathable fabric.",
    specs:{ "Upper Material":"Canvas", "Sole":"Rubber", "Closure":"Lace Up", "Sizes":"3 to 8" },
    reviews:[
      { user:"Keerthana R.", rating:4, comment:"Light weight and goes well with most outfits." }
    ] },
  { id:303, category:"footwear", subcategory:"Kids", name:"Kids Velcro Sports Shoes",
    image:"images/shoe-kids.jpg", price:999, oldPrice:1399, rating:4.5, ratingCount:260,
    description:"Easy to wear velcro sports shoes designed for active kids.",
    specs:{ "Upper Material":"Synthetic", "Closure":"Velcro Strap", "Sole":"Anti Skid", "Age Group":"3 to 10 years" },
    reviews:[
      { user:"Pooja M.", rating:5, comment:"Easy for my son to wear on his own, good grip too." }
    ] },

  /* ---------------- ACCESSORIES ---------------- */
  { id:401, category:"accessories", subcategory:"Bags", name:"Urban Travel Backpack",
    image:"images/bag.jpg", price:1499, oldPrice:2199, rating:4.3, ratingCount:610,
    description:"A durable travel backpack with a padded laptop compartment and multiple pockets.",
    specs:{ "Material":"Polyester", "Capacity":"35 Litres", "Laptop Sleeve":"Up to 15.6 inch", "Water Resistant":"Yes" },
    reviews:[
      { user:"Ajay S.", rating:4, comment:"Spacious and sturdy, great for weekend trips." }
    ] },
  { id:402, category:"accessories", subcategory:"Eyewear", name:"Stylish UV Protected Sunglasses",
    image:"images/sunglasses.jpg", price:1799, oldPrice:2499, rating:4.2, ratingCount:340,
    description:"Trendy sunglasses with 100% UV protection and a scratch resistant coating.",
    specs:{ "Frame Material":"Acetate", "Lens":"UV400 Protection", "Style":"Wayfarer" },
    reviews:[
      { user:"Nithya V.", rating:4, comment:"Looks premium and fits well." }
    ] }
];

/* Category metadata used to build the category tiles & tabs */
const CATEGORIES = {
  electronics: { label:"Electronics", image:"images/cat-electronics.jpg", subcategories:["TV","Mobiles","Laptops","Watches","Headphones","Fridge"] },
  dresses:     { label:"Dresses",     image:"images/cat-dresses.jpg",     subcategories:["Men","Women","Kids"] },
  footwear:    { label:"Footwear",    image:"images/cat-footwear.jpg",    subcategories:["Men","Women","Kids"] },
  accessories: { label:"Accessories", image:"images/cat-accessories.jpg", subcategories:["Bags","Eyewear"] }
};

function getProductById(id){
  return PRODUCTS.find(p => p.id === Number(id));
}
