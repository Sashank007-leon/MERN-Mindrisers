import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import img1 from "../assets/img1.jpg";

const Cart = () => {
  const { cart, addToCart, removeOneFromCart, removeAllFromCart, products } =
    useContext(ProductContext);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((product) => {
            // Find the original product from the products list to check stock
            const originalProduct = products.find((p) => p._id === product._id);

            // Check the original stock of the product
            const remainingStock = originalProduct ? originalProduct.inStock : 0;

            // Calculate the total price based on quantity
            const totalPrice = originalProduct
              ? product.quantity * originalProduct.price
              : 0;

            return (
              <div
                key={product._id}
                className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col"
              >
                {/* Product Image */}
                
                  <img
                    src={originalProduct.image || img1}
                    alt={product.name}
                    className="h-40 w-full object-cover rounded-lg mb-4"
                  />
                

                {/* Product Details */}
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-400">{product.description}</p>
                <p className="text-blue-400">
                  Price per unit: ${originalProduct ? originalProduct.price : 0}
                </p>
                <p className="text-yellow-400">Quantity: {product.quantity}</p>
                <p className="text-green-400">Total Price: ${totalPrice}</p>

                {/* Buttons */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {/* Remove One Button */}
                  <button
                    onClick={() => removeOneFromCart(product._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove One
                  </button>

                  {/* Remove All Button */}
                  <button
                    onClick={() => removeAllFromCart(product._id)}
                    className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800"
                  >
                    Remove All
                  </button>

                  {/* Add More Button */}
                  <button
                    onClick={() => addToCart(product)}
                    className={`px-4 py-2 rounded-lg text-white ${
                      remainingStock === 0
                        ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                    disabled={remainingStock === 0}
                  >
                    {remainingStock === 0 ? "Out of Stock" : "Add to Cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
