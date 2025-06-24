import { useState } from "react";
import Button from "./UI/Button";

export default function ProductFormModal({ onClose, onSubmit, initialData }) {
  const [product, setProduct] = useState(
    initialData || { name: "", price: "", description: "" }
  );

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(product);
    onClose();
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{initialData ? "Edit Product" : "Create Product"}</h2>
        <form className="form-modal" onSubmit={handleSubmit}>
          <input
            className="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            className="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
          <textarea
            className="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <div className="modal-actions">
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
