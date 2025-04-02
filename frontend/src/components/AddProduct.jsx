import React, { useState } from "react";
import { FiPlusCircle, FiUpload } from "react-icons/fi";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    inStock: "",
    image: null, // Store the image file here
    preview: "", // Image preview URL
  });

  // Handle input field changes
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({
        ...product,
        image: file,
        preview: URL.createObjectURL(file), // Create preview URL
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.name || !product.description || !product.price || !product.inStock || !product.image) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    // Creating a FormData object to send to the backend
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("inStock", product.inStock);
    formData.append("image", product.image);

    console.log("Product Added:", product);
    alert("Product Added Successfully!");

    // Reset form
    setProduct({ name: "", description: "", price: "", inStock: "", image: null, preview: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6 flex items-center justify-center gap-2">
          <FiPlusCircle size={28} /> Add New Product
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Product Name */}
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Product Description"
            rows="3"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          {/* Price */}
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price ($)"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* In Stock */}
          <input
            type="number"
            name="inStock"
            value={product.inStock}
            onChange={handleChange}
            placeholder="Stock Quantity"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Image Upload */}
          <label className="block text-gray-400">Upload Product Image:</label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-gray-700 p-3 rounded-lg flex items-center gap-2 hover:bg-gray-600 transition"
            >
              <FiUpload size={20} />
              Choose File
            </label>
          </div>

          {/* Image Preview */}
          {product.preview && (
            <img src={product.preview} alt="Preview" className="w-full h-40 object-cover rounded-md mt-3" />
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
