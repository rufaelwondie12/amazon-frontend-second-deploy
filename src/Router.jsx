import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing"; // Main landing page
import Auth from "./Pages/Auth/Auth"; // Signup page
import Payment from "./Pages/Payment/Payment"; // Payment processing page
import Orders from "./Pages/Orders/Orders"; // Orders history page
import Cart from "./Pages/Cart/Cart"; // Shopping cart page
import Results from "./Pages/Results/Results"; // Results page based on category
import ProductDetail from "./Pages/ProductDetail/ProductDetail"; // Detailed view of a product
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function Routing() {
  return (
    <Router basename="/Amazon-clone-2025-Dec/">
      {/* Set the basename for proper routing */}
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Main entry point */}
        <Route path="/auth" element={<Auth />} /> {/* User signup */}
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />{" "}
        {/* Results by category */}
        <Route path="/products/:productId" element={<ProductDetail />} />{" "}
        {/* Product details */}
        <Route path="/cart" element={<Cart />} /> {/* Shopping cart */}
      </Routes>
    </Router>
  );
}

export default Routing;
