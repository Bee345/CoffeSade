import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { User, Edit3, Save, Trash2, Bell, CreditCard, MapPin, Calendar, Key, LogOut, ChevronDown, Sun, Moon, Globe, Shield, Download, Mail } from "lucide-react"; // Added icons for new features

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // From localStorage
  const [isEditing, setIsEditing] = useState(false); // Edit mode toggle
  const [activeTab, setActiveTab] = useState("info"); // Desktop tabs: info, settings, prefs, actions
  const [openSection, setOpenSection] = useState("info"); // Mobile accordion
  const [avatarFile, setAvatarFile] = useState(null); // For upload preview
  const [avatarPreview, setAvatarPreview] = useState(""); // Preview URL
  const [tempUser, setTempUser] = useState({}); // Temp edits
  const [notifications, setNotifications] = useState(false); // Toggle
  const [paymentMethods, setPaymentMethods] = useState(""); // Input
  const [orderPref, setOrderPref] = useState("local"); // Radio: "tourist" or "local"
  const [showPasswordModal, setShowPasswordModal] = useState(false); // Modal for password change
  const [darkMode, setDarkMode] = useState(false); // Dark mode toggle
  const [language, setLanguage] = useState("en"); // Language selector
  const [privacyMode, setPrivacyMode] = useState(false); // Privacy toggle
  const [dietaryPrefs, setDietaryPrefs] = useState([]); // Dietary array
  const [favoriteLocation, setFavoriteLocation] = useState(""); // Favorite pickup dropdown
  const [subscription, setSubscription] = useState(false); // Subscription toggle
  const [errors, setErrors] = useState({}); // Form errors object

  // Load user from localStorage on mount
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (currentUser) {
      setUser(currentUser);
      setTempUser(currentUser);
      setAvatarPreview(currentUser.avatar || ""); // Default avatar if none
      setNotifications(currentUser.notifications || false);
      setPaymentMethods(currentUser.paymentMethods || "");
      setOrderPref(currentUser.orderPref || "local");
      setDarkMode(currentUser.darkMode || false);
      setLanguage(currentUser.language || "en");
      setPrivacyMode(currentUser.privacyMode || false);
      setDietaryPrefs(currentUser.dietaryPrefs || []);
      setFavoriteLocation(currentUser.favoriteLocation || "");
      setSubscription(currentUser.subscription || false);
      setErrors({}); // Clear errors on load
    } else {
      navigate("/signup"); // Redirect if no user
    }
  }, [navigate]);

  // Cleanup avatar URL on unmount (memory leak fix)
  useEffect(() => {
    return () => {
      if (avatarPreview && avatarPreview.startsWith("blob:")) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  // Validate form fields
  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!tempUser.firstname || tempUser.firstname.trim().length < 2) {
      newErrors.firstname = "First name must be at least 2 characters.";
    }
    if (!tempUser.lastname || tempUser.lastname.trim().length < 2) {
      newErrors.lastname = "Last name must be at least 2 characters.";
    }
    if (!tempUser.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(tempUser.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (tempUser.dob && new Date(tempUser.dob) > new Date()) {
      newErrors.dob = "Date of birth cannot be in the future.";
    }
    if (tempUser.address && tempUser.address.trim().length < 10) {
      newErrors.address = "Address must be at least 10 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [tempUser]);

  // Handle avatar upload (useCallback for perf)
  const handleAvatarUpload = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setAvatarFile(file);
      setAvatarPreview(preview);
    }
  }, []);

  // Save edits (try-catch for immutable error handling)
  const handleSave = useCallback(() => {
    if (!validateForm()) {
      alert("Please fix errors before saving.");
      return;
    }
    try {
      const updatedUser = {
        ...tempUser,
        avatar: avatarPreview,
        notifications,
        paymentMethods,
        orderPref,
        darkMode,
        language,
        privacyMode,
        dietaryPrefs,
        favoriteLocation,
        subscription
      };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setIsEditing(false);
    } catch (err) {
      console.error("Save failed:", err);
      alert("Save failed—try again.");
    }
  }, [tempUser, avatarPreview, notifications, paymentMethods, orderPref, darkMode, language, privacyMode, dietaryPrefs, favoriteLocation, subscription, validateForm]);

  // Delete account (confirm + logout)
  const handleDelete = useCallback(() => {
    if (window.confirm("Delete account? This can't be undone.")) {
      try {
        localStorage.removeItem("currentUser");
        navigate("/signup");
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  }, [navigate]);

  // Password change modal (mock—integrate backend later)
  const handlePasswordChange = useCallback(() => {
    if (window.confirm("Password changed! (Mock)")) {
      setShowPasswordModal(false);
    }
  }, []);

  // Toggle dietary pref (immutable array update)
  const toggleDietary = useCallback((pref) => {
    setDietaryPrefs(prev => prev.includes(pref) ? prev.filter(p => p !== pref) : [...prev, pref]);
  }, []);

  if (!user) return <div className="flex items-center justify-center min-h-screen text-gray-600">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header: Avatar & Edit Toggle */}
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <div className="relative inline-block mb-4">
          <img
            src={avatarPreview || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face"}
            alt="Avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-amber-200 shadow-lg"
          />
          {isEditing && (
            <label className="absolute bottom-0 right-0 bg-amber-500 text-white p-2 rounded-full cursor-pointer hover:bg-amber-600 transition-colors">
              <Edit3 size={20} />
              <input type="file" onChange={handleAvatarUpload} className="hidden" accept="image/*" />
            </label>
          )}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2 font-playfair">{user.firstname} {user.lastname}</h1>
        <p className="text-gray-600">{user.email}</p>
        {!isEditing ? (
          <button onClick={() => setIsEditing(true)} className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
            <Edit3 size={18} className="inline mr-2" /> Edit Profile
          </button>
        ) : (
          <button onClick={handleSave} className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            <Save size={18} className="inline mr-2" /> Save Changes
          </button>
        )}
        
      </div>
      <div className="max-w-2xl mx-auto">
        {/* Desktop Tabs */}
        <div className="hidden md:flex mb-6 border-b border-gray-200">
          {["info", "settings", "prefs", "actions"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === tab ? "border-b-2 border-amber-500 text-amber-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>
        {/* Mobile Accordion */}
        <div className="md:hidden mb-6 space-y-2">
          {["info", "settings", "prefs", "actions"].map(tab => (
            <button
              key={tab}
              onClick={() => setOpenSection(openSection === tab ? "" : tab)}
              className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
              <ChevronDown size={20} className={`ml-auto transition-transform ${openSection === tab ? 'rotate-180' : ''}`} />
            </button>
          ))}
        </div>
        {/* Sections */}
        <div className="space-y-6">
          {/* User Info Section - Always visible or toggled, with validation errors */}
          <section className={activeTab === "info" || openSection === "info" ? "block" : "hidden md:block"}>
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center"><User size={20} className="mr-2" /> Personal Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={tempUser.firstname || ''}
                  onChange={(e) => setTempUser({...tempUser, firstname: e.target.value})}
                  disabled={!isEditing}
                  className={`p-3 border rounded-lg w-full ${isEditing ? 'border-gray-300 focus:ring-2 focus:ring-amber-500' : 'bg-gray-100'}`}
                />
                {errors.firstname && <p className="text-red-500 text-xs mt-1">{errors.firstname}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={tempUser.lastname || ''}
                  onChange={(e) => setTempUser({...tempUser, lastname: e.target.value})}
                  disabled={!isEditing}
                  className={`p-3 border rounded-lg w-full ${isEditing ? 'border-gray-300 focus:ring-2 focus:ring-amber-500' : 'bg-gray-100'}`}
                />
                {errors.lastname && <p className="text-red-500 text-xs mt-1">{errors.lastname}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={tempUser.email || ''}
                  onChange={(e) => setTempUser({...tempUser, email: e.target.value})}
                  disabled={!isEditing}
                  className={`p-3 border rounded-lg w-full ${isEditing ? 'border-gray-300 focus:ring-2 focus:ring-amber-500' : 'bg-gray-100'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  value={tempUser.dob || ''}
                  onChange={(e) => setTempUser({...tempUser, dob: e.target.value})}
                  disabled={!isEditing}
                  className={`p-3 border rounded-lg w-full ${isEditing ? 'border-gray-300 focus:ring-2 focus:ring-amber-500' : 'bg-gray-100'}`}
                />
                {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
              </div>
              <div className="md:col-span-2">
                <textarea
                  placeholder="Address"
                  value={tempUser.address || ''}
                  onChange={(e) => setTempUser({...tempUser, address: e.target.value})}
                  disabled={!isEditing}
                  rows={3}
                  className={`p-3 border rounded-lg w-full ${isEditing ? 'border-gray-300 focus:ring-2 focus:ring-amber-500' : 'bg-gray-100'}`}
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>
            </div>
          </section>
          {/* Settings Section - Unique content, visible only on tab/accordion */}
          <section className={activeTab === "settings" || openSection === "settings" ? "block" : "hidden md:block"}>
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center"><Bell size={20} className="mr-2" /> Settings</h2>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Enable Notifications (Order updates, promos)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Dark Mode</span>
              </label>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={privacyMode}
                  onChange={(e) => setPrivacyMode(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Privacy Mode (Hide order history)</span>
              </label>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Methods</label>
                <input
                  type="text"
                  placeholder="Add card or PayPal"
                  value={paymentMethods}
                  onChange={(e) => setPaymentMethods(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div className="p-4 bg-amber-50 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-2">Loyalty Points</h3>
                <p className="text-lg font-bold text-amber-600">150 points (Redeem for free coffee!)</p>
              </div>
            </div>
          </section>
          {/* Order Prefs Section - Unique content, visible only on tab/accordion */}
          <section className={activeTab === "prefs" || openSection === "prefs" ? "block" : "hidden md:block"}>
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center"><MapPin size={20} className="mr-2" /> Order Preferences</h2>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">Delivery Mode</p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="tourist"
                    checked={orderPref === "tourist"}
                    onChange={(e) => setOrderPref(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Tourist Mode (Delivery to sites)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="local"
                    checked={orderPref === "local"}
                    onChange={(e) => setOrderPref(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Local Pickup</span>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions</label>
                <div className="space-y-2">
                  {["Vegan", "Gluten-Free", "Nut-Free", "Dairy-Free"].map(pref => (
                    <label key={pref} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={dietaryPrefs.includes(pref)}
                        onChange={() => toggleDietary(pref)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">{pref}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Favorite Pickup Location</label>
                <select
                  value={favoriteLocation}
                  onChange={(e) => setFavoriteLocation(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select Location</option>
                  <option value="Downtown">Downtown Cafe</option>
                  <option value="Tourist Spot">Tourist Spot</option>
                  <option value="Local Market">Local Market</option>
                </select>
              </div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={subscription}
                  onChange={(e) => setSubscription(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Subscribe to Monthly Coffee Box</span>
              </label>
            </div>
          </section>
          {/* Account Actions Section - Unique content, visible only on tab/accordion */}
          <section className={activeTab === "actions" || openSection === "actions" ? "block" : "hidden md:block"}>
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center"><Key size={20} className="mr-2" /> Account Actions</h2>
            <div className="space-y-3">
              <button
                onClick={() => setShowPasswordModal(true)}
                className="w-full flex items-center justify-center p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Key size={18} className="mr-2" /> Change Password
              </button>
              <button
                onClick={() => window.open("mailto:support@coffeesade.com", "_blank")}
                className="w-full flex items-center justify-center p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Mail size={18} className="mr-2" /> Contact Support
              </button>
              <button
                onClick={() => window.confirm("Data exported! (Mock)")}
                className="w-full flex items-center justify-center p-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
              >
                <Download size={18} className="mr-2" /> Export Data
              </button>
              <button
                onClick={() => window.confirm("Account deactivated! (Temporary)")}
                className="w-full flex items-center justify-center p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <Shield size={18} className="mr-2" /> Deactivate Account (Temporary)
              </button>
              <button
                onClick={handleDelete}
                className="w-full flex items-center justify-center p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <Trash2 size={18} className="mr-2" /> Delete Account
              </button>
              <button
                onClick={() => navigate("/app")}
                className="w-full flex items-center justify-center p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <LogOut size={18} className="mr-2" /> Logout
              </button>
            </div>
          </section>
        </div>
      </div>
      {/* Password Change Modal (Mock) */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">Change Password</h3>
            <p className="text-sm text-gray-600 mb-4">Enter new password (mock—integrate backend).</p>
            <input type="password" placeholder="New Password" className="w-full p-3 border rounded-lg mb-4" />
            <div className="flex gap-2">
              <button onClick={handlePasswordChange} className="flex-1 py-2 bg-green-500 text-white rounded-lg">Save</button>
              <button onClick={() => setShowPasswordModal(false)} className="flex-1 py-2 bg-gray-500 text-white rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;