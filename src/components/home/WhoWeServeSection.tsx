import { UtensilsCrossed, Utensils, CookingPot, Store, Building2 } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/27835238896?text=Hi%20Liquid%20Ko%20Space%2C%20I%27d%20like%20to%20start%20an%20order';

const businesses = [
  {
    title: 'Fast food shops',
    icon: UtensilsCrossed,
  },
  {
    title: 'Restaurants',
    icon: Utensils,
  },
  {
    title: 'Caterers',
    icon: CookingPot,
  },
  {
    title: 'Market stalls',
    icon: Store,
  },
  {
    title: 'Canteens',
    icon: Building2,
  },
];

export default function WhoWeServeSection() {
  return (
    <section id="serve" className="section-serve-compact bg-grey-light">
      <div className="container text-center">
        <p className="eyebrow" style={{ marginBottom: '8px' }}>WHO WE SERVE</p>
        <h2 className="h2 serve-compact-heading">Built For Businesses Like Yours</h2>

        <div className="serve-compact-grid">
          {businesses.map((biz) => {
            const Icon = biz.icon;
            return (
              <div className="serve-compact-card" key={biz.title}>
                <div className="serve-icon-wrapper">
                  <Icon className="serve-icon" />
                </div>
                <span className="serve-card-title">{biz.title}</span>
              </div>
            );
          })}
        </div>

        <p className="serve-compact-subtitle">
          Whatever your setup, if you're ordering stock every week and doing it alone, we built this for you.
        </p>

        <div style={{ marginTop: '16px' }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-serve-cta"
            id="serve-cta"
          >
            Start your order
          </a>
        </div>
      </div>
    </section>
  );
}
