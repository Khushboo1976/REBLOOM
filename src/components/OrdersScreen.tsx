import { useState } from "react";
import { Package, Clock, CheckCircle, XCircle, Eye, MessageCircle, Truck, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function OrdersScreen() {
  const [activeTab, setActiveTab] = useState("purchases");

  const orders = [
    {
      id: "ORD001",
      type: "purchase",
      title: "Madhubani Fish Wall Art",
      artist: "Priya Kumari",
      image: "https://images.unsplash.com/photo-1575550828602-aff2b22342a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRodWJhbmklMjBwYWludGluZyUyMGFydHxlbnwxfHx8fDE3NTg0NjYwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: 2499,
      status: "delivered",
      orderDate: "2024-01-15",
      deliveryDate: "2024-01-20",
      trackingSteps: [
        { name: "Order Confirmed", completed: true, date: "Jan 15" },
        { name: "Shipped", completed: true, date: "Jan 17" },
        { name: "Out for Delivery", completed: true, date: "Jan 20" },
        { name: "Delivered", completed: true, date: "Jan 20" }
      ]
    },
    {
      id: "RST001",
      type: "restoration",
      title: "Vintage Wooden Chair",
      artist: "Heritage Restorers",
      image: "https://images.unsplash.com/photo-1629470937866-f8b6b7e98889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZnVybml0dXJlJTIwcmVzdG9yYXRpb258ZW58MXx8fHwxNzU4NDY2MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: 4500,
      status: "in_progress",
      orderDate: "2024-01-10",
      estimatedCompletion: "2024-01-30",
      trackingSteps: [
        { name: "Request Submitted", completed: true, date: "Jan 10" },
        { name: "Artist Assigned", completed: true, date: "Jan 11" },
        { name: "Restoration Started", completed: true, date: "Jan 12" },
        { name: "Work in Progress", completed: false, date: "Jan 25", current: true },
        { name: "Quality Check", completed: false, date: "Jan 28" },
        { name: "Ready for Pickup", completed: false, date: "Jan 30" }
      ],
      progress: 60
    },
    {
      id: "ORD002",
      type: "purchase",
      title: "Hand-painted Terracotta Pot",
      artist: "Ramesh Pottery",
      image: "https://images.unsplash.com/photo-1717601858050-9716a178d88a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoYW5kbWFkZSUyMHBvdHRlcnl8ZW58MXx8fHwxNzU4NDY2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: 899,
      status: "shipped",
      orderDate: "2024-01-18",
      estimatedDelivery: "2024-01-25",
      trackingSteps: [
        { name: "Order Confirmed", completed: true, date: "Jan 18" },
        { name: "Shipped", completed: true, date: "Jan 20", current: true },
        { name: "Out for Delivery", completed: false, date: "Jan 25" },
        { name: "Delivered", completed: false, date: "Jan 25" }
      ],
      trackingNumber: "TRK123456789"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "text-green-600 bg-green-100";
      case "shipped": return "text-blue-600 bg-blue-100";
      case "in_progress": return "text-orange-600 bg-orange-100";
      case "cancelled": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered": return CheckCircle;
      case "shipped": return Truck;
      case "in_progress": return Clock;
      case "cancelled": return XCircle;
      default: return Package;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered": return "Delivered";
      case "shipped": return "Shipped";
      case "in_progress": return "In Progress";
      case "cancelled": return "Cancelled";
      default: return "Unknown";
    }
  };

  const filteredOrders = orders.filter(order => {
    if (activeTab === "purchases") return order.type === "purchase";
    if (activeTab === "restorations") return order.type === "restoration";
    return true;
  });

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 pt-12 pb-6">
        <div className="text-center mb-6">
          <h1 className="text-white text-2xl font-bold mb-2">My Orders</h1>
          <p className="text-white/80 text-sm">Track your purchases & restorations</p>
        </div>

        {/* Tab Selector */}
        <div className="bg-white/20 p-1 rounded-2xl flex">
          <button
            onClick={() => setActiveTab("purchases")}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeTab === "purchases"
                ? "bg-white text-blue-600 shadow-lg"
                : "text-white hover:bg-white/20"
            }`}
          >
            Purchases
          </button>
          <button
            onClick={() => setActiveTab("restorations")}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeTab === "restorations"
                ? "bg-white text-blue-600 shadow-lg"
                : "text-white hover:bg-white/20"
            }`}
          >
            Restorations
          </button>
        </div>
      </div>

      {/* Orders List */}
      <div className="px-4 py-6">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package size={24} className="text-gray-400" />
            </div>
            <h3 className="text-gray-900 font-medium mb-2">No orders yet</h3>
            <p className="text-gray-500 text-sm mb-4">
              {activeTab === "purchases" 
                ? "Start shopping to see your orders here" 
                : "Submit items for restoration to track them here"}
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200">
              {activeTab === "purchases" ? "Browse Items" : "Submit for Restoration"}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => {
              const StatusIcon = getStatusIcon(order.status);
              return (
                <div key={order.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  {/* Order Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <ImageWithFallback
                      src={order.image}
                      alt={order.title}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-medium text-gray-900 line-clamp-1">{order.title}</h3>
                          <p className="text-sm text-gray-600">by {order.artist}</p>
                          <p className="text-xs text-gray-500">Order #{order.id}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">₹{order.price}</p>
                          <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            <StatusIcon size={12} />
                            {getStatusText(order.status)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar for Restorations */}
                  {order.type === "restoration" && order.progress && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Restoration Progress</span>
                        <span>{order.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${order.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Tracking Steps */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Tracking</h4>
                    <div className="space-y-2">
                      {order.trackingSteps.map((step, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full border-2 ${
                            step.completed 
                              ? "bg-green-500 border-green-500" 
                              : step.current
                                ? "bg-orange-500 border-orange-500"
                                : "border-gray-300"
                          }`} />
                          <div className="flex-1 flex justify-between items-center">
                            <span className={`text-sm ${
                              step.completed || step.current ? "text-gray-900 font-medium" : "text-gray-500"
                            }`}>
                              {step.name}
                            </span>
                            <span className="text-xs text-gray-500">{step.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tracking Number */}
                  {order.trackingNumber && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-xl">
                      <p className="text-xs text-gray-600">Tracking Number</p>
                      <p className="text-sm font-mono text-gray-900">{order.trackingNumber}</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                      <Eye size={16} />
                      View Details
                    </button>
                    <button className="flex-1 bg-blue-100 text-blue-700 py-2 px-4 rounded-xl text-sm font-medium hover:bg-blue-200 transition-colors flex items-center justify-center gap-2">
                      <MessageCircle size={16} />
                      Contact Artist
                    </button>
                    {order.status === "delivered" && (
                      <button className="bg-yellow-100 text-yellow-700 py-2 px-4 rounded-xl text-sm font-medium hover:bg-yellow-200 transition-colors flex items-center justify-center gap-2">
                        <Star size={16} />
                        Rate
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Order Again / Submit New Item */}
      {filteredOrders.length > 0 && (
        <div className="px-4 pb-6">
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
            {activeTab === "purchases" ? "Browse More Items" : "Submit Another Item"}
          </button>
        </div>
      )}
    </div>
  );
}