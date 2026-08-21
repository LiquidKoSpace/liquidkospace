const WHATSAPP_URL = 'https://wa.me/27835238896?text=Hi%20Liquid%20Ko%20Space%2C%20I%27d%20like%20to%20start%20an%20order';

export default function FinalCtaSection() {
  return (
    <section id="contact" className="section bg-charcoal">
      <div className="container text-center">
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p className="eyebrow">GET STARTED</p>
          <h2 className="h2" style={{ marginBottom: '24px' }}>
            Your kitchen stock. Sorted. Every week.
          </h2>
          <p style={{ color: 'rgba(250,250,248,0.8)', fontSize: '17px', lineHeight: '1.7', marginBottom: '36px' }}>
            One call is all it takes to get started. No contracts, no complicated sign ups. Just tell us what your kitchen needs and we will take it from there.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary-dark"
            id="final-cta"
          >
            Start your order
          </a>
        </div>
      </div>
    </section>
  );
}
