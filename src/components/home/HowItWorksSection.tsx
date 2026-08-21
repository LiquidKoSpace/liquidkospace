const WHATSAPP_URL = 'https://wa.me/27835238896?text=Hi%20Liquid%20Ko%20Space%2C%20I%27d%20like%20to%20start%20an%20order';

const steps = [
  {
    num: '01',
    title: 'Send your order',
    body: 'Tell us what your kitchen needs via call or WhatsApp, 48 hours before delivery day.',
  },
  {
    num: '02',
    title: 'Approve your cost',
    body: "You'll know and confirm your costs before each delivery. No surprises.",
  },
  {
    num: '03',
    title: 'One delivery, every week',
    body: 'Your full order arrives in a single delivery, on a delivery day that works for you.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="section bg-teal-light">
      <div className="container text-center">
        <p className="eyebrow">THE PROCESS</p>
        <h2 className="h2" style={{ marginBottom: '32px' }}>How It Works</h2>

        <div className="grid-3">
          {steps.map((step) => (
            <div className="card" key={step.num}>
              <div className="badge">{step.num}</div>
              <h3 className="h3" style={{ marginBottom: '12px' }}>{step.title}</h3>
              <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.6' }}>{step.body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '32px' }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            id="how-cta"
          >
            Start your order
          </a>
        </div>
      </div>
    </section>
  );
}
