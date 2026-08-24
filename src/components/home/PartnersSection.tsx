import { ShieldCheck, Snowflake, ShoppingBasket } from 'lucide-react';

export default function PartnersSection() {
  const standards = [
    {
      icon: Snowflake,
      title: 'Cold-Chain & Logistics',
      description: 'Specialized temperature-controlled transport and route-optimized couriers ensuring temperature integrity and on-time delivery across Gauteng.',
    },
    {
      icon: ShieldCheck,
      title: 'Food Safety & Compliance',
      description: 'Strict adherence to national health guidelines, hygiene protocols, and HACCP principles for complete kitchen confidence.',
    },
    {
      icon: ShoppingBasket,
      title: 'Sourcing & Quality',
      description: 'Every category, from produce to butchery, dairy, and packaging, is sourced within 48 hours and inspected before dispatch.',
    },
  ];

  return (
    <section id="partners" className="section bg-paper">
      <div className="container text-center">
        {/* --- Standards Subsection --- */}
        <div className="partners-subsection">
          <p className="eyebrow">OUR STANDARD</p>
          <h2 className="h2" style={{ marginBottom: '16px' }}>Checked before it leaves.</h2>
          <p style={{ color: '#6B7280', fontSize: '16px', maxWidth: '560px', margin: '0 auto 48px', lineHeight: '1.6' }}>
            Every order is inspected before dispatch, kept temperature-controlled in transit, and sourced within 48 hours of reaching you.
          </p>

          <div className="grid-3">
            {standards.map((item) => {
              const Icon = item.icon;
              return (
                <div className="partner-card" key={item.title} style={{ padding: '32px 24px' }}>
                  <div className="partner-logo-placeholder" aria-label={item.title}>
                    <Icon size={32} strokeWidth={1.75} style={{ color: 'var(--color-ink)' }} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-ink)', margin: '4px 0 0' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

