const WHATSAPP_URL = 'https://wa.me/27835238896?text=Hi%20Liquid%20Ko%20Space%2C%20I%27d%20like%20to%20start%20an%20order';

export default function WhyChooseUsSection() {
  return (
    <section id="why" className="section bg-charcoal">
      <div className="container">
        <div className="two-col">
          {/* Left: Founder photo */}
          <div style={{ textAlign: 'center' }}>
            <img
              src="/gujwa-magagula.jpg"
              alt="Gujwa Magagula, Founder of Liquid Ko Space"
              className="founder-photo"
              style={{ margin: '0 auto', display: 'block' }}
              width={300}
              height={300}
            />
            <p className="founder-name" style={{ color: '#FAFAF8', marginTop: '16px' }}>Gujwa Magagula</p>
            <p className="founder-title" style={{ color: '#6B7280' }}>Founder and Account Manager, Liquid Ko Space</p>
          </div>

          {/* Right: Copy */}
          <div>
            <p className="eyebrow">WHY CHOOSE US</p>
            <h2 className="h2" style={{ marginBottom: '24px' }}>
              You deal with one person. The person accountable for your order.
            </h2>
            <p style={{ color: 'rgba(250,250,248,0.8)', fontSize: '17px', lineHeight: '1.7', marginBottom: '32px' }}>
              At Liquid Ko Space your order is managed personally from the first call to the moment it arrives at your door. No middlemen, no broken telephone, no excuses. Just a dedicated account manager who knows your kitchen, your stock and your delivery schedule by name.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary-dark"
              id="why-cta"
            >
              Start your order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
