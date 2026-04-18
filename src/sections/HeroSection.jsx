import useContent from "../hooks/useContent";
import { fetchHeroContent, fetchNavigation } from "../services/api";
import GradientText from "../components/GradientText";
import GradientButton from "../components/GradientButton";
import Skeleton from "../components/Skeleton";
import Header from "./header";

function HeroSection() {
  const hero = useContent(fetchHeroContent);
  const nav = useContent(fetchNavigation);

  if (hero.loading || nav.loading) {
    return (
      <section className="hero">
        <div className="container">
          <Skeleton height={60} />
          <div style={{ marginTop: "40px" }}>
            <Skeleton height={220} />
          </div>
        </div>
      </section>
    );
  }

  if (hero.error || nav.error) {
    return (
      <section className="hero">
        <div className="container error-box">
          <p>{hero.error || nav.error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </section>
    );
  }

  return (
    <section className="hero">
      <div className="container">
      <Header nav={nav}/>
     

        <div className="hero-box">
         

          <h1>
            {hero.data.headlinePrefix} <br />
            <GradientText>{hero.data.headlineGradient}</GradientText>
          </h1>

          <p>
            {hero.data.subheadlineStart}
            <strong>{hero.data.subheadlineBold}</strong>
            {hero.data.subheadlineEnd}
          </p>

          <GradientButton>{hero.data.cta}</GradientButton>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;