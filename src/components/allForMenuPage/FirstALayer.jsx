import React, { useState, useEffect } from "react";
import { menuData } from "../../data/menuData";
import {
  getFallbackItemImage,
  getFallbackCategoryImage,
} from "../../utilities/fallbackImages.js";

const FirstALayer = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMode, setSortMode] = useState("default");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Prepare full filtered items
  let filteredItems = menuData
    .flatMap(({ category, categoryImage, children }) =>
      children.map((item) => ({
        ...item,
        categoryName: category,
        categoryImage: categoryImage || getFallbackCategoryImage(category),
        image: item.image || getFallbackItemImage(item.name),
      }))
    )
    .filter(({ name }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Filter by category
  if (selectedCategory !== "all") {
    filteredItems = filteredItems.filter(
      (item) => item.categoryName === menuData.find(cat => cat.id === selectedCategory)?.category
    );
  }

  // Sorting
  if (sortMode === "price-asc") filteredItems.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
  if (sortMode === "price-desc") filteredItems.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
  if (sortMode === "alpha") filteredItems.sort((a, b) => a.name.localeCompare(b.name));

  // Pagination
  const visibleItems = filteredItems.slice(0, visibleCount);

  // Function to get tag color - Updated with warm amber/orange/brown tones inspired by example
  const getTagColor = (tag) => {
    switch (tag.toLowerCase()) {
      case "hot":
        return "bg-gradient-to-r from-amber-400/80 to-orange-500/80 text-white"; // Warm orange for heat
      case "cold":
        return "bg-gradient-to-r from-amber-200/80 to-amber-300/80 text-amber-800"; // Light amber for cool
      case "sweet":
        return "bg-gradient-to-r from-pink-300/80 to-amber-400/80 text-white"; // Soft pink-amber blend
      case "classic":
        return "bg-gradient-to-r from-amber-500/80 to-brown-600/80 text-white"; // Classic brown-amber
      case "spiced":
        return "bg-gradient-to-r from-orange-400/80 to-red-400/80 text-white"; // Spicy orange-red
      case "healthy":
        return "bg-gradient-to-r from-green-300/80 to-amber-400/80 text-white"; // Green-amber for fresh
      case "protein":
        return "bg-gradient-to-r from-purple-400/80 to-amber-500/80 text-white"; // Purple-amber energy
      case "floral":
        return "bg-gradient-to-r from-purple-300/80 to-pink-400/80 text-white"; // Floral purple-pink
      case "citrus":
        return "bg-gradient-to-r from-yellow-400/80 to-orange-400/80 text-white"; // Bright citrus yellow-orange
      case "dessert":
        return "bg-gradient-to-r from-indigo-400/80 to-amber-500/80 text-white"; // Indulgent indigo-amber
      case "nutty":
        return "bg-gradient-to-r from-amber-600/80 to-brown-700/80 text-white"; // Nutty deep amber-brown
      case "seasonal":
        return "bg-gradient-to-r from-emerald-400/80 to-amber-500/80 text-white"; // Fresh emerald-amber
      case "cheesy":
        return "bg-gradient-to-r from-orange-300/80 to-yellow-400/80 text-white"; // Cheesy orange-yellow
      case "spicy":
        return "bg-gradient-to-r from-red-400/80 to-orange-500/80 text-white"; // Fiery red-orange
      default:
        return "bg-gradient-to-r from-gray-300/80 to-gray-400/80 text-gray-700"; // Neutral gray
    }
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Search + Sorting Row - Mobile: Stacked full-width; Larger: Row with balanced widths */}
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
        <input
          type="text"
          placeholder="Search menu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 text-sm rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        />
        <select
          value={sortMode}
          onChange={(e) => setSortMode(e.target.value)}
          className="w-full md:w-auto p-3 text-sm rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        >
          <option value="default">Sort: Default</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="alpha">A → Z</option>
        </select>
      </div>

      {/* Category Tabs - Mobile: Smaller icons/text, more scrollable; Larger: Spaced out */}
      <div className="flex overflow-x-auto gap-2 sm:gap-3 pb-3 scrollbar-hide">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`relative flex flex-col items-center gap-1 px-1 sm:px-2 py-1 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-md sm:hover:shadow-lg min-w-[60px] sm:min-w-[80px] ${
            selectedCategory === "all"
              ? "bg-brown-600 text-white"
              : "bg-white border-2 border-gray-300 text-gray-600 hover:bg-gray-50"
          }`}
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-400 text-xs sm:text-xs">
            <span className="font-bold">All</span>
          </div>
          <span className="text-xs font-medium -mt-1 sm:-mt-1">{filteredItems.length}</span>
        </button>

        {menuData.map(({ id, category, categoryImage, children }) => (
          <button
            key={id}
            onClick={() => setSelectedCategory(id)}
            className={`relative flex flex-col items-center gap-1 px-1 sm:px-2 py-1 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-md sm:hover:shadow-lg min-w-[60px] sm:min-w-[80px] ${
              selectedCategory === id
                ? "bg-brown-600 text-white"
                : "bg-white border-2 border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <img
              src={categoryImage || getFallbackCategoryImage(category)}
              alt={category}
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-gray-400"
            />
            <span className="text-[10px] sm:text-xs font-medium -mt-1 sm:-mt-1 line-clamp-1 w-full text-center">{category}</span>
            <span className="text-[10px] sm:text-xs opacity-75 -mt-1 sm:-mt-1">{children.length}</span>
          </button>
        ))}
      </div>

      {/* Skeleton Loader - Mobile: 1 col, smaller height; Larger: More cols, taller */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-48 sm:h-64 lg:h-80 bg-gray-200 animate-pulse rounded-xl"></div>
          ))}
        </div>
      )}

      {/* Menu Grid - Mobile: 1 col, smaller cards; sm:2, lg:3, xl:4, 2xl:5 cols; Heights scale */}
      {!loading && (
        <>
          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 items-stretch">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="relative rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 min-h-[160px] sm:min-h-[200px] lg:min-h-64 flex flex-col cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {item.isPopular && (
                  <div className="absolute top-12 left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full shadow z-30">
                    Popular
                  </div>
                )}
                <div className="relative flex-1 z-10"> {/* Image container stretches to fill */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end pb-2 sm:pb-8 lg:pb-12 text-center p-2 sm:p-3 lg:p-5 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent"> {/* Full cover dark overlay; reduced bottom padding, increased darkness */}
                    {/* Category Badge - Positioned top-left over overlay; Smaller on mobile */}
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex items-center gap-1 sm:gap-2 z-30">
                      <img
                        src={item.categoryImage}
                        alt={item.categoryName}
                        className="w-3 sm:w-5 h-3 sm:h-5 rounded-full object-cover"
                      />
                      <span className="text-[10px] sm:text-xs text-white bg-black/50 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full line-clamp-1">{item.categoryName}</span>
                    </div>
                    {/* Title and Description - Responsive sizes */}
                    <h3 className="text-lg sm:text-xl lg:text-[25px] font-semibold text-white mb-1 sm:mb-2 font-playfair italic line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    {/* Rating - Smaller stars on mobile */}
                    <div className="flex text-yellow-500 text-[12px] sm:text-sm mb-1 sm:mb-2 justify-center">
                      {"★★★★★".slice(0, item.rating || 4)}
                    </div>
                    {/* Tags - Wrap, smaller on mobile; Updated colors with gradients */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center mb-2 sm:mb-4">
                      {(item.tags || []).map((tag, index) => (
                        <span
                          key={index}
                          className={`text-[10px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded-full ${getTagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Price and Button - Stacked at very bottom; Compact on mobile */}
                    <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                      <p className="text-white/90 font-semibold text-base sm:text-lg">
                        {item.price}
                      </p>
                      <button className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors duration-300 font-semibold text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More - Centered, full-width button on mobile */}
          {visibleCount < filteredItems.length && (
            <div className="flex justify-center mt-4 sm:mt-6">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-brown-600 text-white rounded-full hover:bg-brown-700 transition-colors duration-300 text-sm font-medium"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}

      {/* Modal - Full-screen on mobile, centered card on larger; Responsive padding/sizes */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm sm:max-w-md p-4 sm:p-6 relative">
            <h2 className="text-lg sm:text-xl font-bold mb-2">{selectedItem.name}</h2>
            <p className="text-sm mb-4 line-clamp-3">{selectedItem.description}</p>

            <img
              src={selectedItem.image}
              className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4"
              alt={selectedItem.name}
            />

            <button
              onClick={() => setSelectedItem(null)}
              className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstALayer;