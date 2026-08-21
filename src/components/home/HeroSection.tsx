const WHATSAPP_URL = 'https://wa.me/27835238896?text=Hi%20Liquid%20Ko%20Space%2C%20I%27d%20like%20to%20start%20an%20order';

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="body-copy">
          <p className="eyebrow">FOODSERVICE SUPPLY, GAUTENG</p>
          <h1 className="h1" style={{ marginBottom: '24px' }}>
            Everything your food business needs.
            <span style={{ display: 'block' }}>One call.</span>
            <span style={{ display: 'block' }}>One delivery.</span>
          </h1>
          <p className="body-large" style={{ marginBottom: '36px' }}>
            We know the hours you spend chasing stock across multiple suppliers are costing you time and energy.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            id="hero-cta"
          >
            Start your order
          </a>
        </div>
      </div>
    </section>
  );
}
