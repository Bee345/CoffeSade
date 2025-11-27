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

  // Function to get tag color
  const getTagColor = (tag) => {
    switch (tag.toLowerCase()) {
      case "hot":
        return "bg-red-200 text-red-800";
      case "cold":
        return "bg-blue-200 text-blue-800";
      case "sweet":
        return "bg-pink-200 text-pink-800";
      case "classic":
        return "bg-yellow-200 text-yellow-800";
      case "spiced":
        return "bg-orange-200 text-orange-800";
      case "healthy":
        return "bg-green-200 text-green-800";
      case "protein":
        return "bg-purple-200 text-purple-800";
      case "floral":
        return "bg-purple-100 text-purple-700";
      case "citrus":
        return "bg-yellow-100 text-yellow-700";
      case "dessert":
        return "bg-indigo-200 text-indigo-800";
      case "nutty":
        return "bg-amber-200 text-amber-800";
      case "seasonal":
        return "bg-emerald-200 text-emerald-800";
      case "cheesy":
        return "bg-orange-100 text-orange-800";
      case "spicy":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">

      {/* Search + Sorting Row */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search menu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2"
        />

        <select
          value={sortMode}
          onChange={(e) => setSortMode(e.target.value)}
          className="p-3 rounded-xl border border-gray-300 shadow-sm"
        >
          <option value="default">Sort: Default</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="alpha">A → Z</option>
        </select>
      </div>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto gap-3 pb-3">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
            selectedCategory === "all"
              ? "bg-brown-600 text-white"
              : "border-gray-400"
          }`}
        >
          All ({filteredItems.length})
        </button>

        {menuData.map(({ id, category, categoryImage, children }) => (
          <button
            key={id}
            onClick={() => setSelectedCategory(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
              selectedCategory === id
                ? "bg-brown-600 text-white"
                : "border-gray-400"
            }`}
          >
            <img
              src={categoryImage || getFallbackCategoryImage(category)}
              alt={category}
              className="w-6 h-6 rounded-full object-cover"
            />
            {category} ({children.length})
          </button>
        ))}
      </div>

      {/* Skeleton Loader */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-48 bg-gray-200 animate-pulse rounded-xl"></div>
          ))}
        </div>
      )}

      {/* Menu Grid */}
      {!loading && (
        <>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="relative bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg hover:scale-105 transition transform cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {item.isPopular && (
                  <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Popular
                  </div>
                )}

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={item.categoryImage}
                      alt={item.categoryName}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span className="text-xs text-gray-500">{item.categoryName}</span>
                  </div>

                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>

                  {/* Rating */}
                  <div className="flex text-yellow-500 text-sm mt-1">
                    {"★★★★★".slice(0, item.rating || 4)}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-brown-700 font-semibold text-lg">
                    {item.price}
                  </p>

                  <button className="mt-3 w-full py-2 rounded-lg bg-brown-600 text-white hover:bg-brown-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredItems.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-6 py-2 bg-brown-600 text-white rounded-full hover:bg-brown-700"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold">{selectedItem.name}</h2>
            <p className="mt-2">{selectedItem.description}</p>

            <img
              src={selectedItem.image}
              className="w-full h-48 object-cover mt-4 rounded-xl"
            />

            <button
              onClick={() => setSelectedItem(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
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

