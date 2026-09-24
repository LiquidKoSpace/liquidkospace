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
        <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto 32px' }}>
          <h2 className="h2">
            What Our Clients Say
          </h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
          {reviews.map((review, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(12px)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                boxShadow: '0 8px 32px rgba(8, 123, 138, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.8)'
              }}
            >
              <blockquote
                style={{
                  fontSize: 'clamp(14px, 2vw, 15px)',
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: '#1f2937',
                  margin: '0 0 16px 0',
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
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: '#A2DEDE',
                      border: '2px solid #FFFFFF',
                      overflow: 'hidden',
                      marginBottom: '8px',
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
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: '#A2DEDE',
                      border: '2px solid #FFFFFF',
                      overflow: 'hidden',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(8, 123, 138, 0.15)',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#087B8A'
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                )}
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#111827',
                    margin: '0 0 2px',
                  }}
                >
                  {review.name}
                </p>
                <p
                  style={{
                    fontSize: '13px',
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
