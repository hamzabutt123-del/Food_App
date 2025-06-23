import { useState } from "react";
import Button from "./UI/Button";
import ProductFormModal from "./ProductFormModal";

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  function handleCreateProduct(product) {
    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editingProduct.id ? { ...product, id: p.id } : p))
      );
    } else {
      setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
    }
    setEditingProduct(null);
  }

  function handleDeleteProduct(id) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="page">
      <h2>Manage Products</h2>
      <Button onClick={() => setModalOpen(true)}>Create Product</Button>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> - ${p.price}
            <p>{p.description}</p>
            <Button onClick={() => { setModalOpen(true); setEditingProduct(p); }}>Edit</Button>
            <Button onClick={() => handleDeleteProduct(p.id)}>Delete</Button>
          </li>
        ))}
      </ul>
      {modalOpen && (
        <ProductFormModal
          initialData={editingProduct}
          onClose={() => { setModalOpen(false); setEditingProduct(null); }}
          onSubmit={handleCreateProduct}
        />
      )}
    </div>
  );
}
