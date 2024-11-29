import { useState } from 'react';

type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (product: { name: string; stockQuantity: number; price: number; image?: string }) => void;
};

export const CreateProductModal: React.FC<CreateProductModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [stockQuantity, setStockQuantity] = useState<number>(0);
  const [image, setImage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación
    if (name.trim() === '') {
      setError('El nombre del producto es obligatorio');
      return;
    }

    if (price <= 0) {
      setError('El precio debe ser mayor que cero');
      return;
    }

    if (stockQuantity < 0) {
      setError('La cantidad en stock no puede ser negativa');
      return;
    }

    setError('');
    onCreate({ name, price, stockQuantity, image });
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setPrice(0);
    setStockQuantity(0);
    setImage('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Crear Producto</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="product-name">Nombre del producto</label>
            <input
              id="product-name"
              type="text"
              placeholder="Nombre del producto"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="product-price">Precio</label>
            <input
              id="product-price"
              type="number"
              placeholder="Precio"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
              min="0.01"
            />
          </div>

          <div className="form-group">
            <label htmlFor="stock-quantity">Cantidad en stock</label>
            <input
              id="stock-quantity"
              type="number"
              placeholder="Cantidad en stock"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              required
              min="0"
            />
          </div>

          <div className="form-group">
            <label htmlFor="product-image">URL de la imagen (opcional)</label>
            <input
              id="product-image"
              type="text"
              placeholder=""
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button type="submit">Crear Producto</button>
        </form>
        
        <button onClick={onClose} className="close-button">Cerrar</button>
      </div>
    </div>
  );
};
