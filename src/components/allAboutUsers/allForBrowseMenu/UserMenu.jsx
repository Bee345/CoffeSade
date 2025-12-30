import React, { useState, useEffect } from "react";
import Card from "../../Card.jsx";
import { menuData } from "../../../data/menuData.js";
import { espressoData } from "../../../data/esppresso.js";
import { cupCakes } from "../../../data/cupCakes.js";
import { brunchToast } from "../../../data/toast.js";
import { Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ✅ Redux */
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";

const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // ✅ Redux dispatcher

  const [activeCategory, setActiveCategory] = useState("Espresso Creations");
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    temp: "",
    taste: "",
    type: "",
    price: "",
    dietary: [],
  });

  const [favorites, setFavorites] = useState([]);

  /* Load favorites */
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (itemId) => {
    const isFavorite = favorites.includes(itemId);
    const updatedFavorites = isFavorite
      ? favorites.filter(id => id !== itemId)
      : [...favorites, itemId];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  /* Categories */
  const categories = {
    "Espresso Creations": espressoData,
    "Signature Cupcakes": cupCakes,
    "Fresh Pastries": brunchToast,
    "Complete Menu": menuData.flatMap(cat => cat.children),
  };

  /* Filtering */
  const getFilteredItems = () => {
    let items = categories[activeCategory] || [];

    if (searchTerm) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.temp || filters.taste || filters.type) {
      items = items.filter(item => {
        const hasTemp = !filters.temp || item.tags.includes(filters.temp);
        const hasTaste = !filters.taste || item.tags.includes(filters.taste);
        const hasType = !filters.type || item.tags.includes(filters.type);
        return hasTemp && hasTaste && hasType;
      });
    }

    if (filters.dietary.length > 0) {
      items = items.filter(item =>
        filters.dietary.every(diet => item.tags.includes(diet))
      );
    }

    if (filters.price === "$0-10") {
      items = items.filter(item => parseFloat(item.price.replace("$", "")) <= 10);
    } else if (filters.price === "$10+") {
      items = items.filter(item => parseFloat(item.price.replace("$", "")) > 10);
    }

    return items;
  };

  const items = getFilteredItems();

  /* ✅ Redux Cart Actions */
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleUpsell = (item) => {
    const paired = {
      ...item,
      id: `${item.id}-upsell`,
      name: `${item.name} + Pastry Bundle`,
      price: `$${(parseFloat(item.price.replace("$", "")) + 2).toFixed(2)}`
    };

    dispatch(addToCart(paired));
  };

  const filterOptions = [
    { group: "Temperature", options: ["Hot", "Cold"] },
    { group: "Taste", options: ["Sweet", "Savory"] },
    { group: "Type", options: ["Tourist Favorites"] },
    { group: "Price", options: ["$0-10", "$10+"] },
    { group: "Dietary", options: ["Vegan", "Gluten-Free"] },
  ];

  const toggleFilter = (group, option) => {
    if (group === "Dietary") {
      setFilters(prev => ({
        ...prev,
        dietary: prev.dietary.includes(option)
          ? prev.dietary.filter(d => d !== option)
          : [...prev.dietary, option]
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        [group.toLowerCase()]:
          prev[group.toLowerCase()] === option ? "" : option
      }));
    }
  };

  const clearFilters = () =>
    setFilters({ temp: "", taste: "", type: "", price: "", dietary: [] });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8 px-4 sm:px-6 lg:px-8">

      <button
        onClick={() => navigate("/app")}
        className="mb-4 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
      >
        Back to Dashboard
      </button>

      {/* Search + Filters */}
      <section className="mb-8 max-w-4xl mx-auto">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {filterOptions.map((group, i) => (
            <div key={i}>
              <label className="text-xs text-gray-500">{group.group}</label>
              <div className="flex gap-1">
                {group.options.map(option => (
                  <button
                    key={option}
                    onClick={() => toggleFilter(group.group, option)}
                    className={`px-3 py-1 rounded-full text-xs ${
                      group.group === "Dietary"
                        ? filters.dietary.includes(option)
                        : filters[group.group.toLowerCase()] === option
                      ? "bg-amber-500 text-white"
                      : "bg-gray-200"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={clearFilters}
            className="ml-auto px-3 py-1 bg-red-500 text-white rounded-full text-xs"
          >
            Clear
          </button>
        </div>
      </section>


{/* Categories Switcher */}
<section className="mb-8">
  <div className="flex overflow-x-auto gap-4 pb-3 snap-x snap-mandatory">
    {Object.keys(categories).map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`flex-shrink-0 px-6 py-3 rounded-full whitespace-nowrap transition-all ${
          activeCategory === category
            ? "bg-amber-500 text-white shadow-md"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
        }`}
      >
        {category}
      </button>
    ))}
  </div>
</section>


      {/* Items */}
      <section className="max-w-6xl mx-auto">
        {items.length ? (
          <div className="columns-2 md:columns-3 gap-6 space-y-6">
            {items.map(item => (
              <Card
                key={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                tags={item.tags}
                onAddToCart={() => handleAddToCart(item)}
                upsell={item.upsell}
                isFavorite={favorites.includes(item.id)}
                onToggleFavorite={() => toggleFavorite(item.id)}
                isPopular={item.isPopular}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No items found</p>
        )}
      </section>

      {items.length > 0 && (
        <section className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Pair your selection with a pastry for $2 more?
          </p>
          <button
            onClick={() => handleUpsell(items[0])}
            className="px-6 py-3 bg-amber-500 text-white rounded-lg"
          >
            Add Upsell
          </button>
        </section>
      )}
    </div>
  );
};

export default UserMenu;
