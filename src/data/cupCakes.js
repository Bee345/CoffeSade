import CupCakeImage1 from "../../public/CupcakeImage1.jpeg";
import CupCakeImage2 from "../../public/CupcakeImage2.jpeg";
import CupCakeImage3 from "../../public/CupcakeImage3.jpeg";
import CupCakeImage4 from "../../public/CupcakeImage4.jpeg";
import CupCakeImage5 from "../../public/CupcakeImage5.jpeg";
import CupCakeImage6 from "../../public/CupcakeImage6.jpeg";
import CupCakeImage7 from "../../public/CupcakeImage7.jpeg";
import CupCakeImage8 from "../../public/CupcakeImage8.jpeg";



const cupCakes = [ 
  { 
    id: 1,
    name: "Vanilla Dream",
    price: "$3.40",
    description: "A light and fluffy vanilla bean cupcake crowned with silky Swiss meringue buttercream and edible gold dust for an ethereal touch.",
    image: CupCakeImage1,
    tags: ["Sweet", "Classic"],
    isPopular: true,
    upsell: "Pair with Espresso for $2",
    isFavorite: false
  },
  { 
    id: 2,
    name: "Chocolate Eclipse",
    price: "$4.10",
    description: "Decadent dark chocolate cupcake infused with espresso, filled with molten ganache, and topped with a glossy chocolate ganache dome.",
    image: CupCakeImage2,
    tags: ["Sweet", "Chocolate"],
    isPopular: true,
    upsell: null,
    isFavorite: false
  },
  { 
    id: 3,
    name: "Red Velvet Whisper",
    price: "$5.00",
    description: "Tangy red velvet cake baked to perfection, paired with velvety cream cheese frosting and a hint of cocoa dust for subtle elegance.",
    image: CupCakeImage3,
    tags: ["Sweet", "Classic"],
    isPopular: false,
    upsell: "Pair with Latte for $2",
    isFavorite: false
  },
  { 
    id: 4,
    name: "Salted Caramel Symphony",
    price: "$6.22",
    description: "Golden caramel cupcake swirled with house-made salted caramel, finished with a caramel buttercream swirl and fleur de sel crystals.",
    image: CupCakeImage4,
    tags: ["Sweet", "Nutty"],
    isPopular: true,
    upsell: null,
    isFavorite: false
  },
  { 
    id: 5,
    name: "Strawberry Serenade",
    price: "$3.40",
    description: "Fresh strawberry-infused cupcake batter, layered with macerated strawberries and crowned with a vibrant strawberry Swiss buttercream.",
    image: CupCakeImage5,
    tags: ["Sweet", "Fruit"],
    isPopular: true,
    upsell: "Pair with Tea for $2",
    isFavorite: false
  },
  { 
    id: 6,
    name: "Lemon Zest Reverie",
    price: "$4.10",
    description: "Bright lemon curd-filled vanilla cupcake, topped with zesty lemon buttercream and candied lemon peel for a citrus burst.",
    image: CupCakeImage6,
    tags: ["Sweet", "Citrus"],
    isPopular: false,
    upsell: null,
    isFavorite: false
  },
  { 
    id: 7,
    name: "Peanut Butter Harmony",
    price: "$2.22",
    description: "Nutty peanut butter cupcake studded with dark chocolate chunks, frosted with creamy peanut butter icing and a chocolate drizzle.",
    image: CupCakeImage7,
    tags: ["Sweet", "Nutty"],
    isPopular: true,
    upsell: "Pair with Coffee for $2",
    isFavorite: false
  },
  { 
    id: 8,
    name: "Coconut Lagoon",
    price: "$4.11",
    description: "Tropical coconut cupcake with pineapple compote core, enveloped in coconut cream cheese frosting and toasted coconut flakes.",
    image: CupCakeImage8,
    tags: ["Sweet", "Tropical"],
    isPopular: false,
    upsell: null,
    isFavorite: false
  }
];
export {cupCakes};

