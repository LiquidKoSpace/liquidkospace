import { Helmet } from 'react-helmet-async';

const WHATSAPP_URL = 'https://wa.me/27835238896?text=Hi%20Liquid%20Ko%20Space%2C%20I%27d%20like%20to%20start%20an%20order';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Liquid Ko Space</title>
        <meta name="description" content="Learn about Gujwa Magagula and why he started Liquid Ko Space to simplify foodservice supply for independent food businesses in Gauteng." />
      </Helmet>
      <main>
        <section className="section bg-paper">
          <div className="container" style={{ maxWidth: '780px' }}>
            {/* Founder Block */}
            <div className="two-col" style={{ marginBottom: '64px', gap: '40px', alignItems: 'center' }}>
              <div>
                <img
                  src="/gujwa-magagula.jpg"
                  alt="Gujwa Magagula, Founder of Liquid Ko Space"
                  className="founder-photo"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <p style={{ fontSize: '22px', fontWeight: 800, color: '#1A1A1A', marginBottom: '4px' }}>
                  Gujwa Magagula
                </p>
                <p style={{ fontSize: '15px', fontWeight: 500, color: '#6B7280' }}>
                  Founder, Liquid Ko Space
                </p>
              </div>
            </div>

            {/* Bio Section */}
            <div className="body-copy">
              <p className="eyebrow">ABOUT US</p>
              <h1 className="h1" style={{ marginBottom: '32px' }}>
                Why I Started Liquid Ko Space
              </h1>

              <div style={{ fontSize: '17px', lineHeight: '1.8', color: '#1A1A1A' }}>
                <p style={{ marginBottom: '20px' }}>
                  I spent years watching independent food businesses in Gauteng struggle with the same problem. Not the cooking, not the customers, not the hustle. The sourcing. The early morning supplier calls. The drives across town. The stock that never quite arrived the way it was supposed to.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  I started Liquid Ko Space because I knew there had to be a simpler way. One call. One consolidated order. One delivery. Every week. No surprises on cost. No chasing. No running.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  I built this for the owner who does everything themselves. Because I know what that life looks like and I know how much time gets lost just keeping the kitchen stocked.
                </p>
                <p style={{ marginBottom: '32px' }}>
                  When you call Liquid Ko Space, you are talking to me. I source your order, I confirm your cost, and I make sure it arrives at your door on the day we agreed. That is my personal commitment to every client.
                </p>
              </div>

              <p style={{ fontWeight: 700, fontSize: '16px', color: '#1A1A1A' }}>Gujwa Magagula</p>
              <p style={{ fontWeight: 500, fontSize: '14px', color: '#6B7280', marginBottom: '40px' }}>Founder, Liquid Ko Space</p>

              <div style={{ textAlign: 'center' }}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  id="about-cta"
                >
                  Start your order
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
