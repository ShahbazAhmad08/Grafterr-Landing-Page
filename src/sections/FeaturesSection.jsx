import useContent from "../hooks/useContent";
import { fetchFeaturesContent } from "../services/api";
import Skeleton from "../components/Skeleton";
// import GradientText from "../components/GradientText";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import FloatingShape from "../components/FloatingShape";

function FeaturesSection() {
  const { data, loading, error, retry } = useContent(fetchFeaturesContent);

  if (loading) {
    return (
      <section className="features">
        <div className="container">
          <Skeleton height={40} />
          <div style={{ marginTop: "20px" }}>
            <Skeleton height={20} />
          </div>
          <div style={{ marginTop: "40px", display: "flex", gap: "20px" }}>
            <div style={{ flex: 1 }}><Skeleton height={300} /></div>
            <div style={{ flex: 1 }}><Skeleton height={300} /></div>
            <div style={{ flex: 1 }}><Skeleton height={300} /></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="features">
        <div className="container error-box">
          <p>{error}</p>
          <button onClick={retry}>Retry</button>
        </div>
      </section>
    );
  }

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2>
            {data.titleStart} <span className="text-light">{data.titleHighlight}</span>{data.titleEnd}
          </h2>
           <FloatingShape type="half-circle" className="shape-left" />
          <FloatingShape type="pizza-slice" className="shape-right" />
          <p className="subtitle">{data.subtitle}</p>
        </div>

        <Carousel 
          items={data.products} 
          renderItem={(product) => <ProductCard product={product} />} 
          config={data.carousel} 
        />
      </div>
    </section>
  );
}

export default FeaturesSection;
