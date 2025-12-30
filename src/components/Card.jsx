import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/favorite/favoritesSlice";

const Card = ({
  image,
  name,
  desc,
  price,
  tags = [],
  onAddToCart,
  upsell,
  id, // 👈 IMPORTANT: item id must be passed
}) => {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.some(item => item.id === id);

  const handleAddToCart = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (!currentUser.email) {
      window.location.href = "/signup";
      return;
    }
    onAddToCart();
  };

  const handleToggleFavorite = () => {
    dispatch(
      toggleFavorite({
        id,
        image,
        name,
        price,
        tags,
      })
    );
  };

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-amber-100">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Upsell Badge */}
        {upsell && (
          <div className="absolute top-2 left-2 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Pair for $2 more?
          </div>
        )}

        {/* ❤️ Favorite Heart — TOP RIGHT */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-2 right-2 p-1 bg-white/80 rounded-full hover:bg-white transition-colors"
        >
          <Heart
            size={20}
            className={
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-gray-500 hover:text-red-400"
            }
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 font-playfair">{name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price & Cart */}
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-amber-600">{price}</span>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
