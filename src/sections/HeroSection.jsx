import useContent from "../hooks/useContent";
import { fetchHeroContent, fetchNavigation } from "../services/api";
import GradientText from "../components/GradientText";
import GradientButton from "../components/GradientButton";
import FloatingShape from "../components/FloatingShape";
import Skeleton from "../components/Skeleton";

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
        {/* <header className="navbar">
          <img
            src={nav.data.logo.src}
            alt={nav.data.logo.alt}
            className="logo"
          />

          <nav>
            {nav.data.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <GradientButton>{nav.data.cta}</GradientButton>
        </header> */}

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