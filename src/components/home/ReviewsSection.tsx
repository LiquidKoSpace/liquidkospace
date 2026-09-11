/* 
  Reviews Section — HIDDEN ON LAUNCH
  
  This section is commented out / not rendered. 
  The card structure is preserved so it can be activated 
  when real client quotes are available.
  
  To activate: Import and add <ReviewsSection /> to HomePage.tsx
*/

export const reviewCards = [
  {
    stars: 5,
    quote:
      'Switching to Liquid Ko Space cut our weekly sourcing time in half. Having one scheduled delivery with locked-in pricing means our kitchen never gets caught off guard.',
    name: 'Sipho Ndlovu',
    title: 'Head Chef, Urban Bites (Braamfontein)',
  },
  {
    stars: 5,
    quote:
      'Dealing directly with Gujwa has been a game changer for us. If there’s ever a question about stock or special cuts, one quick WhatsApp sorts it immediately.',
    name: 'Elena Rostova',
    title: 'Owner, The Corner Table (Rosebank)',
  },
  {
    stars: 5,
    quote:
      'Reliable deliveries and zero surprise price jumps. Liquid Ko Space is the supply partner independent kitchens in Gauteng have been waiting for.',
    name: 'Tebogo Molefe',
    title: 'Operations Manager, Mzansi Flame Grill (Midrand)',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section bg-paper">
      <div className="container text-center">
        <p className="eyebrow">WHAT OUR CLIENTS SAY</p>
        <h2 className="h2" style={{ marginBottom: '48px' }}>Built on trust. Proven by results.</h2>

        <div className="grid-3">
          {reviewCards.map((review, i) => (
            <div
              className="card"
              key={i}
              style={{
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  className="stars"
                  aria-label={`${review.stars} out of 5 stars`}
                  style={{ color: 'var(--color-teal)', fontSize: '20px', letterSpacing: '2px', marginBottom: '16px' }}
                >
                  {'★'.repeat(review.stars)}
                </div>
                <p
                  style={{
                    color: 'var(--color-ink)',
                    fontSize: '16px',
                    lineHeight: '1.7',
                    marginBottom: '24px',
                  }}
                >
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--color-grey-mid)', paddingTop: '16px', marginTop: 'auto' }}>
                <p style={{ fontWeight: 700, fontSize: '15px', color: 'var(--color-ink)', marginBottom: '2px' }}>
                  {review.name}
                </p>
                <p style={{ fontSize: '14px', color: 'var(--color-slate)' }}>{review.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
