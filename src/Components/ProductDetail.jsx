import React, { useState } from 'react';
import "../Components/ProductDetail.css"

const ProductDetail = () => {
  const [isPurchased, setIsPurchased] = useState(false);

  const handlePurchase = () => {
    setIsPurchased(true);
  };

  return (
    <div className="product-detail">
      <h2>Nombre del Producto</h2>
      <p>Descripción del Producto</p>
      <p>Precio: $99.99</p>
      <p>SKU: ABC123</p>
      <p>Cantidad disponible: 10</p>

      <button onClick={handlePurchase}>Comprar</button>

      {isPurchased && <p>Gracias por su compra</p>}
    </div>
  );
};

export default ProductDetail;
