import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";
import {
  trackOrderUpdate,
  removeOrder,
  setOrders,
} from "../../../features/orders/orderSlice";
import { Clock, Truck, CheckCircle, Package, ChevronDown, RefreshCw, Coffee } from "lucide-react";

/* ---------------- ICON MAP ---------------- */
const iconMap = {
  Clock,
  Package,
  Truck,
  CheckCircle,
};

const UserOrderHistory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* ---------------- REDUX ---------------- */
  const ordersFromRedux = useSelector((state) => state.orders?.orders || []);
  const { loading, error } = useSelector((state) => state.orders || {});

  /* ---------------- LOCAL STATE ---------------- */
  const [orders, setOrdersState] = useState([]);
  const [filter, setFilter] = useState("all");
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [stats, setStats] = useState({ saved: 0, topItem: "None" });

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  /* ---------------- AUTH GUARD ---------------- */
  if (!currentUser?.email) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button
          onClick={() => navigate("/signup")}
          className="px-6 py-2 bg-amber-500 text-white rounded-lg"
        >
          Login to view orders
        </button>
      </div>
    );
  }

  /* ---------------- LOAD ORDERS ---------------- */
  useEffect(() => {
    const ordersKey = `orders_${currentUser.email}`;
    let savedOrders = JSON.parse(localStorage.getItem(ordersKey) || "[]");

    if (savedOrders.length === 0) {
      savedOrders = [
        {
          id: 1,
          date: "2025-12-20",
          items: "2x Cappuccino + 1x Cupcake",
          total: 12.5,
          status: "delivered",
          type: "tourist",
          loyaltySaved: 2,
          details: [{ name: "Cappuccino", qty: 2, price: 4.5 }],
          updates: [
            { message: "Order placed", icon: "Clock" },
            { message: "Delivered", icon: "CheckCircle" },
          ],
        },
      ];
      localStorage.setItem(ordersKey, JSON.stringify(savedOrders));
      dispatch(setOrders(savedOrders));
    }

    setOrdersState(savedOrders);
    calculateStats(savedOrders);
  }, [dispatch, currentUser.email]);

  /* ---------------- STATS ---------------- */
  const calculateStats = (list) => {
    const saved = list.reduce((sum, o) => sum + (o.loyaltySaved || 0), 0);
    const itemCount = {};

    list.forEach((o) => {
      (o.details || []).forEach((d) => {
        itemCount[d.name] = (itemCount[d.name] || 0) + d.qty;
      });
    });

    const topItem =
      Object.entries(itemCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "None";

    setStats({ saved: saved.toFixed(2), topItem });
  };

  /* ---------------- FILTER ---------------- */
  const filteredOrders = orders.filter((o) => {
    if (filter === "tourist") return o.type === "tourist";
    if (filter === "local") return o.type === "local";
    return true;
  });

  /* ---------------- ACTIONS ---------------- */
  const handleReorder = (order) => {
    (order.details || []).forEach((item) => {
      dispatch(addToCart({ ...item, id: Date.now() + Math.random() }));
    });
    navigate("/app/userMenu");
  };

  const handleTrack = (id) => dispatch(trackOrderUpdate({ orderId: id }));
  const handleRemove = (id) => dispatch(removeOrder(id));

  /* ---------------- RENDER ---------------- */
  return (
    <div className="min-h-screen p-6 bg-amber-50">
      {error && <p className="text-red-600 mb-4">{error}</p>}

      {/* STATS */}
      <div className="bg-white p-4 rounded mb-6 flex gap-4">
        <Package size={20} />
        <span>Saved ${stats.saved}</span>
        <Coffee size={20} />
        <span>Top Item: {stats.topItem}</span>
      </div>

      {/* ORDERS */}
      {filteredOrders.map((order) => (
        <div key={order.id} className="bg-white p-4 rounded mb-4 shadow">
          <div className="flex justify-between">
            <div>
              <p className="font-bold">{order.date}</p>
              <p>{order.items}</p>
            </div>
            <p>${order.total.toFixed(2)}</p>
          </div>

          {/* TIMELINE */}
          <div className="flex gap-3 mt-3">
            {(order.updates || []).map((u, i) => {
              const Icon = iconMap[u.icon] || Clock;
              return (
                <div key={i} className="flex items-center gap-1 text-sm">
                  <Icon size={14} />
                  {u.message}
                </div>
              );
            })}
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3 mt-4">
            <button onClick={() => handleReorder(order)}>Reorder</button>
            <button onClick={() => handleTrack(order.id)} disabled={loading}>
              {loading ? <RefreshCw className="animate-spin" /> : "Track"}
            </button>
            <button onClick={() => handleRemove(order.id)}>Remove</button>
          </div>

          {/* DETAILS */}
          <button
            className="mt-3 flex items-center gap-2"
            onClick={() =>
              setExpandedOrder(expandedOrder === order.id ? null : order.id)
            }
          >
            View Details <ChevronDown size={16} />
          </button>

          {expandedOrder === order.id && (
            <div className="mt-2 text-sm">
              {(order.details || []).map((d, i) => (
                <div key={i} className="flex justify-between">
                  <span>
                    {d.name} x {d.qty}
                  </span>
                  <span>${d.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserOrderHistory;
