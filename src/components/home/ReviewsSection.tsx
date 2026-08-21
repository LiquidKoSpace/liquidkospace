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
    quote: '[PLACEHOLDER — replace with real client quote before launch]',
    name: '[Client Name]',
    title: '[Business Name, Location]',
  },
  {
    stars: 5,
    quote: '[PLACEHOLDER — replace with real client quote before launch]',
    name: '[Client Name]',
    title: '[Business Name, Location]',
  },
  {
    stars: 5,
    quote: '[PLACEHOLDER — replace with real client quote before launch]',
    name: '[Client Name]',
    title: '[Business Name, Location]',
  },
];

export default function ReviewsSection() {
  // HIDDEN — Do not render on launch. 
  // Remove 'return null' and uncomment the JSX below to activate.
  return null;

  /*
  return (
    <section id="reviews" className="section bg-paper">
      <div className="container text-center">
        <p className="eyebrow">WHAT OUR CLIENTS SAY</p>
        <h2 className="h2" style={{ marginBottom: '56px' }}>Built on trust. Proven by results.</h2>

        <div className="grid-3">
          {reviewCards.map((review, i) => (
            <div className="card" key={i} style={{ textAlign: 'left' }}>
              <div className="stars">{'★'.repeat(review.stars)}</div>
              <p style={{ color: '#1A1A1A', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
                {review.quote}
              </p>
              <p style={{ fontWeight: 700, fontSize: '15px', color: '#1A1A1A' }}>{review.name}</p>
              <p style={{ fontSize: '14px', color: '#6B7280' }}>{review.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  */
}
