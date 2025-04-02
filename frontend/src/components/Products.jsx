import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi"; // Importing React Icon
import ProductContext from "../context/ProductContext";
import img1 from "../assets/img1.jpg";

const Products = () => {
  const { products, addToCart } = useContext(ProductContext);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-8">Products</h1>

      {/* Add Product Link */}
      <div className="flex justify-end mb-6">
        <Link
          to="/add-product"
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          <FiPlusCircle size={20} />
          <span>Add Product</span>
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            {/* Product Image */}
            <img src={product.image || img1} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />

            {/* Product Name */}
            <h2 className="text-xl font-bold">{product.name}</h2>

            {/* Product Description */}
            <p className="text-gray-400">{product.description}</p>

            {/* Product Price */}
            <p className="text-blue-400">Price: ${product.price}</p>

            {/* Stock Status */}
            <p className={`mt-2 font-semibold ${product.inStock === 0 ? "text-red-500" : "text-green-400"}`}>
              {product.inStock > 0 ? `In Stock: ${product.inStock}` : "Out of Stock"}
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)}
              disabled={product.inStock === 0}
              className={`mt-4 px-4 py-2 rounded-lg transition duration-300 ${
                product.inStock === 0
                  ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              {product.inStock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
