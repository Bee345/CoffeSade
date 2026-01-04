import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../../features/favorite/favoritesSlice";
import { addToCart } from "../../../features/cart/cartSlice";
import { Heart, Share2, ShoppingCart } from "lucide-react";

const categorize = (item) => {
  if (item.tags?.includes("Tourist Favorites")) return "Tourist Must-Tries";
  if (item.price && parseFloat(item.price.replace("$", "")) <= 5)
    return "Quick Grabs";
  return "Local Classics";
};

const UserFavorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const grouped = favorites.reduce((acc, item) => {
    const group = categorize(item);
    acc[group] = acc[group] || [];
    acc[group].push(item);
    return acc;
  }, {});

  if (favorites.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        ❤️
        <p className="mt-2 text-lg">
          Save your faves for next time — heart items in Menu!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-[#52e2] dark:bg-[#E3D5C6]">
      <h2 className="text-2xl font-bold mb-6">Your Favorites</h2>

      {Object.entries(grouped).map(([group, items]) => (
        <section key={group} className="mb-10">
          <h3 className="text-lg font-semibold mb-4">{group}</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="relative bg-white rounded-xl shadow p-3 group touch-pan-y"
                onTouchStart={(e) => {
                  e.currentTarget.startX = e.touches[0].clientX;
                }}
                onTouchEnd={(e) => {
                  const diff =
                    e.currentTarget.startX -
                    e.changedTouches[0].clientX;

                  if (diff > 80) {
                    dispatch(removeFavorite(item.id));
                  }
                }}
              >
                {/* Desktop hover delete */}
                <button
                  onClick={() => dispatch(removeFavorite(item.id))}
                  aria-label="Remove from favorites"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition cursor-pointer"
                >
                  <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                </button>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover rounded-lg"
                />

                <h4 className="mt-2 font-medium">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.price}</p>

                <div className="flex justify-between mt-3">
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="flex items-center gap-1 text-sm text-green-600"
                  >
                    <ShoppingCart className="w-4 h-4" /> Add
                  </button>

                  <button
                    onClick={() =>
                      navigator.share?.({
                        title: item.name,
                        text: "Check this out!",
                        url: window.location.href,
                      })
                    }
                    className="flex items-center gap-1 text-sm text-blue-600"
                  >
                    <Share2 className="w-4 h-4" /> Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default UserFavorites;
