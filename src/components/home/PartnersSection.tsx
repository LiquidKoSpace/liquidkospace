import { Truck, Sprout, ShieldCheck, Handshake } from 'lucide-react';

export default function PartnersSection() {
  const suppliers = [
    { name: 'Fresh Produce Growers' },
    { name: 'Butchery & Poultry' },
    { name: 'Dairy & Ambient Goods' },
    { name: 'Packaging & Consumables' },
  ];

  const stakeholders = [
    {
      icon: Truck,
      title: 'Cold-Chain & Logistics',
      badge: 'Distribution',
      description: 'Specialized temperature-controlled transport and route-optimized couriers ensuring temperature integrity and on-time delivery across Gauteng.',
    },
    {
      icon: Sprout,
      title: 'Producer & Farm Collectives',
      badge: 'Sourcing',
      description: 'Direct relationships with regional growers and fresh produce markets for reliable seasonal volume and farm-fresh quality.',
    },
    {
      icon: ShieldCheck,
      title: 'Food Safety & Compliance',
      badge: 'Standards',
      description: 'Strict adherence to national health guidelines, hygiene protocols, and HACCP principles for complete kitchen confidence.',
    },
    {
      icon: Handshake,
      title: 'Enterprise & Financial Partners',
      badge: 'Operations',
      description: 'Seamless digital billing workflows, flexible settlement options, and transparent pricing tailored for independent food businesses.',
    },
  ];

  return (
    <section id="partners" className="section bg-paper">
      <div className="container text-center">
        {/* --- Suppliers Subsection --- */}
        <div className="partners-subsection">
          <p className="eyebrow">OUR PARTNERS</p>
          <h2 className="h2" style={{ marginBottom: '16px' }}>Sourced from suppliers you can trust.</h2>
          <p style={{ color: '#6B7280', fontSize: '16px', maxWidth: '560px', margin: '0 auto 48px', lineHeight: '1.6' }}>
            We work with verified, quality-approved suppliers so every item that arrives at your door meets the standard your kitchen demands.
          </p>

          <div className="grid-4 partners-grid">
            {suppliers.map((supplier) => (
              <div className="partner-card" key={supplier.name}>
                <div className="partner-logo-placeholder" aria-label={`${supplier.name} logo placeholder`}>
                  Logo
                </div>
                <span className="partner-name">{supplier.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Section Divider --- */}
        <hr className="partners-divider" />

        {/* --- Key Partners & Stakeholders Subsection --- */}
        <div className="stakeholders-subsection">
          <p className="eyebrow">ECOSYSTEM & NETWORK</p>
          <h2 className="h2" style={{ marginBottom: '16px' }}>Key Partners & Stakeholders</h2>
          <p style={{ color: '#6B7280', fontSize: '16px', maxWidth: '620px', margin: '0 auto 48px', lineHeight: '1.6' }}>
            Powering a resilient supply chain through trusted collaborations with logistics operators, agricultural bodies, compliance authorities, and financial partners.
          </p>

          <div className="grid-4 stakeholders-grid">
            {stakeholders.map((item) => {
              const Icon = item.icon;
              return (
                <div className="stakeholder-card" key={item.title}>
                  <div className="stakeholder-card-top">
                    <div className="stakeholder-icon-box">
                      <Icon />
                    </div>
                    <span className="stakeholder-badge">{item.badge}</span>
                  </div>
                  <h3 className="stakeholder-title">{item.title}</h3>
                  <p className="stakeholder-desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

