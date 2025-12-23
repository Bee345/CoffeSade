export const menuData = [
  {
    id: "cat-1",
    category: "Espresso Creations",
    categoryImage: "Esspresso.jpeg",
    children: [
      { id: "item-1", name: "Espresso", price: "$3.50", description: "Rich, bold single-shot espresso.", image: "CoffeeImage1.jpeg", tags: ["Hot", "Classic"], isPopular: true, upsell: "Pair with Scone for $2", isFavorite: false },
      { id: "item-2", name: "Double Espresso", price: "$4.50", description: "Twice the intensity with two espresso shots.", image: "CoffeeImage2.jpeg", tags: ["Hot", "Classic"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-3", name: "Macchiato", price: "$4.00", description: "Espresso topped with a small dollop of foam.", image: "CoffeeImage3.jpeg", tags: ["Hot"], isPopular: false, upsell: "Pair with Cupcake for $2", isFavorite: false },
      { id: "item-4", name: "Cortado", price: "$4.25", description: "Equal parts espresso and warm milk.", image: "CoffeeImage4.jpeg", tags: ["Hot"], isPopular: false, upsell: null, isFavorite: false },
      { id: "item-5", name: "Cappuccino", price: "$4.50", description: "Smooth espresso with steamed milk and foam.", image: "CoffeeImage5.jpeg", tags: ["Hot"], isPopular: true, upsell: "Pair with Pastry for $2", isFavorite: false },
      { id: "item-6", name: "Flat White", price: "$4.75", description: "Velvety espresso with micro-foamed milk.", image: "CoffeeImage6.jpeg", tags: ["Hot"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-7", name: "Café Latte", price: "$4.75", description: "Creamy espresso with steamed milk.", image: "CoffeeImage7.jpeg", tags: ["Hot"], isPopular: true, upsell: "Pair with Scone for $2", isFavorite: false },
      { id: "item-8", name: "Mocha", price: "$5.25", description: "Chocolate infused espresso latte.", image: "CoffeeImage8.jpeg", tags: ["Hot", "Sweet"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-9", name: "Caramel Macchiato", price: "$5.25", description: "Velvety espresso with caramel drizzle.", image: "CoffeeImage9.jpeg", tags: ["Hot", "Sweet"], isPopular: true, upsell: "Pair with Cupcake for $2", isFavorite: false },
      { id: "item-10", name: "Affogato", price: "$5.75", description: "Espresso poured over vanilla ice cream.", image: "CoffeeImage10.jpeg", tags: ["Hot", "Dessert"], isPopular: true, upsell: null, isFavorite: false }
    ]
  },
  {
    id: "cat-2",
    category: "Coffee Classics",
    categoryImage: "CoffeeClassic.jpeg",
    children: [
      { id: "item-11", name: "Americano", price: "$3.75", description: "Hot water blended with premium espresso.", image: "CoffeeImage11.jpeg", tags: ["Hot"], isPopular: true, upsell: "Pair with Scone for $2", isFavorite: false },
      { id: "item-12", name: "Long Black", price: "$3.75", description: "Strong, bold espresso over hot water.", image: "CoffeeImage12.jpeg", tags: ["Hot"], isPopular: false, upsell: null, isFavorite: false },
      { id: "item-13", name: "Brewed Coffee", price: "$3.25", description: "Classic slow-brewed coffee.", image: "CoffeeImage13.jpeg", tags: ["Hot"], isPopular: false, upsell: "Pair with Pastry for $2", isFavorite: false },
      { id: "item-14", name: "French Press", price: "$4.00", description: "Rich and full-bodied pressed coffee.", image: "CoffeeImage14.jpeg", tags: ["Hot"], isPopular: false, upsell: null, isFavorite: false },
      { id: "item-15", name: "Pour-Over Coffee", price: "$4.25", description: "Manually crafted clean-flavor brew.", image: "CoffeeImage15.jpeg", tags: ["Hot"], isPopular: false, upsell: "Pair with Cupcake for $2", isFavorite: false },
      { id: "item-16", name: "Iced Coffee", price: "$3.85", description: "Chilled brewed coffee over ice.", image: "CoffeeImage16.jpeg", tags: ["Cold"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-17", name: "Cold Brew", price: "$4.25", description: "Slow-steeped cold brew with deep flavor.", image: "CoffeeImage17.jpeg", tags: ["Cold"], isPopular: true, upsell: "Pair with Scone for $2", isFavorite: false }
    ]
  },
  {
    id: "cat-3",
    category: "Latte Artistry",
    categoryImage: "LatteArtistry.jpeg",
    children: [
      { id: "item-18", name: "Vanilla Latte", price: "$5.00", description: "Creamy latte infused with vanilla.", image: "CoffeeImage18.jpeg", tags: ["Hot", "Sweet"], isPopular: true, upsell: "Pair with Pastry for $2", isFavorite: false },
      { id: "item-19", name: "Caramel Latte", price: "$5.25", description: "Latte with buttery caramel syrup.", image: "CoffeeImage19.jpeg", tags: ["Hot", "Sweet"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-20", name: "Hazelnut Latte", price: "$5.25", description: "Smooth latte with hazelnut flavor.", image: "CoffeeImage20.jpeg", tags: ["Hot", "Nutty"], isPopular: false, upsell: "Pair with Cupcake for $2", isFavorite: false },
      { id: "item-21", name: "Honey Cinnamon Latte", price: "$5.50", description: "Sweet honey and warm cinnamon.", image: "CoffeeImage21.jpeg", tags: ["Hot", "Spiced"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-22", name: "Matcha Latte", price: "$5.50", description: "Smooth Japanese matcha with milk.", image: "CoffeeImage22.jpeg", tags: ["Hot", "Green"], isPopular: true, upsell: "Pair with Scone for $2", isFavorite: false },
      { id: "item-23", name: "Red Velvet Latte", price: "$5.75", description: "Velvety red cocoa latte.", image: "CoffeeImage23.jpeg", tags: ["Hot", "Sweet"], isPopular: false, upsell: null, isFavorite: false },
      { id: "item-24", name: "Rose Latte", price: "$5.75", description: "Floral rose-infused creamy latte.", image: "CoffeeImage24.jpeg", tags: ["Hot", "Floral"], isPopular: false, upsell: "Pair with Pastry for $2", isFavorite: false },
      { id: "item-25", name: "Mocha Art Latte", price: "$5.85", description: "Mocha topped with art-style foam.", image: "CoffeeImage25.jpeg", tags: ["Hot", "Sweet"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-26", name: "Seasonal Latte Art Special", price: "$6.00", description: "Unique seasonal latte design.", image: "CoffeeImage26.jpeg", tags: ["Hot", "Seasonal"], isPopular: true, upsell: "Pair with Cupcake for $2", isFavorite: false }
    ]
  },
  {
    id: "cat-4",
    category: "House Special Drinks",
    categoryImage: "House Special Drinks.jpeg",
    children: [
      { id: "item-27", name: "Coconut Cloud Latte", price: "$5.75", description: "Creamy coconut-infused latte.", image: "CoffeeImage27.jpeg", tags: ["Hot", "Sweet"], isPopular: true, upsell: "Pair with Scone for $2", isFavorite: false },
      { id: "item-28", name: "Brown Sugar Cold Foam Latte", price: "$5.85", description: "Iced latte with brown sugar foam.", image: "CoffeeImage28.jpeg", tags: ["Cold", "Sweet"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-29", name: "Spiced Ginger Latte", price: "$5.50", description: "Warm latte with ginger spice.", image: "CoffeeImage29.jpeg", tags: ["Hot", "Spiced"], isPopular: false, upsell: "Pair with Pastry for $2", isFavorite: false },
      { id: "item-30", name: "Honey Almond Milk Latte", price: "$5.75", description: "Honey-sweetened almond milk latte.", image: "CoffeeImage30.jpeg", tags: ["Hot", "Sweet"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-31", name: "Choco-Mint Chill", price: "$5.50", description: "Mint chocolate iced drink.", image: "CoffeeImage31.jpeg", tags: ["Cold", "Sweet"], isPopular: true, upsell: "Pair with Cupcake for $2", isFavorite: false },
      { id: "item-32", name: "Pumpkin Spice Latte", price: "$6.00", description: "Seasonal pumpkin spice blend.", image: "CoffeeImage32.jpeg", tags: ["Hot", "Seasonal"], isPopular: true, upsell: null, isFavorite: false }
    ]
  },
  {
    id: "cat-5",
    category: "Frappes & Blended Drinks",
    categoryImage: "Frappes & Blended Drinks.jpeg",
    children: [
      { id: "item-33", name: "Coffee Frappe", price: "$5.00", description: "Blended iced coffee delight.", image: "CoffeeImage35.jpeg", tags: ["Cold"], isPopular: true, upsell: "Pair with Scone for $2", isFavorite: false },
      { id: "item-34", name: "Mocha Frappe", price: "$5.25", description: "Chocolate blended frappe.", image: "CoffeeImage36.jpeg", tags: ["Cold", "Sweet"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-35", name: "Caramel Frappe", price: "$5.25", description: "Creamy caramel blended drink.", image: "CoffeeImage37.jpeg", tags: ["Cold", "Sweet"], isPopular: true, upsell: "Pair with Pastry for $2", isFavorite: false },
      { id: "item-36", name: "Vanilla Cream Frappe", price: "$5.00", description: "Smooth vanilla frappe.", image: "CoffeeImage38.jpeg", tags: ["Cold", "Sweet"], isPopular: false, upsell: null, isFavorite: false },
      { id: "item-37", name: "Oreo Cookies Frappe", price: "$5.50", description: "Blended Oreos with cream.", image: "CoffeeImage39.jpeg", tags: ["Cold", "Sweet"], isPopular: true, upsell: "Pair with Cupcake for $2", isFavorite: false },
      { id: "item-38", name: "Chocolate Milkshake", price: "$4.85", description: "Classic chocolate shake.", image: "CoffeeImage40.jpeg", tags: ["Cold", "Sweet"], isPopular: false, upsell: null, isFavorite: false },
      { id: "item-39", name: "Fruit Smoothie Blend", price: "$5.00", description: "Mixed fruit blended smoothie.", image: "CoffeeImage41.jpeg", tags: ["Cold", "Healthy"], isPopular: true, upsell: "Pair with Scone for $2", isFavorite: false }
    ]
  },
  {
    id: "cat-6",
    category: "Teas & Infusions",
    categoryImage: "Teas & Infusions.jpeg",
    children: [
      { id: "item-40", name: "English Breakfast Tea", price: "$3.00", description: "Classic robust black tea.", image: "CoffeeImage42.jpeg", tags: ["Hot"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-41", name: "Earl Grey", price: "$3.25", description: "Floral bergamot black tea.", image: "CoffeeImage43.jpeg", tags: ["Hot", "Floral"], isPopular: false, upsell: "Pair with Scone for $2", isFavorite: false },
      { id: "item-42", name: "Green Tea", price: "$3.00", description: "Light and calming green tea.", image: "CoffeeImage44.jpeg", tags: ["Hot", "Healthy"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-43", name: "Chamomile", price: "$3.00", description: "Relaxing floral herbal tea.", image: "CoffeeImage45.jpeg", tags: ["Hot", "Herbal"], isPopular: false, upsell: "Pair with Pastry for $2", isFavorite: false },
      { id: "item-44", name: "Hibiscus Tea", price: "$3.25", description: "Tart red herbal infusion.", image: "CoffeeImage46.jpeg", tags: ["Hot", "Herbal"], isPopular: false, upsell: null, isFavorite: false },
      { id: "item-45", name: "Lemon Ginger Tea", price: "$3.25", description: "Warm lemon and spicy ginger.", image: "CoffeeImage47.jpeg", tags: ["Hot", "Spiced"], isPopular: true, upsell: "Pair with Cupcake for $2", isFavorite: false },
      { id: "item-46", name: "Chai Tea", price: "$3.50", description: "Spiced black tea blend.", image: "CoffeeImage48.jpeg", tags: ["Hot", "Spiced"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-47", name: "Iced Lemon Tea", price: "$3.50", description: "Chilled lemon-infused tea.", image: "CoffeeImage49.jpeg", tags: ["Cold"], isPopular: true, upsell: "Pair with Scone for $2", isFavorite: false },
      { id: "item-48", name: "Milk Tea", price: "$3.75", description: "Black tea brewed with milk.", image: "CoffeeImage50.jpeg", tags: ["Hot", "Sweet"], isPopular: true, upsell: null, isFavorite: false }
    ]
  },
  {
    id: "cat-7",
    category: "Brunch Toasts",
    categoryImage: "Brunch Toasts.jpeg",
    children: [
      { id: "item-49", name: "Classic Avocado Toast", price: "$7.50", description: "Fresh avocado on toasted sourdough.", image: "CoffeeImage51.jpeg", tags: ["Healthy", "Brunch"], isPopular: true, upsell: "Pair with Latte for $2", isFavorite: false },
      { id: "item-50", name: "Honey Berry Toast", price: "$6.75", description: "Greek yogurt, honey & mixed berries.", image: "CoffeeImage52.jpeg", tags: ["Sweet", "Brunch"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-51", name: "Smoked Salmon Toast", price: "$8.50", description: "Salmon with cream cheese & herbs.", image: "CoffeeImage53.jpeg", tags: ["Protein", "Brunch"], isPopular: false, upsell: "Pair with Tea for $2", isFavorite: false },
      { id: "item-52", name: "Banana Cinnamon Crunch Toast", price: "$6.50", description: "Banana, honey & cinnamon.", image: "CoffeeImage54.jpeg", tags: ["Sweet", "Brunch"], isPopular: false, upsell: null, isFavorite: false },
      { id: "item-53", name: "Ricotta & Fig Toast", price: "$7.00", description: "Creamy ricotta with fresh figs.", image: "CoffeeImage55.jpeg", tags: ["Sweet", "Brunch"], isPopular: false, upsell: "Pair with Latte for $2", isFavorite: false },
      { id: "item-54", name: "Tomato Basil Bruschetta Toast", price: "$6.75", description: "Fresh tomato, basil & olive oil.", image: "CoffeeImage56.jpeg", tags: ["Healthy", "Brunch"], isPopular: true, upsell: null, isFavorite: false }
    ]
  },
  {
    id: "cat-8",
    category: "Avocado Smashes",
    categoryImage: "Avocado Smashes.jpeg",
    children: [
      { id: "item-55", name: "Classic Avocado Smash", price: "$7.50", description: "Mashed avocado with olive oil.", image: "CoffeeImage56.jpeg", tags: ["Healthy"], isPopular: true, upsell: "Pair with Coffee for $2", isFavorite: false },
      { id: "item-56", name: "Avo & Poached Egg Smash", price: "$8.75", description: "Avocado smash topped with poached egg.", image: "CoffeeImage57.jpeg", tags: ["Protein", "Healthy"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-57", name: "Chili Lime Avocado Smash", price: "$7.75", description: "Zesty lime and chili avocado mix.", image: "CoffeeImage58.jpeg", tags: ["Spicy", "Healthy"], isPopular: false, upsell: "Pair with Tea for $2", isFavorite: false },
      { id: "item-58", name: "Avo Feta Smash", price: "$8.25", description: "Crumbled feta on avo smash.", image: "CoffeeImage59.jpeg", tags: ["Cheesy", "Healthy"], isPopular: true, upsell: null, isFavorite: false }
    ]
  },
  {
    id: "cat-9",
    category: "Signature Cupcakes",
    categoryImage: "Signature Cupcakes.jpeg",
    children: [
      { id: "item-59", name: "Red Velvet Cupcake", price: "$4.00", description: "Soft red velvet topped with cream cheese.", image: "CoffeeImage60.jpeg", tags: ["Sweet"], isPopular: true, upsell: "Pair with Latte for $2", isFavorite: false },
      { id: "item-60", name: "Chocolate Fudge Cupcake", price: "$4.25", description: "Rich chocolate cupcake with fudge frosting.", image: "CoffeeImage61.jpeg", tags: ["Sweet"], isPopular: true, upsell: null, isFavorite: false },
      { id: "item-61", name: "Vanilla Cream Cupcake", price: "$3.85", description: "Classic vanilla cupcake.", image: "CoffeeImage62.jpeg", tags: ["Sweet"], isPopular: false, upsell: "Pair with Coffee for $2", isFavorite: false },
      { id: "item-62", name: "Lemon Zest Cupcake", price: "$3.95", description: "Citrusy lemon cupcake.", image: "CoffeeImage63.jpeg", tags: ["Sweet", "Citrus"], isPopular: false, upsell: null, isFavorite: false },
      { id: "item-63", name: "Caramel Crunch Cupcake", price: "$4.25", description: "Caramel cupcake with crunchy topping.", image: "CoffeeImage64.jpeg", tags: ["Sweet"], isPopular: true, upsell: "Pair with Tea for $2", isFavorite: false }
    ]
  },
  {
    id: "cat-10", 
    category: "Artisan Scones",
    categoryImage: "Artisan Scones.jpeg",
    children: [
      { id: "item-64", name: "Classic Butter Scone", price: "$3.50", description: "Buttery flaky scone.", image: "CoffeeImage65.jpeg", tags: ["Classic"], isPopular: false, upsell: null, isFavorite: false },
      { id: "item-65", name: "Blueberry Scone", price: "$4.00", description: "Soft crumb with fresh blueberries baked inside.", image: "CoffeeImage66.jpeg", tags: ["Sweet"], isPopular: true, upsell: "Pair with Coffee for $2", isFavorite: false },
      { id: "item-66", name: "Lemon Glazed Scone", price: "$4.20", description: "Bright citrusy flavor topped with a zesty lemon glaze.", image: "CoffeeImage67.jpeg", tags: ["Citrus"], isPopular: false, upsell: null, isFavorite: false },
      { id: "item-67", name: "Chocolate Chip Scone", price: "$4.50", description: "Golden scone filled with rich chocolate chips.", image: "CoffeeImage68.jpeg", tags: ["Sweet"], isPopular: true, upsell: "Pair with Latte for $2", isFavorite: false },
      { id: "item-68", name: "Cranberry Orange Scone", price: "$4.25", description: "Sweet-tart cranberries paired with fresh orange zest.", image: "CoffeeImage69.jpeg", tags: ["Citrus"], isPopular: false, upsell: null, isFavorite: false },
      { id: "item-69", name: "Maple Pecan Scone", price: "$4.75", description: "Warm maple flavor with crunchy toasted pecans.", image: "CoffeeImage70.jpeg", tags: ["Nutty"], isPopular: true, upsell: "Pair with Tea for $2", isFavorite: false },
      { id: "item-70", name: "Raspberry White Chocolate Scone", price: "$5.00", description: "Sweet raspberries blended with creamy white chocolate chunks.", image: "CoffeeImage71.jpeg", tags: ["Sweet"], isPopular: false, upsell: null, isFavorite: false }
    ]
  }
];

// export const menuData = [
//   {
//     id: "cat-1",
//     category: "Espresso Creations",
//     categoryImage: "/images/categories/espresso-creations.jpg",
//     children: [
//       { id: "item-1", name: "Espresso", price: "$3.50", description: "Rich, bold single-shot espresso.", image: "/images/espresso.jpg", tags: ["hot", "classic"], isPopular: "true"},
//       { id: "item-2", name: "Double Espresso", price: "$4.50", description: "Twice the intensity with two espresso shots.", image: "/images/double-espresso.jpg", tags: ["hot", "classic"], isPopular: true },
//       { id: "item-3", name: "Macchiato", price: "$4.00", description: "Espresso topped with a small dollop of foam.", image: "/images/macchiato.jpg", tags: ["hot"], isPopular: false },
//       { id: "item-4", name: "Cortado", price: "$4.25", description: "Equal parts espresso and warm milk.", image: "/images/cortado.jpg", tags: ["hot"], isPopular: false },
//       { id: "item-5", name: "Cappuccino", price: "$4.50", description: "Smooth espresso with steamed milk and foam.", image: "/images/cappuccino.jpg", tags: ["hot"], isPopular: true },
//       { id: "item-6", name: "Flat White", price: "$4.75", description: "Velvety espresso with micro-foamed milk.", image: "/images/flat-white.jpg", tags: ["hot"], isPopular: true },
//       { id: "item-7", name: "Café Latte", price: "$4.75", description: "Creamy espresso with steamed milk.", image: "/images/latte.jpg", tags: ["hot"], isPopular: true },
//       { id: "item-8", name: "Mocha", price: "$5.25", description: "Chocolate infused espresso latte.", image: "/images/mocha.jpg", tags: ["hot", "sweet"], isPopular: true },
//       { id: "item-9", name: "Caramel Macchiato", price: "$5.25", description: "Velvety espresso with caramel drizzle.", image: "/images/caramel-macchiato.jpg", tags: ["hot", "sweet"], isPopular: true },
//       { id: "item-10", name: "Affogato", price: "$5.75", description: "Espresso poured over vanilla ice cream.", image: "/images/affogato.jpg", tags: ["hot", "dessert"], isPopular: true }
//     ]
//   },
//   {
//     id: "cat-2",
//     category: "Coffee Classics",
//     categoryImage: "/images/categories/coffee-classics.jpg",
//     children: [
//       { id: "item-11", name: "Americano", price: "$3.75", description: "Hot water blended with premium espresso.", image: "/images/americano.jpg", tags: ["hot"], isPopular: true },
//       { id: "item-12", name: "Long Black", price: "$3.75", description: "Strong, bold espresso over hot water.", image: "/images/long-black.jpg", tags: ["hot"], isPopular: false },
//       { id: "item-13", name: "Brewed Coffee", price: "$3.25", description: "Classic slow-brewed coffee.", image: "/images/brewed-coffee.jpg", tags: ["hot"], isPopular: false },
//       { id: "item-14", name: "French Press", price: "$4.00", description: "Rich and full-bodied pressed coffee.", image: "/images/french-press.jpg", tags: ["hot"], isPopular: false },
//       { id: "item-15", name: "Pour-Over Coffee", price: "$4.25", description: "Manually crafted clean-flavor brew.", image: "/images/pour-over.jpg", tags: ["hot"], isPopular: false },
//       { id: "item-16", name: "Iced Coffee", price: "$3.85", description: "Chilled brewed coffee over ice.", image: "/images/iced-coffee.jpg", tags: ["cold"], isPopular: true },
//       { id: "item-17", name: "Cold Brew", price: "$4.25", description: "Slow-steeped cold brew with deep flavor.", image: "/images/cold-brew.jpg", tags: ["cold"], isPopular: true }
//     ]
//   },
//   {
//     id: "cat-3",
//     category: "Latte Artistry",
//     categoryImage: "/images/categories/latte-artistry.jpg",
//     children: [
//       { id: "item-18", name: "Vanilla Latte", price: "$5.00", description: "Creamy latte infused with vanilla.", image: "/images/vanilla-latte.jpg", tags: ["hot", "sweet"], isPopular: true },
//       { id: "item-19", name: "Caramel Latte", price: "$5.25", description: "Latte with buttery caramel syrup.", image: "/images/caramel-latte.jpg", tags: ["hot", "sweet"], isPopular: true },
//       { id: "item-20", name: "Hazelnut Latte", price: "$5.25", description: "Smooth latte with hazelnut flavor.", image: "/images/hazelnut-latte.jpg", tags: ["hot", "nutty"], isPopular: false },
//       { id: "item-21", name: "Honey Cinnamon Latte", price: "$5.50", description: "Sweet honey and warm cinnamon.", image: "/images/honey-cinnamon-latte.jpg", tags: ["hot", "spiced"], isPopular: true },
//       { id: "item-22", name: "Matcha Latte", price: "$5.50", description: "Smooth Japanese matcha with milk.", image: "/images/matcha-latte.jpg", tags: ["hot", "green"], isPopular: true },
//       { id: "item-23", name: "Red Velvet Latte", price: "$5.75", description: "Velvety red cocoa latte.", image: "/images/red-velvet-latte.jpg", tags: ["hot", "sweet"], isPopular: false },
//       { id: "item-24", name: "Rose Latte", price: "$5.75", description: "Floral rose-infused creamy latte.", image: "/images/rose-latte.jpg", tags: ["hot", "floral"], isPopular: false },
//       { id: "item-25", name: "Mocha Art Latte", price: "$5.85", description: "Mocha topped with art-style foam.", image: "/images/mocha-art-latte.jpg", tags: ["hot", "sweet"], isPopular: true },
//       { id: "item-26", name: "Seasonal Latte Art Special", price: "$6.00", description: "Unique seasonal latte design.", image: "/images/seasonal-latte.jpg", tags: ["hot", "seasonal"], isPopular: true }
//     ]
//   },
//   {
//     id: "cat-4",
//     category: "House Special Drinks",
//     categoryImage: "/images/categories/house-specials.jpg",
//     children: [
//       { id: "item-27", name: "Coconut Cloud Latte", price: "$5.75", description: "Creamy coconut-infused latte.", image: "/images/coconut-cloud.jpg", tags: ["hot", "sweet"], isPopular: true },
//       { id: "item-28", name: "Brown Sugar Cold Foam Latte", price: "$5.85", description: "Iced latte topped with brown sugar foam.", image: "/images/brown-sugar-foam.jpg", tags: ["cold", "sweet"], isPopular: true },
//       { id: "item-29", name: "Spiced Ginger Latte", price: "$5.50", description: "Warm latte with ginger spice.", image: "/images/ginger-latte.jpg", tags: ["hot", "spiced"], isPopular: false },
//       { id: "item-30", name: "Honey Almond Milk Latte", price: "$5.75", description: "Honey-sweetened almond milk latte.", image: "/images/honey-almond.jpg", tags: ["hot", "sweet"], isPopular: true },
//       { id: "item-31", name: "Choco-Mint Chill", price: "$5.50", description: "Mint chocolate iced drink.", image: "/images/choco-mint.jpg", tags: ["cold", "sweet"], isPopular: true },
//       { id: "item-32", name: "Pumpkin Spice Latte (Seasonal)", price: "$6.00", description: "Seasonal pumpkin spice blend.", image: "/images/psl.jpg", tags: ["hot", "seasonal"], isPopular: true }
//     ]
//   },
//   {
//     id: "cat-5",
//     category: "Frappes & Blended Drinks",
//     categoryImage: "/images/categories/frappes.jpg",
//     children: [
//       { id: "item-33", name: "Coffee Frappe", price: "$5.00", description: "Blended iced coffee delight.", image: "/images/coffee-frappe.jpg", tags: ["cold"], isPopular: true },
//       { id: "item-34", name: "Mocha Frappe", price: "$5.25", description: "Chocolate blended frappe.", image: "/images/mocha-frappe.jpg", tags: ["cold", "sweet"], isPopular: true },
//       { id: "item-35", name: "Caramel Frappe", price: "$5.25", description: "Creamy caramel blended drink.", image: "/images/caramel-frappe.jpg", tags: ["cold", "sweet"], isPopular: true },
//       { id: "item-36", name: "Vanilla Cream Frappe", price: "$5.00", description: "Smooth vanilla frappe.", image: "/images/vanilla-frappe.jpg", tags: ["cold", "sweet"], isPopular: false },
//       { id: "item-37", name: "Oreo Cookies Frappe", price: "$5.50", description: "Blended Oreos with cream.", image: "/images/oreo-frappe.jpg", tags: ["cold", "sweet"], isPopular: true },
//       { id: "item-38", name: "Chocolate Milkshake", price: "$4.85", description: "Classic chocolate shake.", image: "/images/chocolate-milkshake.jpg", tags: ["cold", "sweet"], isPopular: false },
//       { id: "item-39", name: "Fruit Smoothie Blend", price: "$5.00", description: "Mixed fruit blended smoothie.", image: "/images/fruit-smoothie.jpg", tags: ["cold", "healthy"], isPopular: true }
//     ]
//   },
//   {
//     id: "cat-6",
//     category: "Teas & Infusions",
//     categoryImage: "/images/categories/teas.jpg",
//     children: [
//       { id: "item-40", name: "English Breakfast Tea", price: "$3.00", description: "Classic robust black tea.", image: "/images/english-breakfast.jpg", tags: ["hot"], isPopular: true },
//       { id: "item-41", name: "Earl Grey", price: "$3.25", description: "Floral bergamot black tea.", image: "/images/earl-grey.jpg", tags: ["hot", "floral"], isPopular: false },
//       { id: "item-42", name: "Green Tea", price: "$3.00", description: "Light and calming green tea.", image: "/images/green-tea.jpg", tags: ["hot", "healthy"], isPopular: true },
//       { id: "item-43", name: "Chamomile", price: "$3.00", description: "Relaxing floral herbal tea.", image: "/images/chamomile.jpg", tags: ["hot", "herbal"], isPopular: false },
//       { id: "item-44", name: "Hibiscus Tea", price: "$3.25", description: "Tart red herbal infusion.", image: "/images/hibiscus.jpg", tags: ["hot", "herbal"], isPopular: false },
//       { id: "item-45", name: "Lemon Ginger Tea", price: "$3.25", description: "Warm lemon and spicy ginger.", image: "/images/lemon-ginger.jpg", tags: ["hot", "spiced"], isPopular: true },
//       { id: "item-46", name: "Chai Tea", price: "$3.50", description: "Spiced black tea blend.", image: "/images/chai.jpg", tags: ["hot", "spiced"], isPopular: true },
//       { id: "item-47", name: "Iced Lemon Tea", price: "$3.50", description: "Chilled lemon-infused tea.", image: "/images/iced-lemon-tea.jpg", tags: ["cold"], isPopular: true },
//       { id: "item-48", name: "Milk Tea", price: "$3.75", description: "Black tea brewed with milk.", image: "/images/milk-tea.jpg", tags: ["hot", "sweet"], isPopular: true }
//     ]
//   },
//   {
//     id: "cat-7",
//     category: "Brunch Toasts",
//     categoryImage: "/images/categories/brunch-toasts.jpg",
//     children: [
//       { id: "item-49", name: "Classic Avocado Toast", price: "$7.50", description: "Fresh avocado on toasted sourdough.", image: "/images/avo-toast.jpg", tags: ["healthy", "brunch"], isPopular: true },
//       { id: "item-50", name: "Honey Berry Toast", price: "$6.75", description: "Greek yogurt, honey & mixed berries.", image: "/images/honey-berry-toast.jpg", tags: ["sweet", "brunch"], isPopular: true },
//       { id: "item-51", name: "Smoked Salmon Toast", price: "$8.50", description: "Salmon with cream cheese & herbs.", image: "/images/salmon-toast.jpg", tags: ["protein", "brunch"], isPopular: false },
//       { id: "item-52", name: "Banana Cinnamon Crunch Toast", price: "$6.50", description: "Banana, honey & cinnamon.", image: "/images/banana-toast.jpg", tags: ["sweet", "brunch"], isPopular: false },
//       { id: "item-53", name: "Ricotta & Fig Toast", price: "$7.00", description: "Creamy ricotta with fresh figs.", image: "/images/fig-toast.jpg", tags: ["sweet", "brunch"], isPopular: false },
//       { id: "item-54", name: "Tomato Basil Bruschetta Toast", price: "$6.75", description: "Fresh tomato, basil & olive oil.", image: "/images/bruschetta-toast.jpg", tags: ["healthy", "brunch"], isPopular: true }
//     ]
//   },
//   {
//     id: "cat-8",
//     category: "Avocado Smashes",
//     categoryImage: "/images/categories/avocado-smashes.jpg",
//     children: [
//       { id: "item-55", name: "Classic Avocado Smash", price: "$7.50", description: "Mashed avocado with olive oil.", image: "/images/avo-smash.jpg", tags: ["healthy"], isPopular: true },
//       { id: "item-56", name: "Avo & Poached Egg Smash", price: "$8.75", description: "Avocado smash topped with poached egg.", image: "/images/avo-egg-smash.jpg", tags: ["protein", "healthy"], isPopular: true },
//       { id: "item-57", name: "Chili Lime Avocado Smash", price: "$7.75", description: "Zesty lime and chili avocado mix.", image: "/images/chili-lime-smash.jpg", tags: ["spicy", "healthy"], isPopular: false },
//       { id: "item-58", name: "Avo Feta Smash", price: "$8.25", description: "Crumbled feta on avo smash.", image: "/images/avo-feta.jpg", tags: ["cheesy", "healthy"], isPopular: true }
//     ]
//   },
//   {
//     id: "cat-9",
//     category: "Signature Cupcakes",
//     categoryImage: "/images/categories/signature-cupcakes.jpg",
//     children: [
//       { id: "item-59", name: "Red Velvet Cupcake", price: "$4.00", description: "Soft red velvet topped with cream cheese.", image: "/images/red-velvet.jpg", tags: ["sweet"], isPopular: true },
//       { id: "item-60", name: "Chocolate Fudge Cupcake", price: "$4.25", description: "Rich chocolate cupcake with fudge frosting.", image: "/images/chocolate-fudge.jpg", tags: ["sweet"], isPopular: true },
//       { id: "item-61", name: "Vanilla Cream Cupcake", price: "$3.85", description: "Classic vanilla cupcake.", image: "/images/vanilla-cupcake.jpg", tags: ["sweet"], isPopular: false },
//       { id: "item-62", name: "Lemon Zest Cupcake", price: "$3.95", description: "Citrusy lemon cupcake.", image: "/images/lemon-cupcake.jpg", tags: ["sweet", "citrus"], isPopular: false },
//       { id: "item-63", name: "Caramel Crunch Cupcake", price: "$4.25", description: "Caramel cupcake with crunchy topping.", image: "/images/caramel-cupcake.jpg", tags: ["sweet"], isPopular: true }
//     ]
//   },
//   {
//     id: "cat-10",
//     category: "Artisan Scones",
//     categoryImage: "/images/categories/artisan-scones.jpg",
//     children: [
//       { id: "item-64", name: "Classic Butter Scone", price: "$3.50", description: "Buttery flaky scone.", image: "/images/butter-scone.jpg"}
//     ]
// }
// ];