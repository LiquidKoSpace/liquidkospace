/* 
  Reviews Section — Featured Testimonials Cards
*/

const reviews = [
  {
    quote: "Thank you so much for your service, very reliable and efficient and I like how it is also open to customers input. We will surely work together again.",
    name: "Nosipho Dube",
    business: "Crisp to Flavour",
    image: "/nosipho-dube.jpg"
  },
  {
    quote: "The service was excellent, it added so much value, we were catering for over 2000 guests, managed to cut down our prep time by 3 hours, remarkable 💯.\nDelivery was done way before time and all veggies were Fresh.\nWe will definitely use your services again, Thank you very much.",
    name: "Chef Keneilwe",
    business: "Sizzling Food",
    image: ""
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section" style={{ backgroundColor: '#C0EBEB' }}>
      <div className="container text-center">
        <p className="eyebrow" style={{ color: '#087B8A', marginBottom: '48px' }}>
          WHAT OUR CLIENTS SAY
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', maxWidth: '960px', margin: '0 auto' }}>
          {reviews.map((review, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(12px)',
                borderRadius: '24px',
                padding: '32px',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                boxShadow: '0 8px 32px rgba(8, 123, 138, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.8)'
              }}
            >
              <blockquote
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: '#1f2937',
                  margin: '0 0 24px 0',
                  whiteSpace: 'pre-line',
                  flexGrow: 1
                }}
              >
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'auto' }}>
                {review.image ? (
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      backgroundColor: '#A2DEDE',
                      border: '3px solid #FFFFFF',
                      overflow: 'hidden',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(8, 123, 138, 0.15)',
                    }}
                  >
                    <img
                      src={review.image}
                      alt={`${review.name}, ${review.business}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 22%',
                        display: 'block',
                      }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      backgroundColor: '#A2DEDE',
                      border: '3px solid #FFFFFF',
                      overflow: 'hidden',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(8, 123, 138, 0.15)',
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: '#087B8A'
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                )}
                <p
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#111827',
                    margin: '0 0 4px',
                  }}
                >
                  {review.name}
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#4B5563',
                    margin: 0,
                  }}
                >
                  {review.business}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
