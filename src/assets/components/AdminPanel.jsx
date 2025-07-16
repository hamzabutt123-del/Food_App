import { useState, useContext } from "react";
import ProductsContext from "../store/ProductContext";
import Button from "./UI/Button";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const productsCtx = useContext(ProductsContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    image: "",
    category: "pizza",
  });
  const [editingId, setEditingId] = useState(null);

  const categories = ["pizza", "burger", "sandwich", "pasta"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      productsCtx.updateProduct(editingId, formData);
    } else {
      productsCtx.addProduct(formData);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      id: "",
      name: "",
      price: "",
      description: "",
      image: "",
      category: "pizza",
    });
    setEditingId(null);
  };

  const handleEdit = (product) => {
    setFormData({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      category: Object.keys(productsCtx.products).find((cat) =>
        productsCtx.products[cat].some((item) => item.id === product.id)
      ),
    });
    setEditingId(product.id);
  };

  const handleDelete = (id) => {
    productsCtx.deleteProduct(id);
  };

  if (!isAdmin) {
    return (
      <div className="admin-login">
        <h2>Admin Panel</h2>
        <Button onClick={() => setIsAdmin(true)}>Login as Admin</Button>
      </div>
    );
  }
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="admin-panel">
      <h2>Product Management</h2>
      <Button onClick={handleLogout}>Back to Main</Button>

      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="form-actions">
          <Button type="submit">{editingId ? "Update" : "Add"} Product</Button>
          {editingId && <Button onClick={resetForm}>Cancel</Button>}
        </div>
      </form>

      <div className="product-list">
        <h3>Current Products</h3>
        {categories.map((category) => (
          <div key={category} className="category-section">
            <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
            <ul>
              {productsCtx.products[category]?.map((product) => (
                <li key={product.id} className="product-item">
                  <img src={product.image} alt={product.name} width="50" />
                  <div>
                    <h5>{product.name}</h5>
                    <p>${product.price}</p>
                  </div>
                  <div className="product-actions">
                    <Button onClick={() => handleEdit(product)}>Edit</Button>
                    <Button onClick={() => handleDelete(product.id)}>
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
