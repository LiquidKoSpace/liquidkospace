/* 
  Reviews Section — Featured Testimonial Hero Block
*/

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section" style={{ backgroundColor: '#C0EBEB' }}>
      <div className="container text-center">
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: '#087B8A', marginBottom: '16px' }}>
            WHAT OUR CLIENTS SAY
          </p>
          <blockquote
            style={{
              fontSize: 'clamp(24px, 3.2vw, 36px)',
              fontWeight: 700,
              lineHeight: 1.35,
              color: 'var(--color-ink)',
              letterSpacing: '-0.01em',
              margin: '0 auto 28px',
            }}
          >
            &ldquo;Thank you so much for your service, very reliable and efficient and I like how it is also open to customers input. We will surely work together again.&rdquo;
          </blockquote>

          {/* Client Details: Picture, Name, and Business Name */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Client Picture */}
            <div
              style={{
                width: '92px',
                height: '92px',
                borderRadius: '50%',
                backgroundColor: '#A2DEDE',
                border: '3px solid #FFFFFF',
                overflow: 'hidden',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 18px rgba(8, 123, 138, 0.22)',
              }}
            >
              <img
                src="/nosipho-dube.jpg"
                alt="Nosipho Dube, Crisp to Flavour"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 22%',
                  display: 'block',
                }}
              />
            </div>

            {/* Client Name */}
            <p
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--color-ink)',
                margin: '0 0 4px',
              }}
            >
              Nosipho Dube
            </p>

            {/* Business Name beneath client name */}
            <p
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: '#4B5563',
                margin: 0,
              }}
            >
              Crisp to Flavour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
