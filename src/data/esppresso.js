import EspressoImage1 from "../../public/EspressoImage1.jpeg";
import EspressoImage2 from "../../public/EspressoImage2.jpeg";
import EspressoImage3 from "../../public/EspressoImage3.jpeg";
import EspressoImage4 from "../../public/EspressoImage4.jpeg";
import EspressoImage5 from "../../public/EspressoImage5.jpeg";
import EspressoImage6 from "../../public/EspressoImage6.jpeg";
import EspressoImage7 from "../../public/EspressoImage7.jpeg";
import EspressoImage8 from "../../public/EspressoImage8.jpeg";

const espressoData = [ 
  { 
    id: 1,
    name: "Espresso",
    price: "$3.00",
    description: "A rich and bold shot of pure espresso.",
    image: EspressoImage1,
    tags: ["Hot", "Classic"],
    isPopular: true,
    upsell: "Pair with Scone for $2",
    isFavorite: false
  },
  { 
    id: 2,
    name: "Cappuccino",
    price: "$4.00",
    description: "Espresso with steamed milk and a thick layer of foam.",
    image: EspressoImage2,
    tags: ["Hot", "Milky"],
    isPopular: true,
    upsell: null,
    isFavorite: false
  },
  { 
    id: 3,
    name: "Latte",
    price: "$4.50",
    description: "Smooth espresso with steamed milk and a light layer of foam.",
    image: EspressoImage3,
    tags: ["Hot", "Milky"],
    isPopular: true,
    upsell: "Pair with Cupcake for $2",
    isFavorite: false
  },
  { 
    id: 4,
    name: "Americano",
    price: "$3.50",
    description: "Espresso diluted with hot water for a lighter taste.",
    image: EspressoImage4,
    tags: ["Hot", "Classic"],
    isPopular: false,
    upsell: null,
    isFavorite: false
  },
  { 
    id: 5,
    name: "Flat White",
    price: "$4.25",
    description: "Espresso with steamed milk, no foam.",
    image: EspressoImage5,
    tags: ["Hot", "Milky"],
    isPopular: true,
    upsell: "Pair with Pastry for $2",
    isFavorite: false
  },
  { 
    id: 6,
    name: "Mocha",
    price: "$5.00",
    description: "Espresso with chocolate syrup, steamed milk, and whipped cream.",
    image: EspressoImage6,
    tags: ["Hot", "Sweet"],
    isPopular: true,
    upsell: null,
    isFavorite: false
  },
  { 
    id: 7,
    name: "Macchiato",
    price: "$3.75",
    description: "Espresso 'stained' with a small amount of foamed milk.",
    image: EspressoImage7,
    tags: ["Hot", "Classic"],
    isPopular: false,
    upsell: "Pair with Scone for $2",
    isFavorite: false
  },
  { 
    id: 8,
    name: "Cortado",
    price: "$5.22",
    description: "Equal parts espresso and steamed milk for a balanced flavor.",
    image: EspressoImage8,
    tags: ["Hot", "Milky"],
    isPopular: false,
    upsell: null,
    isFavorite: false
  }
];

export {espressoData};