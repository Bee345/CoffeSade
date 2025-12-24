import React, { useState, useEffect } from "react";
import Card from "../../Card.jsx"; // Reusable Card (fixed import path based on tree)
import { menuData } from "../../../data/menuData.js"; // Your full menu data
import { espressoData } from "../../../data/esppresso.js"; // Your espresso data
import { cupCakes } from "../../../data/cupCakes.js"; // Your cupcakes data
import { brunchToast } from "../../../data/toast.js"; // Mock for pastries (adjust to your pastries file)
import { Search, Filter } from "lucide-react"; // Icons for search/filter
import { useNavigate } from "react-router-dom"; // For back navigation

const UserMenu = () => {
  const navigate = useNavigate(); // For back to dashboard
  const [activeCategory, setActiveCategory] = useState("Espresso Creations"); // Current category
  const [searchTerm, setSearchTerm] = useState(""); // Search query
  const [filters, setFilters] = useState({ // Active filters
    temp: "", // Hot/Cold
    taste: "", // Sweet/Savory
    type: "", // Tourist Favorites
    price: "", // $0-10, $10+
    dietary: [], // Vegan, Gluten-Free
  });
  const [cart, setCart] = useState([]); // Mock cart state (update in parent if needed)
  const [favorites, setFavorites] = useState([]); // Local favorites from localStorage

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to localStorage when toggled
  const toggleFavorite = (itemId) => {
    const isFavorite = favorites.includes(itemId);
    const updatedFavorites = isFavorite 
      ? favorites.filter(id => id !== itemId)
      : [...favorites, itemId];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Category data (from your files; flatMap menuData for "Complete Menu")
  const categories = {
    "Espresso Creations": espressoData,
    "Signature Cupcakes": cupCakes,
    "Fresh Pastries": brunchToast, // Mock—replace with pastries data
    "Complete Menu": menuData.flatMap(cat => cat.children), // Flatten all children for full menu
  };

  // Get filtered items (handle description vs desc)
  const getFilteredItems = () => {
    let items = categories[activeCategory] || [];
    
    // Search filter
    if (searchTerm) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) // Use description
      );
    }

    // Tag filters (Hot/Cold, Sweet/Savory, Tourist Favorites)
    if (filters.temp || filters.taste || filters.type) {
      items = items.filter(item => {
        const hasTemp = !filters.temp || item.tags.includes(filters.temp);
        const hasTaste = !filters.taste || item.tags.includes(filters.taste);
        const hasType = !filters.type || item.tags.includes(filters.type);
        return hasTemp && hasTaste && hasType;
      });
    }

    // Dietary (vegan/gluten-free)
    if (filters.dietary.length > 0) {
      items = items.filter(item => filters.dietary.every(diet => item.tags.includes(diet)));
    }

    // Price filter (assume price is number; parse from string if needed)
    if (filters.price === "$0-10") {
      items = items.filter(item => parseFloat(item.price.replace("$", "")) <= 10);
    } else if (filters.price === "$10+") {
      items = items.filter(item => parseFloat(item.price.replace("$", "")) > 10);
    }

    return items;
  };

  const items = getFilteredItems();

  const handleAddToCart = (item) => {
    // Mock add to cart (update state or dispatch)
    setCart([...cart, item]);
    console.log("Added to cart:", item.name); // Replace with real cart logic
  };

  const handleUpsell = (item) => {
    // Mock upsell (add paired item to cart)
    const paired = { ...item, name: `${item.name} + Pastry Bundle`, price: `$${(parseFloat(item.price.replace("$", "")) + 2).toFixed(2)}` };
    setCart([...cart, paired]);
    console.log("Upsell added:", paired.name);
  };

  // Filter chips
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
        dietary: prev.dietary.includes(option) ? prev.dietary.filter(d => d !== option) : [...prev.dietary, option]
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        [group.toLowerCase()]: prev[group.toLowerCase()] === option ? "" : option
      }));
    }
  };

  const clearFilters = () => setFilters({ temp: "", taste: "", type: "", price: "", dietary: [] });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <button 
        onClick={() => navigate("/app")} 
        className="mb-4 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
      >
        Back to Dashboard
      </button>

      {/* Header: Search + Filters */}
      <section className="mb-8 max-w-4xl mx-auto">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto pb-2">
          {filterOptions.map((group, gIdx) => (
            <div key={gIdx} className="flex flex-col min-w-max">
              <label className="text-xs text-gray-500 mb-1 capitalize">{group.group}</label>
              <div className="flex gap-1">
                {group.options.map(option => (
                  <button
                    key={option}
                    onClick={() => toggleFilter(group.group, option)}
                    className={`px-3 py-1 rounded-full text-xs transition-colors ${
                      (group.group === "Dietary" ? filters.dietary.includes(option) : filters[group.group.toLowerCase()] === option)
                        ? "bg-amber-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={clearFilters} className="ml-auto px-3 py-1 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 transition-colors">
            Clear
          </button>
        </div>
      </section>

      {/* Categories - Swipeable on Mobile, Tabs on Desktop */}
      <section className="mb-8">
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
          {Object.keys(categories).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-6 py-3 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? "bg-amber-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Items Grid - Masonry */}
      <section className="max-w-6xl mx-auto">
        {items.length > 0 ? (
          <div className="columns-2 md:columns-3 gap-6 space-y-6">
            {items.map(item => (
              <Card
                key={item.id}
                image={item.image}
                name={item.name}
                description={item.description} // Fixed: Use description from data
                price={item.price}
                tags={item.tags}
                onAddToCart={() => handleAddToCart(item)}
                upsell={item.upsell}
                isFavorite={favorites.includes(item.id)} // Check if in favorites
                onToggleFavorite={() => toggleFavorite(item.id)} // Toggle callback
                isPopular={item.isPopular} // From data
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found. Try adjusting filters.</p>
          </div>
        )}
      </section>

      {/* Upsell Section (Mock - Show after filters) */}
      {items.length > 0 && (
        <section className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Pair your selection with a pastry for $2 more?</p>
          <button onClick={() => handleUpsell(items[0])} className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
            Add Upsell
          </button>
        </section>
      )}
    </div>
  );
};

export default UserMenu;