import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For fade-ins; install: npm i framer-motion
import { Link, useNavigate } from "react-router-dom"; // For navigation
import { Coffee, ShoppingCart, Clock, User } from "lucide-react"; // Lucide-React icons

// Unsplash-style hero image (steaming cup)
const HERO_IMAGE = "UserCoffeeSade1.jpeg";

// OpenWeatherMap API key (get free at openweathermap.org; replace with yours)
const WEATHER_API_KEY = "6c81b805cb6c97b8a7fff0dfab9ea84a"; // Placeholder—sign up for free
const USER_LOCATION = "Seattle,US"; // Default; use geolocation in prod

const MainHolder = () => {
  const [user, setUser] = useState(null); // From localStorage
  const [weather, setWeather] = useState({ temp: "", condition: "", suggestion: "" }); // Weather data
  const [promos, setPromos] = useState([
    { id: 1, title: "Tourist Bundle", desc: "Pastries + Coffee for $12", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=200&fit=crop" },
    { id: 2, title: "Local Loyalty", desc: "10% off for repeat indigenous customers", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop" },
    { id: 3, title: "Weekend Special", desc: "Buy 2 Cupcakes, Get 1 Free", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=200&fit=crop" },
  ]);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0); // For carousel
  const navigate = useNavigate();

  // Fetch user from localStorage
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    setUser(currentUser);
  }, []);

  // Fetch weather on mount
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${USER_LOCATION}&appid=${WEATHER_API_KEY}&units=metric`);
        const data = await res.json();
        if (data.weather) {
          const condition = data.weather[0].main.toLowerCase();
          const temp = Math.round(data.main.temp);
          let suggestion = "Try our classic drip coffee!";
          if (condition.includes("rain") || condition.includes("cloud")) {
            suggestion = "Rainy day? Go for our hot spiced mocha.";
          } else if (temp > 25) {
            suggestion = "Sunny vibes? Grab an iced latte.";
          }
          setWeather({ temp: `${temp}°C`, condition: data.weather[0].description, suggestion });
        }
      } catch (err) {
        console.error("Weather fetch error:", err);
        setWeather({ temp: "N/A", condition: "Clear", suggestion: "Try our classic drip coffee!" });
      }
    };
    fetchWeather();
  }, []);

  // Promo carousel auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromoIndex((prev) => (prev + 1) % promos.length);
    }, 4000); // Change every 4s
    return () => clearInterval(interval);
  }, [promos.length]);

  // Mock stats (replace with real API/localStorage data)
  const stats = [
  { label: "Recent Orders", value: "3 coffees this week", icon: "☕", color: "bg-gradient-to-r from-red-400 to-teal-500" },
  { label: "Loyalty Credits", value: "$5.50", icon: "⭐", color: "bg-gradient-to-r from-red-400 to-teal-500" },
  { label: "Personal Rec", value: "Tourist Special: Iced Latte", icon: "🥤", color: "bg-gradient-to-r from-red-400 to-teal-500" },
];
  if (!user) return <div className="flex items-center justify-center min-h-screen text-gray-600">Loading dashboard...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Hero Section - Steaming Cup Background */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-8"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-16 px-4">
          {/* Welcome Banner with Weather Tie-In */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-playfair"
          >
            Hey {user?.firstname || "there"}, ready for your next brew?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl mb-6 max-w-2xl"
          >
            {weather.suggestion} {weather.condition} at {weather.temp} today.
          </motion.p>
        </div>
      </motion.section>

      {/* Quick Stats - Responsive Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
  {stats.map((stat, index) => (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-amber-200"
    >
      <div className="text-3xl mb-3">{stat.icon}</div>
      <h3 className="text-sm font-medium text-gray-600 mb-2">{stat.label}</h3>
      <p className={`${stat.color} bg-clip-text text-transparent text-xl font-bold`}>
        {stat.value}
      </p>
    </motion.div>
  ))}
</section>

      {/* Quick Actions - Horizontal on Desktop, Stacked on Mobile */}
      <section className="mb-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <Link to="userMenu" className="block p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-amber-200">
            <Coffee className="mx-auto mb-2 text-2xl text-amber-500" />
            <h3 className="font-semibold text-gray-800">Browse Menu</h3>
          </Link>
          <Link to="cart" className="block p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-amber-200">
            <ShoppingCart className="mx-auto mb-2 text-2xl text-amber-500" />
            <h3 className="font-semibold text-gray-800">View Cart</h3>
          </Link>
          <Link to="ordersHistory" className="block p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-amber-200">
            <Clock className="mx-auto mb-2 text-2xl text-amber-500" />
            <h3 className="font-semibold text-gray-800">Reorder last</h3>
          </Link>
          
          <Link to="profile" className="block p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-amber-200">
            <User className="mx-auto mb-2 text-2xl text-amber-500" />
            <h3 className="font-semibold text-gray-800">Profile</h3>
          </Link>
        </motion.div>
      </section>

      {/* Promo Carousel - Horizontal Scroll on Desktop, Stacked on Mobile */}
      <section className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-2xl font-bold text-center mb-6 font-playfair text-gray-800"
        >
          Special Deals
        </motion.h2>
        <div className="overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide max-w-4xl mx-auto">
          <div className="flex gap-4">
            {promos.map((promo, index) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden snap-center hover:shadow-xl transition-shadow duration-300 border border-amber-100"
              >
                <img src={promo.image} alt={promo.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 font-playfair">{promo.title}</h3>
                  <p className="text-gray-600 text-sm">{promo.desc}</p>
                  <button className="mt-4 w-full py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                    Shop Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainHolder;