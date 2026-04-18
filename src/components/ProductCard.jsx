function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3 className="product-title">{product.title}</h3>
      <div className="product-img-wrapper">
        <img src={product.image} alt={product.title} className="product-img" />
      </div>
    </div>
  );
}

export default ProductCard;
